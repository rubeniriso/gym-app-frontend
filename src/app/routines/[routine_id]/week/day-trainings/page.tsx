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
    weekId === "" ? [] : await getAllWeekTrainingDays(weekId);
  return (
    <div className="font-inter bg-white p-6 rounded-lg shadow-lg space-y-4">
      {weekId.length !== 0 ? (
        <>
          <WeekDataThumbnail weekId={weekId} />
          <AddTrainingDayThumbnail weekId={weekId} />
          <TrainingDayAccordion trainingDays={trainingDays} />
          <div className="flex justify-between items-center">
            <UpdateWeekThumbnail weekId={weekId} />
            <DeleteWeekThumbnail weekId={weekId} routine_id={routine_id} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Page;
