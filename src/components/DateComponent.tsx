import { format, parseISO } from 'date-fns';

export const DateComponent = ({ dateString }: { dateString: string }) => {
  if (!dateString) return <></>;
  const dateStr: Date = new Date(dateString);
  const date = parseISO(dateStr.toISOString());
  return <time dateTime={dateString}>{format(date, `LLLL d, yyyy`)}</time>;
};
