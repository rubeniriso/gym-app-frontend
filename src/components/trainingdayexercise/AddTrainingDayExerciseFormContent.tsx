import { useDialog } from "@/components/hooks/useDialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { newtrainingDayData } from "@/types/data/NewTrainingDayData";
import { newTrainingDayExerciseData } from "@/types/data/NewTrainingDayExerciseData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { getAllExercises } from "@/model/Exercises.model";
import { DialogFooter } from "../ui/dialog";
import { Exercise } from "@/types/exercise";
import { useEffect, useState } from "react";
interface AddTrainingDayExerciseFormContentProps {
  submitFunction: Function;
  title: string;
  submit_id: string;
}
const AddTrainingDayExerciseFormContent = ({
  submitFunction,
  submit_id,
  title,
}: AddTrainingDayExerciseFormContentProps) => {
  const form = useForm<z.infer<typeof newTrainingDayExerciseData>>({
    resolver: zodResolver(newTrainingDayExerciseData),
    defaultValues: {
      exercise_id: "",
    },
  });
  const { onClose } = useDialog();
  function onSubmit(values: z.infer<typeof newTrainingDayExerciseData>) {
    console.log(values);
    submitFunction(submit_id, values);
    onClose();
  }
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Exercise[] = await getAllExercises();
        setExercises(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Clean-up function
    return () => {
      // You can perform clean-up tasks here if needed
    };
  }, []); // Empty dependency array means this effect will only run once after initial render
  return (
    <div>
      {exercises ? (
        <>
          <h1 className="text-center font-bold text-md">{title}</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="exercise_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Routine type</FormLabel>
                    <Select
                      defaultValue={field.value.toString()}
                      onValueChange={field.onChange}
                      value={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a routine type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {exercises.map((exercise) => (
                          <SelectItem
                            key={exercise.exercise_id}
                            value={exercise.exercise_id.toString()}
                          >
                            {exercise.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sets"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target number of sets</FormLabel>
                    <FormControl>
                      <Input placeholder="Sets" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reps"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target number of reps</FormLabel>
                    <FormControl>
                      <Input placeholder="Reps" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target weight</FormLabel>
                    <FormControl>
                      <Input placeholder="Weight" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rir"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target RIR</FormLabel>
                    <FormControl>
                      <Input placeholder="RIR" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-row items-center justify-center">
                <DialogFooter>
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </div>
            </form>
          </Form>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AddTrainingDayExerciseFormContent;
