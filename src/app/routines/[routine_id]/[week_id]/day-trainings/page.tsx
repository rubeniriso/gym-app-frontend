import { getAllWeekTrainingDays } from "@/model/TrainingDay.model";
import { TrainingDay } from "@/types/trainingDay";
import AddTrainingDayThumbnail from "@/components/ui/trainingDay/AddTrainingDayThumbnail";
import TrainingDayAccordion from "@/components/ui/trainingDay/TrainingDayAccordion";
import DeleteWeekThumbnail from "@/components/ui/weeks/DeleteWeekThumbnail";
import { Week } from "@/types/week";
import { getAllRotuineWeeks } from "@/model/Week.model";
import WeekDataThumbnail from "@/components/ui/weeks/WeekDataThumbnail";

interface weekPageProps {
  week_id: string;
  routine_id: string;
}

const Page = async ({ params }: { params: weekPageProps }) => {
  let weekId = params.week_id;
  const routine_id = params.routine_id;
  if (weekId === "default") {
    const weeksList: Week[] = await getAllRotuineWeeks(routine_id);
    weekId = weeksList.length === 0 ? "" : weeksList[0].week_id;
  }
  const trainingDays: TrainingDay[] =
    weekId.length === 0 ? [] : await getAllWeekTrainingDays(weekId);

  return (
    <>
      {weekId.length !== 0 ? (
        <>
          <WeekDataThumbnail weekId={weekId} />
          <AddTrainingDayThumbnail weekId={weekId} />
          <TrainingDayAccordion trainingDays={trainingDays} />
          <DeleteWeekThumbnail weekId={weekId} routine_id={routine_id} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Page;
