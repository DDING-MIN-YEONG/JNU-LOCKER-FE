import { useEffect, useState } from "react";

export const useLockerFloor = (floorList: number[]) => {
  const [selectedFloor, setSelectedFloor] = useState<number>(0);

  const onSelectFloor = (floor: number) => {
    setSelectedFloor(floor);
  };

  useEffect(() => {
    if (floorList.length > 0) {
      if (!floorList.includes(selectedFloor)) {
        setSelectedFloor(floorList[0]);
      }
    }
  }, [floorList, selectedFloor]);

  return {
    selectedFloor,
    onSelectFloor,
  };
};
