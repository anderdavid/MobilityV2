import { fakeDataI } from './fakeData';
export interface ColumnI {
  title: string;
  data: keyof fakeDataI;
  width?: string;
  /* nameComponent?: string; */
}
