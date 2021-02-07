import getWeek from "date-fns/getWeek";

import { GroupType } from "../common/enums";
import { ListData } from "../common/models";

const isNumber = (x: string | number): x is number => typeof x === "number";

const getWeekFromData = (time: number) => `Week ${getWeek(time)}`;

export const groupData = (groupType: GroupType, dataToGroup: ListData[]) =>
  dataToGroup.reduce((acc, cur) => {
    const curItem = cur[groupType];
    if (isNumber(curItem)) {
      const week = getWeekFromData(curItem);
      const item = acc.get(week);
      if (!item) {
        acc.set(week, [cur]);
      } else {
        acc.set(week, [...item, cur]);
      }
    } else {
      const item = acc.get(curItem);
      if (!item) {
        acc.set(curItem, [cur]);
      } else {
        acc.set(curItem, [...item, cur]);
      }
    }

    return acc;
  }, new Map<string, ListData[]>());
