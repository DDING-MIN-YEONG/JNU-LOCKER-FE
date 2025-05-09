export interface QueryError {
  response: {
    status: number;
  };
  message?: string;
}
