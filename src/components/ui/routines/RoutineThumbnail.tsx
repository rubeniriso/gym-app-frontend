"use client";
import { Routine } from "@/types/routine";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { activateUserRoutine } from "@/model/User.model";
import { Button } from "../button";
interface RoutineThumbnailProps {
  icon_url: string;
  icon_alt_text: string;
}
const RoutineThumbnail = async ({
  icon_url,
  icon_alt_text,
}: RoutineThumbnailProps) => {
  return (
    <Image
      className="rounded-xl"
      alt={icon_alt_text}
      src={icon_url}
      width={300}
      height={300}
    />
  );
};

export default RoutineThumbnail;
