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
    <div className="font-inter bg-gray-50 p-6 rounded-lg shadow-lg">
      <Accordion type="multiple">
        {trainingDays &&
          trainingDays.map((trainingDay, index) => (
            <AccordionItem key={index} value={trainingDay.name}>
              <AccordionTrigger className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
                {trainingDay.name}
              </AccordionTrigger>
              <AccordionContent className="p-4 bg-white border-t border-gray-200">
                <TrainingDayWrapper trainingDay={trainingDay} />
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
};

export default TrainingDayAccordion;
