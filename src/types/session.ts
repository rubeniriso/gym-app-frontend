/**
 * Represents a Session
 */
export type Session = {
  /** Id of the Session */
  session_id: number;
  /** Name of the Session */
  name: string;
  /** Description of the Session */
  description: string;
  /** The Week ID associated to the session. */
  week_id: number;
};
