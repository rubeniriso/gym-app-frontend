import React from "react";
import { ExerciseFilter } from "@/types/exerciseFilter";
import { Checkbox } from "../../checkbox";

interface ExerciseFilterCheckboxProps {
  exerciseFilter: ExerciseFilter;
  handleOnClick: any;
}
const ExerciseFilterCheckbox = ({
  exerciseFilter,
  handleOnClick,
}: ExerciseFilterCheckboxProps) => {
  return (
    <div className="flex flex-col">
      <p className="uppercase font-bold">{exerciseFilter.label}</p>
      {exerciseFilter.dictionaries.map((dictionary, index) => (
        <div className="px-4 flex flex-row items-center gap-4" key={index}>
          <Checkbox
            data-label={exerciseFilter.label}
            id={dictionary.id}
            onClick={handleOnClick}
          />
          <p>{dictionary.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ExerciseFilterCheckbox;
