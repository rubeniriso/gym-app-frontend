import { getAllWeekTrainingDays } from "@/model/TrainingDay.model";
import { TrainingDay } from "@/types/trainingDay";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AddTrainingDayThumbnail from "@/components/ui/trainingDay/AddTrainingDayThumbnail";

const Page = async ({ params }: { params: { week_id: string } }) => {
  const weekId = params.week_id;
  const trainingDays: TrainingDay[] = await getAllWeekTrainingDays(weekId);
  return (
    <>
      Week Identifier: {weekId}
      <AddTrainingDayThumbnail weekId={weekId} />
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
