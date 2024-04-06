import { getAllWeekTrainingDays } from "@/model/TrainingDay.model";
import { TrainingDay } from "@/types/trainingDay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Page = async ({ params }: { params: { slug: number } }) => {
  const weekId = params.slug;
  const trainingDays: TrainingDay[] = await getAllWeekTrainingDays(weekId);

  return (
    <>
      Week Identifier: {weekId}
      <Accordion type="single" collapsible>
        {trainingDays &&
          trainingDays.map((trainingDay: TrainingDay, index) => (
            <AccordionItem value={trainingDay.name}>
              <AccordionTrigger>{trainingDay.name}</AccordionTrigger>
              <AccordionContent>{trainingDay.description}</AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </>
  );
};

export default Page;
