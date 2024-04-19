import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { TrainingDay } from "@/types/trainingDay";
import TrainingDayExercise from "../routines/trainingdayexercise/TrainingDayExerciseCard";
import AddTrainingDayExercise from "@/components/trainingdayexercise/AddTrainingDayExercise";
import TrainingDayExerciseWrapper from "../routines/trainingdayexercise/TrainingDayExerciseWrapper";

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
              {trainingDay.trainingday_id} {trainingDay.description}
              <TrainingDayExerciseWrapper
                trainingday_id={trainingDay.trainingday_id}
              />
              <AddTrainingDayExercise
                trainingday_id={trainingDay.trainingday_id.toString()}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default TrainingDayAccordion;
