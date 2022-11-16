import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import format from 'date-fns/format';
import { addDays } from 'date-fns';

import 'react-calendar/dist/Calendar.css';
import '../../../assets/styles/styles.css';
import styles from './DateRangePicker.module.css';

const DateRangePicker = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
    },
  ]);
  const [open, setOpen] = useState(false);
  const refOne = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  const hideOnClickOutside = (e: MouseEvent) => {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  const formatedStartDate = range[0].startDate
    ? format(range[0]?.startDate, 'dd/MM/yyyy')
    : 'error';
  const formatedEndDate = range[0].endDate
    ? format(range[0]?.endDate, 'dd/MM/yyyy')
    : 'error';

  return (
    <div className={styles.dateRangePickerContainer}>
      <div
        onClick={() => setOpen((open) => !open)}
        className={styles.dateValue}
      >{`From ${formatedStartDate} to ${formatedEndDate}`}</div>

      <div ref={refOne}>
        {open && (
          <Calendar
            onChange={(e: Array<Date>) => {
              const newRange = {
                startDate: e[0],
                endDate: e[1],
              };
              setRange([newRange]);
              setOpen(false);
            }}
            value={[range[0].startDate, range[0].endDate]}
            minDate={new Date()}
            selectRange={true}
          />
        )}
      </div>
    </div>
  );
};

export default DateRangePicker;
