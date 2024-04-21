"use client";

import { getWeekData } from "@/model/Week.model";
import { Week } from "@/types/week";
import { useEffect, useState } from "react";

interface WeekDataThumbnailProps {
  weekId: string;
}

const WeekDataThumbnail = ({ weekId }: WeekDataThumbnailProps) => {
  const [week, setWeekData] = useState<Week>();
  useEffect(() => {
    const fetchWeekData = async () => {
      const weekData = await getWeekData(weekId);
      setWeekData(weekData);
    };
    fetchWeekData();
  }, [weekId]);

  return (
    <div>
      {week?.week_id ? (
        <>
          <h3>Week Name: {week?.name}</h3>
          <p>Week description: {week?.description}</p>
        </>
      ) : (
        <>Loading week data ...</>
      )}
    </div>
  );
};

export default WeekDataThumbnail;
