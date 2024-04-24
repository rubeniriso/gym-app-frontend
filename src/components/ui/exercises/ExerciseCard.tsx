import { Exercise } from "@/types/exercise";

interface ExerciseCardProps {
  exercise: Exercise;
}
const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <div className="shadow-md rounded-md border flex flex-col w-[200px] h-auto bg-card">
      <div className="flex flex-row items-center justify-center py-4 mb-4">
        <h3 className="text-center uppercase font-bold">{exercise.name}</h3>
      </div>
      <p className="bg-primary text-secondary text-justify px-2 rounded-b-md py-4">
        {exercise.instructions}
      </p>
    </div>
  );
};

export default ExerciseCard;
