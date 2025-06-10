export interface ApiResponseError {
  response: {
    status: number;
    data: {
      message: string;
      code: string;
      invalidParams?: {
        field: string;
        message: string;
      }[];
    };
  };
}
