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

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchTrainingDayExercises = async () => {
      try {
        const trainingDayExercises: TrainingDayExercise[] =
          await getTrainingDayExercisesByTrainingDayId(trainingday_id);
        console.log("Training day identifier: ", trainingday_id);
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
    <div className="font-inter bg-white p-6 rounded-lg shadow-lg space-y-4">
      <div className="text-gray-600 text-base">
        <span className="font-medium">Description:</span>{" "}
        {trainingDay.description}
      </div>
      <div className="flex flex-row items-center justify-center gap-3">
        <AddTrainingDayExercise
          trainingday_id={trainingday_id.toString()}
          onAddTrainingDayExercise={handleTrainingDayExercisesChange}
        />
      </div>
      <TrainingDayExerciseForm
        trainingday_id={trainingday_id}
        trainingDayExercises={trainingDayExercises}
        onDeleteTrainingDayExercise={handleTrainingDayExercisesChange}
      />
      <div className="flex justify-between mt-5">
        <UpdateTrainingDayThumbnail trainingDay={trainingDay} />
        <Button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
          variant="destructive"
          type="button"
          onClick={() => deleteTrainingDay(trainingday_id)}
        >
          Delete training day
        </Button>
      </div>
    </div>
  );
};

export default TrainingDayWrapper;
