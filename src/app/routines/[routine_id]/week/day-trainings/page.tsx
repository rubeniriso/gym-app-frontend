import { getAllWeekTrainingDays } from "@/model/TrainingDay.model";
import { TrainingDay } from "@/types/trainingDay";
import AddTrainingDayThumbnail from "@/components/ui/trainingDay/AddTrainingDayThumbnail";
import TrainingDayAccordion from "@/components/ui/trainingDay/TrainingDayAccordion";
import DeleteWeekThumbnail from "@/components/ui/weeks/DeleteWeekThumbnail";
import { Week } from "@/types/week";
import { getAllRotuineWeeks } from "@/model/Week.model";
import WeekDataThumbnail from "@/components/ui/weeks/WeekDataThumbnail";
import UpdateWeekThumbnail from "@/components/ui/weeks/UpdateWeekThumbnail";

interface weekPageProps {
  params: {
    routine_id: string;
  };
  searchParams: {
    week_id: string;
  };
}

const Page = async ({ params, searchParams }: weekPageProps) => {
  let weekId;
  const routine_id = params.routine_id;
  if (searchParams.week_id == "") {
    const weeksList: Week[] = await getAllRotuineWeeks(routine_id);
    weekId = weeksList.length === 0 ? "" : weeksList[0].week_id;
  } else {
    weekId = searchParams.week_id;
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
          <UpdateWeekThumbnail weekId={weekId} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Page;
