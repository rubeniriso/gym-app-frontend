"use client";

import { TrainingDayExercise } from "@/types/data/TrainingDayExercise";
import AddTrainingDayExercise from "../routines/trainingdayexercise/AddTrainingDayExercise";
import TrainingDayExerciseForm from "../routines/trainingdayexercise/TrainingDayExerciseForm";
import { useEffect, useState } from "react";
import { getTrainingDayExercisesByTrainingDayId } from "@/model/TrainingDayExercise.model";
import { Button } from "@/components/ui/button";
import { deleteTrainingDay } from "@/model/TrainingDay.model";
import UpdateTrainingDayThumbnail from "./UpdateTrainingDayThumbnail";
import { TrainingDay } from "@/types/trainingDay";

interface TrainingDayWrapperProps {
  trainingDay: TrainingDay;
}

const TrainingDayWrapper = ({ trainingDay }: TrainingDayWrapperProps) => {
  const trainingday_id = trainingDay.trainingday_id;
  const [trainingDayExercises, setTrainingDayExercises] = useState<
    TrainingDayExercise[]
  >([]);

  const handleTrainingDayExerciseUpdate = (
    trainingDayExercise: TrainingDayExercise
  ) => {
    setTrainingDayExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.trainingdayexercise_id ===
        trainingDayExercise.trainingdayexercise_id
          ? trainingDayExercise
          : exercise
      )
    );
  };

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchTrainingDayExercises = async () => {
      try {
        const trainingDayExercises: TrainingDayExercise[] =
          await getTrainingDayExercisesByTrainingDayId(trainingday_id);
        setTrainingDayExercises(trainingDayExercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };
    fetchTrainingDayExercises();
  }, [toggle]);

  const handleTrainingDayExercisesChange = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <>
      Training Day description: {trainingDay.description}
      <div className="flex flex-row items-center justify-center gap-3">
        <AddTrainingDayExercise
          trainingday_id={trainingday_id.toString()}
          onAddTrainingDayExercise={handleTrainingDayExercisesChange}
        />
      </div>
      <TrainingDayExerciseForm
        trainingDayExercises={trainingDayExercises}
        onDeleteTrainingDayExercise={handleTrainingDayExercisesChange}
      />
      <Button
        className="mt-5"
        variant="destructive"
        type="button"
        onClick={() => deleteTrainingDay(trainingday_id)}
      >
        Delete training day
      </Button>
      <UpdateTrainingDayThumbnail trainingDay={trainingDay} />
    </>
  );
};

export default TrainingDayWrapper;
