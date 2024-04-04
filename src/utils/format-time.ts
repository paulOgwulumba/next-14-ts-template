import { MonthsMapping } from '@/enums';
import { DateTime } from 'luxon';

export const extractDateCategoryFromIsoString = (date: string) => {
  const beautifiedDate = beautifyISODateString(date, false);
  const today = beautifyISODateString(new Date().toISOString(), false);

  const beautifiedDateArray = beautifiedDate.split(',')[0]?.split(' ');
  const todayArray = today.split(',')[0]?.split(' ');

  const day = beautifiedDateArray ? beautifiedDateArray[0] : '';
  const month = beautifiedDateArray ? beautifiedDateArray[1] : '';
  const year = beautifiedDateArray ? beautifiedDateArray[2] : '';

  const dayNow = todayArray ? todayArray[0] : ' ';
  const monthNow = todayArray ? todayArray[1] : ' ';
  const yearNow = todayArray ? todayArray[2] : ' ';

  if (year === yearNow) {
    if (month === monthNow) {
      if (day === dayNow) return 'Today';
      else if (parseInt(dayNow || '0') - parseInt(day || '0') === 1) return 'Yesterday';
      return 'This month';
    } else {
      return `${month}`;
    }
  } else {
    return `${month} ${year}`;
  }
};

export function beautifyISODateString(date: string, shouldSliceMonth = true) {
  const localeDate = DateTime.fromISO(date).toString();

  const dateArray = localeDate?.split('-');

  if (dateArray?.length < 3) {
    return 'Invalid ISO format.';
  }

  const year = dateArray[0];
  const month = (MonthsMapping as any)[`M${dateArray[1]}`];

  let day = dateArray[2]?.split('T')[0];
  day = day?.charAt(0) === '0' ? day[1] : day;

  const timeArray = dateArray[2]?.split('T')[1]?.split(':') || [];

  let hour = timeArray[0] || '0';
  hour = hour?.charAt(0) === '0' ? hour.charAt(1) : hour;
  const amPm = parseInt(hour) >= 12 ? 'PM' : 'AM';
  hour = parseInt(hour) >= 12 ? (parseInt(hour) % 12).toString() : hour;
  hour = hour === '0' ? '12' : hour;

  const minute = timeArray[1];

  return `${day} ${
    shouldSliceMonth ? month.slice(0, 3) : month
  } ${year}, ${hour}:${minute} ${amPm}`;
}
