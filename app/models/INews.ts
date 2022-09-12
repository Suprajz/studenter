export interface INews extends INewsApi {
  UI: {};
}

export interface INewsApi {
  id: number;
  title: string;
  text: string;
  short_text: string;
  image: string;
  created_at: Date;
}
