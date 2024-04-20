import { getAllWeekTrainingDays } from "@/model/TrainingDay.model";
import { TrainingDay } from "@/types/trainingDay";
import AddTrainingDayThumbnail from "@/components/ui/trainingDay/AddTrainingDayThumbnail";
import TrainingDayAccordion from "@/components/ui/trainingDay/TrainingDayAccordion";

const Page = async ({ params }: { params: { week_id: string } }) => {
  const weekId = params.week_id;
  const trainingDays: TrainingDay[] = await getAllWeekTrainingDays(weekId);

  return (
    <>
      Week Identifier: {weekId}
      <AddTrainingDayThumbnail weekId={weekId} />
      <TrainingDayAccordion trainingDays={trainingDays} />
    </>
  );
};

export default Page;
