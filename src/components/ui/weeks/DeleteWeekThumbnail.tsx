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
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
      variant="destructive"
      type="button"
      onClick={() => handleWeekDeletion(weekId)}
    >
      Delete week
    </Button>
  );
};

export default DeleteWeekThumbnail;
