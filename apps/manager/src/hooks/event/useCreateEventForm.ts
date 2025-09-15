import { CREATE_EVENT_VALIDATION } from "@/constants/validation/createEvent";
import { createEventValidator } from "@/functions/validator/createEventValidator";
import { useCreateEvent } from "@/hooks/tanstack-query/event/useCreateEvent";
import { useDepartmentsQuery, useOrganizationsQuery } from "@/hooks/tanstack-query/common/sign-up";
import { CreateEventForm } from "@/types/event";
import { ChangeEvent, useState } from "react";
import { convertCreateEventForm } from "@/functions/convertCreateEventForm";

export const useCreateEventForm = () => {
  const [formData, setFormData] = useState<CreateEventForm>({
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
  });
  const { onCreateEvent: createEvent, isCreateEventLoading } = useCreateEvent();

  let { data: organizations } = useOrganizationsQuery("학생회");

  if (!organizations) {
    organizations = [{ id: 0, value: "값을 선택해주세요." }];
  } else {
    organizations = [{ id: 0, value: "값을 선택해주세요." }, ...organizations];
  }

  let departments = useDepartmentsQuery(formData.affiliation.id);

  if (!departments) {
    departments = [{ id: 0, value: "값을 선택해주세요." }];
  }

  const onSelectOrganizations = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedId = Number(e.target.options[e.target.selectedIndex].getAttribute("data-id"));

    setFormData((prev) => ({
      ...prev,
      affiliation: {
        id: selectedId,
        value: value,
      },
    }));
  };

  const onSelectDepartment = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedId = Number(e.target.options[e.target.selectedIndex].getAttribute("data-id"));

    const isDuplicate = formData.participationDepartmentIds.some((department) => department.id === selectedId);

    if (isDuplicate) {
      alert(CREATE_EVENT_VALIDATION.department.duplicate);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      participationDepartmentIds: [
        ...prev.participationDepartmentIds,
        {
          id: selectedId,
          value: value,
        },
      ],
    }));
  };

  const onDeleteDepartment = (id: number) => {
    setFormData((prev) => ({
      ...prev,
      participationDepartmentIds: prev.participationDepartmentIds.filter((department) => department.id !== id),
    }));
  };

  const onAddFloor = () => {
    const newFloor: CreateEventForm["floors"][number] = {
      floorNumber: null,
      floorId: Date.now(),
      prefixes: [
        {
          prefixId: Date.now(),
          lockerPrefix: "",
          ranges: [
            {
              rangeId: Date.now(),
              lockerStartNumber: null,
              lockerEndNumber: null,
            },
          ],
        },
      ],
    };
    setFormData((prev) => ({
      ...prev,
      floors: [...prev.floors, newFloor],
    }));
  };

  const onChangeFloorNumber = (floorId: number, floorNumber: number) => {
    setFormData((prev) => ({
      ...prev,
      floors: prev.floors.map((floor) =>
        floor.floorId === floorId
          ? {
              ...floor,
              floorNumber,
            }
          : floor,
      ),
    }));
  };

  const onDeleteFloor = (floorId: number) => {
    if (formData.floors.length === 1) {
      alert(CREATE_EVENT_VALIDATION.floor.required);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      floors: prev.floors.filter((floor) => floor.floorId !== floorId),
    }));
  };

  const onAddPrefix = (floorId: number) => {
    const newPrefix: CreateEventForm["floors"][number]["prefixes"][number] = {
      prefixId: Date.now(),
      lockerPrefix: "",
      ranges: [
        {
          rangeId: Date.now(),
          lockerStartNumber: null,
          lockerEndNumber: null,
        },
      ],
    };

    setFormData((prev) => ({
      ...prev,
      floors: prev.floors.map((floor) =>
        floor.floorId === floorId
          ? {
              ...floor,
              prefixes: [...floor.prefixes, newPrefix],
            }
          : floor,
      ),
    }));
  };

  const onChangePrefix = (floorId: number, prefixId: number, lockerPrefix: string) => {
    setFormData((prev) => ({
      ...prev,
      floors: prev.floors.map((floor) =>
        floor.floorId === floorId
          ? {
              ...floor,
              prefixes: floor.prefixes.map((prefix) =>
                prefix.prefixId === prefixId
                  ? {
                      ...prefix,
                      lockerPrefix,
                    }
                  : prefix,
              ),
            }
          : floor,
      ),
    }));
  };

  const onDeletePrefix = (floorId: number, prefixId: number) => {
    const targetFloor = formData.floors.find((floor) => floor.floorId === floorId);
    if (targetFloor?.prefixes.length === 1) {
      alert(CREATE_EVENT_VALIDATION.prefix.required);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      floors: prev.floors.map((floor) =>
        floor.floorId === floorId
          ? {
              ...floor,
              prefixes: floor.prefixes.filter((prefix) => prefix.prefixId !== prefixId),
            }
          : floor,
      ),
    }));
  };

  const onAddRange = (floorId: number, prefixId: number) => {
    const newRange = {
      rangeId: Date.now(),
      lockerStartNumber: null,
      lockerEndNumber: null,
    };

    setFormData((prev) => ({
      ...prev,
      floors: prev.floors.map((floor) =>
        floor.floorId === floorId
          ? {
              ...floor,
              prefixes: floor.prefixes.map((prefix) =>
                prefix.prefixId === prefixId
                  ? {
                      ...prefix,
                      ranges: [...prefix.ranges, newRange],
                    }
                  : prefix,
              ),
            }
          : floor,
      ),
    }));
  };

  const onChangeRange = (
    floorId: number,
    prefixId: number,
    rangeId: number,
    type: "start" | "end",
    lockerNumber: number | null,
  ) => {
    setFormData((prev) => ({
      ...prev,
      floors: prev.floors.map((floor) =>
        floor.floorId === floorId
          ? {
              ...floor,
              prefixes: floor.prefixes.map((prefix) =>
                prefix.prefixId === prefixId
                  ? {
                      ...prefix,
                      ranges: prefix.ranges.map((range) =>
                        range.rangeId === rangeId
                          ? type === "start"
                            ? { ...range, lockerStartNumber: lockerNumber }
                            : { ...range, lockerEndNumber: lockerNumber }
                          : range,
                      ),
                    }
                  : prefix,
              ),
            }
          : floor,
      ),
    }));
  };

  const onDeleteRange = (floorId: number, prefixId: number, rangeId: number) => {
    const targetFloor = formData.floors.find((floor) => floor.floorId === floorId);
    const targetPrefix = targetFloor?.prefixes.find((prefix) => prefix.prefixId === prefixId);

    if (targetPrefix && targetPrefix.ranges.length === 1) {
      alert(CREATE_EVENT_VALIDATION.range.required);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      floors: prev.floors.map((floor) =>
        floor.floorId === floorId
          ? {
              ...floor,
              prefixes: floor.prefixes.map((prefix) =>
                prefix.prefixId === prefixId
                  ? {
                      ...prefix,
                      ranges: prefix.ranges.filter((range) => range.rangeId !== rangeId),
                    }
                  : prefix,
              ),
            }
          : floor,
      ),
    }));
  };

  const onCreateEvent = () => {
    const alertMessage = createEventValidator(formData);
    if (alertMessage) {
      alert(alertMessage);
      return;
    }

    const { eventData } = convertCreateEventForm(formData);

    createEvent(eventData);
  };

  return {
    formData,
    setFormData,
    onAddFloor,
    onChangeFloorNumber,
    onAddPrefix,
    onChangePrefix,
    onAddRange,
    onChangeRange,
    onDeleteFloor,
    onDeletePrefix,
    onDeleteRange,
    onCreateEvent,
    organizations,
    departments,
    onSelectDepartment,
    onDeleteDepartment,
    onSelectOrganizations,
    isCreateEventLoading,
  };
};
