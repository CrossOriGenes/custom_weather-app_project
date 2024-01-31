import { DUMMY_ITEM_LIST } from "../hourly-tempr/HourlyDataSkeleton";
import { WeeklyDataItemLoader } from "./WeeklyTempDataItem";

const [item1, item2, item3, item4, item5, item6, item7] = DUMMY_ITEM_LIST;
const DUMMY_ITEMS = [item1, item2, item3, item4, item5, item6, item7];

function WklyTempDataItemListLoader() {
  return (
    <>
      {DUMMY_ITEMS.map((itm) => (
        <WeeklyDataItemLoader key={itm.id} />
      ))}
    </>
  );
}

export default WklyTempDataItemListLoader;
