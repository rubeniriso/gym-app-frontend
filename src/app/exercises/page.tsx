"use client";
import ExerciseCard from "@/components/ui/exercises/ExerciseCard";
import ExerciseFilterCheckbox from "@/components/ui/exercises/filters/ExerciseFilterCheckbox";
import ExerciseFilterBox from "@/components/ui/exercises/filters/ExerciseFilterBox";
import {
  getAllExerciseFilters,
  getAllExercisesFiltered,
} from "@/model/Exercises.model";
import { Exercise } from "@/types/exercise";
import React, { useEffect, useState } from "react";
import {
  ExerciseFilterDictionary,
  ExerciseFilter,
  SelectedExerciseFilter,
} from "@/types/exerciseFilter";
const Exercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [exerciseFilters, setExerciseFilters] = useState<ExerciseFilter[]>([]);
  const [selectedExerciseFilters, setSelectedExerciseFilters] = useState<
    Map<string, string[]>
  >(new Map());
  // Adds an id to selectedExerciseFilters if it's checked and removes it when unchecked
  const handleCheckboxClick = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const id = e.target.id;
    const label = e.target.dataset.label;
    const currentSelectedExerciseFilter = selectedExerciseFilters.get(
      label as string
    );
    if (!currentSelectedExerciseFilter?.includes(id)) {
      const updatedValue = [...(currentSelectedExerciseFilter as string[]), id];
      setSelectedExerciseFilters((prevFilters) => {
        const newFilters = new Map(prevFilters); // Create a new map based on previous state
        newFilters.set(label as string, updatedValue);
        return newFilters; // Return the new map
      });
    } else {
      const updatedValue = currentSelectedExerciseFilter.filter(
        (item) => item !== id
      );
      setSelectedExerciseFilters((prevFilters) => {
        const newFilters = new Map(prevFilters); // Create a new map based on previous state
        newFilters.set(label as string, updatedValue);
        return newFilters; // Return the new map
      });
    }
  };
  //UseEffect to get filter list
  useEffect(() => {
    const getFilters = async () => {
      let selectedExerciseFilterList: Map<string, any> = new Map();
      let exerciseFilterList: ExerciseFilter[] = [];
      const response = await getAllExerciseFilters();
      for (const key in response) {
        if (Object.hasOwnProperty.call(response, key)) {
          const outerLabel: string = key;
          let selectedExerciseFilter: SelectedExerciseFilter = {
            label: outerLabel,
            ids: [],
          };
          let exerciseFilter: ExerciseFilter = {
            label: outerLabel,
            dictionaries: [],
          };
          const innerObj = response[key];
          for (const innerKey in innerObj) {
            if (Object.hasOwnProperty.call(innerObj, innerKey)) {
              const innerValue = innerObj[innerKey];
              const dictionary: ExerciseFilterDictionary = {
                id: innerKey,
                name: innerValue["name"],
                count: innerValue["count"],
              };
              exerciseFilter.dictionaries.push(dictionary);
            }
          }
          selectedExerciseFilterList.set(
            selectedExerciseFilter.label as string,
            []
          );
          exerciseFilterList.push(exerciseFilter);
        }
      }
      setSelectedExerciseFilters(selectedExerciseFilterList);
      setExerciseFilters(exerciseFilterList);
    };
    getFilters();
  }, []);
  useEffect(() => {
    const plainObject = Object.fromEntries(selectedExerciseFilters);
    const jsonString = JSON.stringify(plainObject);
    let hasNonEmptyValue = false;

    selectedExerciseFilters.forEach((value, key) => {
      if (Array.isArray(value) && value.length > 0) {
        hasNonEmptyValue = true;
      }
    });
    if (hasNonEmptyValue) {
      const getExercises = async () => {
        const response = await getAllExercisesFiltered(jsonString);
        setExercises(response);
      };
      getExercises();
    } else {
      setExercises([]);
    }
  }, [selectedExerciseFilters]);
  return (
    <div className="flex flex-row gap-12 pt-8 px-8">
      <ExerciseFilterBox>
        {exerciseFilters.map((exerciseFilter, index) => (
          <ExerciseFilterCheckbox
            handleOnClick={handleCheckboxClick}
            exerciseFilter={exerciseFilter}
            key={index}
          />
        ))}
      </ExerciseFilterBox>
      <div className="flex flex-row gap-3">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default Exercises;
