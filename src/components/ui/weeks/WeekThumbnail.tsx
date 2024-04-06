"use client";
import { Week } from "@/types/week";
interface RoutineThumbnailProps {
  week: Week;
}
const WeekThumbnail = async ({ week }: RoutineThumbnailProps) => {
  return (
    <div className="flex flex-col">
      <h2>Week ThumbNail Component</h2>
      <h3>{week.name}</h3>
      <p>{week.description}</p>
    </div>
  );
};

export default WeekThumbnail;
