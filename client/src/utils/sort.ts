import { SortOrder } from "../common/enums";
import { ListData } from "../common/models";

export const sortGroupedData = (
  groupedData: Map<string, ListData[]>,
  order = SortOrder.Acceding
) => {
  const sortByMultiplier = order === SortOrder.Acceding ? -1 : 1;
  const keys = [];
  for (const i of groupedData.keys()) {
    keys.push(i);
  }
  const sortedKeys = keys.sort((a, b) => {
    let compareResult = 0;
    if (a.toUpperCase() > b.toUpperCase()) {
      compareResult = -1;
    } else if (a.toUpperCase() < b.toUpperCase()) {
      compareResult = 1;
    }
    return sortByMultiplier * compareResult;
  });
  return sortedKeys.map(key => ({ key: key, data: groupedData.get(key) as ListData[] }));
};
