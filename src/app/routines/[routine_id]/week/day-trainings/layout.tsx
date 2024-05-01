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
import { redirect } from "next/navigation";
import Link from "next/link";

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
                    href={{
                      pathname: `/routines/${routineId}/week/day-trainings`,
                      query: { week_id: week.week_id },
                    }}
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
