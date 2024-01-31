/* eslint-disable react-refresh/only-export-components */
import { HourlyDataItemSkeleton } from "./HourlyTempDataItem";

export const DUMMY_ITEM_LIST = [
  { id: "item1" },
  { id: "item2" },
  { id: "item3" },
  { id: "item4" },
  { id: "item5" },
  { id: "item6" },
  { id: "item7" },
  { id: "item8" },
  { id: "item9" },
  { id: "item10" },
  { id: "item11" },
  { id: "item12" },
  { id: "item13" },
  { id: "item14" },
  { id: "item15" },
  { id: "item16" },
  { id: "item17" },
  { id: "item18" },
  { id: "item19" },
  { id: "item20" },
  { id: "item21" },
  { id: "item22" },
  { id: "item23" },
  { id: "item24" },
];


function HrlyTempDataItemSkeletons() {
  return (
    <>
      {DUMMY_ITEM_LIST.map((item) => (
        <HourlyDataItemSkeleton key={item.id} />
      ))}
    </>
  );
}


export default HrlyTempDataItemSkeletons;

