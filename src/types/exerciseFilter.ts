export type ExerciseFilter = {
  label: string;
  dictionaries: ExerciseFilterDictionary[];
};

export type ExerciseFilterDictionary = {
  id: string;
  name: string;
  count: number;
};

export type SelectedExerciseFilter = {
  label: string;
  ids: string[];
};
