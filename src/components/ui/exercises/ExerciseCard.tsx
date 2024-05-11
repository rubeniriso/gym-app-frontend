import { Exercise } from "@/types/exercise";
import Image from "next/image";

interface ExerciseCardProps {
  exercise: Exercise;
}
const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <div className=" shadow-xl rounded-[0.75rem] border flex flex-col w-[200px]  bg-card justify-between">
      <div className="bg-secondary rounded-t-[0.75rem]  flex flex-row items-center justify-center py-4 ">
        <h3 className="text-center text-md text-wrap font-semibold px-2 text-white uppercase font-bold">
          {exercise.name}
        </h3>
      </div>
      <Image
        src={
          "https://www.inspireusafoundation.org/wp-content/uploads/2023/02/negative-push-up-starting-position-1536x1255.png"
        }
        alt={exercise.name}
        width={200}
        height={200}
      />
    </div>
  );
};

export default ExerciseCard;
