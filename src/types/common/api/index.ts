export interface ApiResponseError {
  response: {
    status: number;
    data: {
      message: string;
    };
  };
}
