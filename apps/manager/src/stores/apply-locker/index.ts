// context api 사용해서 전역 상태 관리

import { Department, Organization } from "@/apis/dtos/sign-up";
import { CreateEventForm } from "@/types/event";
import { ChangeEvent, createContext } from "react";

export interface ApplyFormContextType {
  formData: CreateEventForm;
  setFormData: (formData: CreateEventForm) => void;
  onAddFloor: () => void;
  onChangeFloorNumber: (floorId: number, floorNumber: number) => void;
  onAddPrefix: (floorId: number) => void;
  onChangePrefix: (floorId: number, prefixId: number, lockerPrefix: string) => void;
  onAddRange: (floorId: number, prefixId: number) => void;
  onChangeRange: (
    floorId: number,
    prefixId: number,
    rangeId: number,
    type: "start" | "end",
    lockerNumber: number | null,
  ) => void;
  onDeleteFloor: (floorId: number) => void;
  onDeletePrefix: (floorId: number, prefixId: number) => void;
  onDeleteRange: (floorId: number, prefixId: number, rangeId: number) => void;
  organizations: Organization[];
  departments: Department[];
  onDeleteDepartment: (id: number) => void;
  onSelectDepartment: (e: ChangeEvent<HTMLSelectElement>) => void;
  onSelectOrganizations: (e: ChangeEvent<HTMLSelectElement>) => void;
  onCreateEvent: () => void;
  isCreateEventLoading: boolean;
}

const initApplyFormValue = {
  formData: {
    title: "",
    startAt: null,
    endAt: null,
    affiliation: {
      id: 0,
      value: "값을 선택해주세요.",
    },
    participationDepartmentIds: [],
    floors: [
      {
        floorNumber: null,
        floorId: 1,
        prefixes: [
          {
            prefixId: 1,
            lockerPrefix: "",
            ranges: [
              {
                rangeId: 1,
                lockerStartNumber: null,
                lockerEndNumber: null,
              },
            ],
          },
        ],
      },
    ],
  },
  setFormData: () => {},
  onAddFloor: () => {},
  onChangeFloorNumber: () => {},
  onAddPrefix: () => {},
  onChangePrefix: () => {},
  onAddRange: () => {},
  onChangeRange: () => {},
  onDeleteFloor: () => {},
  onDeletePrefix: () => {},
  onDeleteRange: () => {},
  organizations: [],
  departments: [],
  onDeleteDepartment: () => {},
  onSelectDepartment: () => {},
  onSelectOrganizations: () => {},
  onCreateEvent: () => {},
  isCreateEventLoading: false,
};

export const ApplyFormContext = createContext<ApplyFormContextType>(initApplyFormValue);
