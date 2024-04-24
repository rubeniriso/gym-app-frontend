import WeekWrapper from "@/components/ui/weeks/WeekWrapper";
import { getAllRotuineWeeks } from "@/model/Week.model";
import { Week } from "@/types/week";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import AddWeekThumbnail from "@/components/ui/weeks/AddWeekThumbnail";

const Page = async ({ params }: { params: { routine_id: string } }) => {
  const routineId = params.routine_id;
  const weeks: Week[] = await getAllRotuineWeeks(routineId);
  return (
    <WeekWrapper>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          {weeks &&
            weeks.map((week: Week, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href={`/routines/${routineId}/weeks/${week.week_id}/day-training/`}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <AddWeekThumbnail routineId={routineId} />
    </WeekWrapper>
  );
};

export default Page;
