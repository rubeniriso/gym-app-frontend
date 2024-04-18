import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { TrainingDay } from "@/types/trainingDay";
import TrainingDayExercise from "../routines/trainingdayexercise/TrainingDayExercise";

interface TrainingDayAccordionProps {
  trainingDays: TrainingDay[];
}

const TrainingDayAccordion = ({ trainingDays }: TrainingDayAccordionProps) => {
  return (
    <Accordion type="single" collapsible>
      {trainingDays &&
        trainingDays.map((trainingDay: TrainingDay, index) => (
          <AccordionItem key={index} value={trainingDay.name}>
            <AccordionTrigger>{trainingDay.name}</AccordionTrigger>
            <AccordionContent>{trainingDay.description}</AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default TrainingDayAccordion;
