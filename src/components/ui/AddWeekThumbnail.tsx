"use client";
import { NewRoutineData } from "@/types/data/NewRoutineData";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import ModalForm from "./form/ModalForm";
import WeekFormContent from "./weeks/WeekFormContent";

interface AddElementThumbnailProps {
  routineId: number;
}

const AddWeekThumbnail = ({ routineId }: AddElementThumbnailProps) => {
  const [isNewRoutineModalOpen, setIsNewRoutineModalOpen] =
    useState<boolean>(false);

  const handleOpenNewRoutineModal = () => {
    setIsNewRoutineModalOpen(true);
  };

  const handleCloseNewRoutineModal = () => {
    setIsNewRoutineModalOpen(false);
  };
  const handleFormSubmit = (data: NewRoutineData): void => {
    handleCloseNewRoutineModal();
    createWeek(data);
  };

  const createWeek = (data: NewRoutineData) => {
    console.log(data);

    fetch("http://localhost:5002/api/v1/weeks/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        routine_id: routineId,
        name: data.name,
        description: data.description,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("Success:", responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <button
        className="flex flex-row items-center justify-center w-[400px] h-[400px] bg-slate-200"
        onClick={handleOpenNewRoutineModal}
      >
        <AddCircleOutlineIcon width={400} height={400} />
      </button>
      <ModalForm
        isOpen={isNewRoutineModalOpen}
        onClose={handleCloseNewRoutineModal}
        hasCloseBtn={true}
      >
        <WeekFormContent handleFormSubmit={handleFormSubmit} />
      </ModalForm>
    </>
  );
};

export default AddWeekThumbnail;
