import { getWeekData } from "@/model/Week.model";
import { Week } from "@/types/week";
import { useEffect, useState } from "react";

interface WeekDataThumbnailProps {
  weekId: string;
}

const WeekDataThumbnail = async ({ weekId }: WeekDataThumbnailProps) => {
  const weekData: Week = await getWeekData(weekId);

  return (
    <div>
      {weekData?.week_id ? (
        <>
          <h3>Week Name: {weekData?.name}</h3>
          <p>Week description: {weekData?.description}</p>
        </>
      ) : (
        <>Loading week data ...</>
      )}
    </div>
  );
};

export default WeekDataThumbnail;
