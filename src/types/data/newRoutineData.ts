/**
 * Represents a Routine
 */
export type newRoutineData = {
  /** name of the Routine */
  name: string;
  /** Description of the Routine */
  description?: string;
  /** The associated Routine type. */
  routinetype_id: string;
  /** The User */
  user_id: number;
};
