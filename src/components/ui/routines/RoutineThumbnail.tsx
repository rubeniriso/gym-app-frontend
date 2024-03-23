"use client";
import { Routine } from "@/types/routine";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { activateUserRoutine } from "@/model/User.model";
import { Button } from "../button";
interface RoutineThumbnailProps {
  routine: Routine;
  isActive: boolean;
}
const RoutineThumbnail = async ({
  routine,
  isActive,
}: RoutineThumbnailProps) => {
  const handleChange = async () => {
    activateUserRoutine(1, routine.routine_id);
  };
  return (
    <div className="flex flex-col shadow-md rounded-xl">
      <a className="hover:cursor-pointer">
        <Image
          alt={routine.iconAltText}
          src={routine.icon_url}
          width={400}
          height={400}
        />
        <div className="flex flex-row px-6 justify-between">
          <div>
            <h2>{routine.name}</h2>
            <p>{routine.description}</p>
          </div>
          <div>
            <Label>Activate routine</Label>
            <Switch checked={isActive} onClick={handleChange} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default RoutineThumbnail;
