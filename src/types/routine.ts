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
  icon_url: string;
  /** The Icon's URL associated to the Routine type. */
  icon_alt_text: string;
  /** The associated Routine type. */
  routineType: string;
};
