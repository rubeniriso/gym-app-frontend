import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { TrainingDay } from "@/types/trainingDay";
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
              <TrainingDayWrapper trainingDay={trainingDay} />
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default TrainingDayAccordion;
