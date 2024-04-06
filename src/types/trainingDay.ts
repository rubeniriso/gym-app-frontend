/**
 * Represents a Training Day
 */
export type TrainingDay = {
    /** Name of the TrainingDay */
    name: string,
    /** Description of the TrainingDay */
    description: string,
    /** Id of the TrainingDay */
    trainingday_id: number,
    /** Week to which it belongs*/
    week_id: number
};