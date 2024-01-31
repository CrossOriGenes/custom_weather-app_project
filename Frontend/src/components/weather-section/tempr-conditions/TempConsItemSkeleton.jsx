import { TempConditionsItemSkeleton } from "./TempConditionsItem";

const DUMMY_ITEMS_FINAL = [
  { id: "i1" },
  { id: "i2" },
  { id: "i3" },
  { id: "i4" },
  { id: "i5" },
  { id: "i6" },
  { id: "i7" },
  { id: "i8" },
  { id: "i9" },
  { id: "i10" },
];
const [i1, i2, i3, i4, i5, i6] = DUMMY_ITEMS_FINAL;
const DUMMY_ITEMS_INITIAL = [i1, i2, i3, i4, i5, i6];

export function ConsItemSkeletons1() {
  return (
    <>
      {DUMMY_ITEMS_INITIAL.map((item) => (
        <TempConditionsItemSkeleton key={item.id} />
      ))}
    </>
  );
}

export function ConsItemSkeletons2() {
  return (
    <>
      {DUMMY_ITEMS_FINAL.map((item) => (
        <TempConditionsItemSkeleton key={item.id} />
      ))}
    </>
  );
}
