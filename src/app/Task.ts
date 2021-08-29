// Interfaces are similar to classes
export interface Task {
  id?: number; // The ? makes the id optional
  text: string;
  day: string;
  reminder: boolean;
}
