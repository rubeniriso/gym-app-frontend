"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useEffect, useState } from "react";
import ModalForm from "../form/ModalForm";
import RoutineFormContent from "./RoutineFormContent";
import { NewRoutineData } from "@/types/data/NewRoutineData";

const AddRoutineThumbnail = () => {
  const [isNewRoutineModalOpen, setIsNewRoutineModalOpen] =
    useState<boolean>(false);
  const [newRoutineFormData, setNewRoutineFormData] =
    useState<NewRoutineData | null>(null);

  const handleOpenNewRoutineModal = () => {
    console.log("perico");
    setIsNewRoutineModalOpen(true);
  };

  const handleCloseNewRoutineModal = () => {
    setIsNewRoutineModalOpen(false);
  };
  const handleFormSubmit = (data: NewRoutineData): void => {
    setNewRoutineFormData(data);
    handleCloseNewRoutineModal();
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
        <RoutineFormContent handleFormSubmit={handleFormSubmit} />
      </ModalForm>
    </>
  );
};

export default AddRoutineThumbnail;
