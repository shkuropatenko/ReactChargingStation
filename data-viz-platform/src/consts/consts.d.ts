export interface Indicator {
  title: string;
  text: string;
  cost: string;
}

declare module "../consts/consts" {
  export const indicators: Indicator[];
}
