import { GroupType } from "../common/enums";
import { ListData } from "../common/models";

export const groupData = (groupType: GroupType, dataToGroup: ListData[]) =>
  dataToGroup.reduce((acc, cur) => {
    const item = acc.get(cur[groupType]);
    if (!item) {
      acc.set(cur[groupType], [cur]);
    } else {
      acc.set(cur[groupType], [...item, cur]);
    }
    return acc;
  }, new Map<string, ListData[]>());
