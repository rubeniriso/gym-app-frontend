/**
 * Represents a Routine
 */
export type Routine = {
  /** Id of the Routine */
  routine_id: number;
  /** name of the Routine */
  name: string;
  /** Description of the Routine */
  description: string;
  /** The Icon's URL associated to the Routine type. */
  iconUrl: string;
  /** The Icon's URL associated to the Routine type. */
  iconAltText: string;
  /** The associated Routine type. */
  routineType: string;
};
