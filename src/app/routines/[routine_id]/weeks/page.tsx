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
              <PaginationItem>
                <PaginationLink
                  href={`/routines/routine/${week.week_id}/day-training/`}
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
    </WeekWrapper>
  );
};

export default Page;
