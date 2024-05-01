"use client";
import { deleteWeek } from "@/model/Week.model";
import { Button } from "@/components/ui/button";

interface DeleteWeekProps {
  weekId: string;
  routine_id: string;
}

const DeleteWeekThumbnail = ({ weekId }: DeleteWeekProps) => {
  const handleWeekDeletion = (weekId: string) => {
    deleteWeek(weekId);
  };

  return (
    <Button
      className="mt-5"
      variant="destructive"
      type="button"
      onClick={() => handleWeekDeletion(weekId)}
    >
      Delete week
    </Button>
  );
};

export default DeleteWeekThumbnail;
