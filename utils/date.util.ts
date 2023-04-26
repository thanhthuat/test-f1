import dayjs from 'dayjs';

export class DateUtil {
  static daysOfWeek(selectDay: Date | null) {
    const numDaySelect = dayjs(selectDay).day();
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const arr = new Array(7).fill(0).map((item, i) => {
      const day = dayjs(selectDay)
        .add(i - numDaySelect, 'day')
        .get('date');
      const date = dayjs(selectDay)
        .add(i - numDaySelect, 'day')
        .format('YYYY-MM-DD');

      const nameDay = weekday[i];
      return {
        day: ('0' + day).slice(-2),
        nameDay,
        date,
      };
    });
    return arr;
  }

  static hoursOfDay() {
    const interval = 5; //minutes interval
    const times = []; // time array
    const ap = ['AM', 'PM']; // AM-PM
    let startTime = 0; // start time

    //loop to increment the time and push results in array
    for (let i = startTime; startTime < 24 * 60; i++) {
      const hh = Math.floor(startTime / 60); // getting hours of day in 0-24 format
      const mm = startTime % 60; // getting minutes of the hour in 0-55 format
      times[i] =
        ('0' + (hh % 12)).slice(-2) +
        ':' +
        ('0' + mm).slice(-2) +
        ' ' +
        ap[Math.floor(hh / 12)] + // pushing data in array in [00:00 - 12:00 AM/PM format]
        ` (${i + 1}) `;
      startTime = startTime + interval;
    }

    return times;
  }

  static getAge(date: string) {
    const birthDay = date;
    const nowDate = dayjs(new Date());

    return nowDate.diff(birthDay, 'year');
  }

  // static generateDayCalender(day: any) {
  //   const thisYear = day.year();
  //   const thisMonth = day.month();
  //   const daysInMonth = day.daysInMonth();

  //   const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`);
  //   const weekDayOf1 = dayObjOf1.day();

  //   const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`);
  //   const weekDayOfLast = dayObjOfLast.day();

  //   const arrDayLast = this.range(weekDayOf1).map((item) =>
  //     dayObjOf1.subtract(weekDayOf1 - item, 'day').date()
  //   );
  //   const arrDayNow = this.range(daysInMonth).map((item) => item + 1);
  //   const arrDayNext = this.range(6 - weekDayOfLast).map((item) =>
  //     dayObjOfLast.add(item + 1, 'day').date()
  //   );

  //   return [...arrDayLast, ...arrDayNow, ...arrDayNext];
  // }

  // static range(i: number) {
  //   return [...Array(i).keys()];
  // }

  static agoNotify(date: any) {
    const now = dayjs();
    let agoTime = now.diff(date, 's');
    if (agoTime <= 60) {
      return Math.floor(agoTime) + 's';
    } else {
      agoTime = now.diff(date, 'm');
      if (agoTime <= 60) {
        return Math.floor(agoTime) + 'm';
      } else {
        agoTime = now.diff(date, 'h');
        if (agoTime <= 24) {
          return Math.floor(agoTime) + 'h';
        } else {
          agoTime = now.diff(date, 'd');

          if (agoTime <= 31) {
            return Math.floor(agoTime) + 1 + 'd';
          } else {
            agoTime = now.diff(date, 'M');
            if (agoTime <= 11) {
              return Math.floor(agoTime) + 1 + 'M';
            } else {
              agoTime = now.diff(date, 'y');
              return Math.floor(agoTime) + 'y';
            }
          }
        }
      }
    }
  }

  static formatShowDate(date: any) {
    return dayjs(date).format('MMM DD YYYY');
  }

  static formatShowDateDetail(date: any) {
    return dayjs(date).format('HH:mm MMM DD YYYY');
  }

  static formatDate(date: any, format = 'YYYY-MM-DD') {
    return dayjs(date).format(format);
  }
}
