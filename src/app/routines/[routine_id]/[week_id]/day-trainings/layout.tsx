"use server";

import { Toaster } from "@/components/ui/toaster";
import AddWeekThumbnail from "@/components/ui/weeks/AddWeekThumbnail";
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

interface LayoutProps {
  children: React.ReactNode;
  params: { routine_id: string };
}
const layout = async ({ children, params }: LayoutProps) => {
  const routineId = params.routine_id;
  const weeks: Week[] = await getAllRotuineWeeks(routineId);

  return (
    <section>
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
                    href={`/routines/${routineId}/${week.week_id}/day-trainings`}
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
      {children}
      <Toaster />
    </section>
  );
};

export default layout;
