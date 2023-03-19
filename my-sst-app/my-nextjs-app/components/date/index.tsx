import { parseISO, format } from "date-fns";

export type DateProps = {
  datetime: string;
};

export default function Date({ datetime, ...chi }: DateProps) {
  const date = parseISO(datetime);
  return <time dateTime={datetime}>{format(date, "LLLL d, yyyy")}</time>;
}
