export interface CreateAnnouncementForm {
  title: string;
  content: string;
  affiliation: {
    id: number;
    value: string;
  };
  participationDepartmentIds: {
    id: number;
    value: string;
  }[];
}

export interface CreateAnnouncementFormRequest {
  title: string;
  content: string;
  participationDepartmentIds: number[];
}
