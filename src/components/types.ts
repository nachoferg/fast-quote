export interface IQuoteParams {
  qid: string;
  owner: string;
}

export interface IQuote {
  qid: string;
  owner: string;
  duration: unknown;
  smoker: string;
  gender: string;
  quote: string;
  age: string;
  updatedAt?: string;
  createdAt?: string;
}

export interface StringMap {
  [key: string]: any;
}
