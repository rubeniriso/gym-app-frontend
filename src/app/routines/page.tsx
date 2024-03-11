import React, { useEffect, useState } from "react";
import RoutinesContainer from "../../components/ui/routines/RoutinesContainer";
import { useRouter } from "next/navigation";
import { Routine } from "../../types/routine";
import { getAllUserRoutines } from "@/model/Routine.model";
import RoutineThumbnail from "../../components/ui/routines/RoutineThumbnail";

const Page = async () => {
  //const router = useRouter();
  //const userId = parseInt(router.query.userId as string, 10);
  //const routines = await getAllUserRoutines(userId)
  const routines: Routine[] = [
    {
      routine_id: 1,
      name: "My Routine 1",
      description: "Description of my routine 1",
      iconUrl:
        "https://previews.123rf.com/images/ayucity/ayucity1505/ayucity150500011/39716125-mancuerna-ejercicio-simple-a-mano.jpg",
      iconAltText: "Type routine 1",
      routineType: "Type of my routine 1",
    },
    {
      routine_id: 2,
      name: "My Routine 2",
      description: "Description of my routine 2",
      iconAltText: "Type routine 2",
      iconUrl:
        "https://previews.123rf.com/images/ayucity/ayucity1505/ayucity150500011/39716125-mancuerna-ejercicio-simple-a-mano.jpg",
      routineType: "Type of my routine 2",
    },
  ];
  return (
    <RoutinesContainer>
      {routines &&
        routines.map((routine, index) => (
          <RoutineThumbnail key={index} routine={routine} />
        ))}
    </RoutinesContainer>
  );
};

export default Page;
