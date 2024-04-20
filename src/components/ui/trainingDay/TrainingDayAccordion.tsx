import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { TrainingDay } from "@/types/trainingDay";
import TrainingDayExercise from "../routines/trainingdayexercise/TrainingDayExerciseCard";
import AddTrainingDayExercise from "@/components/ui/routines/trainingdayexercise/AddTrainingDayExercise";
import TrainingDayExerciseForm from "../routines/trainingdayexercise/TrainingDayExerciseForm";

interface TrainingDayAccordionProps {
  trainingDays: TrainingDay[];
}

const TrainingDayAccordion = ({ trainingDays }: TrainingDayAccordionProps) => {
  return (
    <Accordion type="multiple">
      {trainingDays &&
        trainingDays.map((trainingDay: TrainingDay, index) => (
          <AccordionItem key={index} value={trainingDay.name}>
            <AccordionTrigger>{trainingDay.name}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-row items-center justify-center gap-3">
                {trainingDay.description} -
                <AddTrainingDayExercise
                  trainingday_id={trainingDay.trainingday_id.toString()}
                />
              </div>
              <TrainingDayExerciseForm
                trainingday_id={trainingDay.trainingday_id}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default TrainingDayAccordion;
