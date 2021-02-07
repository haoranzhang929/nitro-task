export interface ListData {
  id: number;
  location: string;
  time: number;
  author: string;
  text: string;
}

export interface ForamtedList {
  key: string;
  data: ListData[];
}
