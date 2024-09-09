"use client";

import { format } from "date-fns";

import { cn } from "@/lib/utils";
import Button from "./Button";
import Calendar from "./Calendar";
import Popover, { PopoverContent, PopoverTrigger } from "./Popover";
import { FiCalendar } from "react-icons/fi";
import { FC, useCallback, useState } from "react";

export type DatePickerProps = {
  setTimestamp: (timestamp: number | null) => void;
  label?: string;
};

const DatePicker: FC<DatePickerProps> = ({
  setTimestamp,
  label = "Pick a date",
}) => {
  const [internalDate, setInternalDate] = useState<Date>();

  const handleDateChange = useCallback(
    (newDate?: Date) => {
      setInternalDate(newDate);
      setTimestamp(newDate?.getTime() ?? null);
    },
    [setTimestamp]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !internalDate && "text-muted-foreground"
          )}
        >
          <FiCalendar className="mr-2 h-4 w-4" />
          {internalDate ? format(internalDate, "PPP") : <span>{label}</span>}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={internalDate}
          onSelect={handleDateChange}
          // TODO: It's complaining about this not existing, however this is how it is in the docs: https://ui.shadcn.com/docs/components/date-picker.
          // initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
