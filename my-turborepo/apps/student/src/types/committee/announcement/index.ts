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

export interface AnnouncementDetailForm {
  title: string;
  content: string;
  departments: { id: number; name: string }[];
  createdAt: Date | null;
  updatedAt: Date | null;
  writer: string;
  affiliation: {
    id: number;
    value: string;
  };
  participationDepartmentIds: {
    id: number;
    value: string;
  }[];
}

export interface PutAnnouncementFormRequest {
  title: string;
  content: string;
  participationDepartmentIds: number[];
}
