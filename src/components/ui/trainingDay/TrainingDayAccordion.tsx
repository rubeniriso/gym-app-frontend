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
import TrainingDayWrapper from "./TrainingDayWrapper";

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
              <TrainingDayWrapper
                trainingday_id={trainingDay.trainingday_id.toString()}
                description={trainingDay.description}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default TrainingDayAccordion;
