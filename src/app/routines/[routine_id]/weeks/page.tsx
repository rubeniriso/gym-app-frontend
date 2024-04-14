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
import { useDialog } from "@/components/hooks/useDialog";
import AddWeekThumbnail from "@/components/ui/AddWeekThumbnail";
import { auth } from "@/auth";

const Page = async ({ params }: { params: { routine_id: string } }) => {
  const routineId = params.routine_id;
  const weeks: Week[] = await getAllRotuineWeeks(routineId);
  const session = await auth();

  return (
    <WeekWrapper>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          {weeks &&
            weeks.map((week: Week, index) => (
              <PaginationItem>
                <PaginationLink
                  href={`/routines/${routineId}/weeks/${week.week_id}/day-training/`}
                >
                  {index}
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
