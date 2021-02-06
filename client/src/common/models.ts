export interface ListData {
  id: number;
  location: string;
  time: string;
  author: string;
  text: string;
}

export interface ForamtedList {
  key: string;
  data: ListData[];
}
