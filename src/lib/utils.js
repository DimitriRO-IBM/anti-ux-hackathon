const range = (size, startAt = 0) => {
  return [...Array(size).keys()].map(i => i + startAt);
};

const isLeapYear = (year) => {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
};

const months = [
  {
    id: 0,
    value: 'datepicker.months.january',
  },
  {
    id: 1,
    value: 'datepicker.months.february',
  },
  {
    id: 2,
    value: 'datepicker.months.march',
  },
  {
    id: 3,
    value: 'datepicker.months.april',
  },
  {
    id: 4,
    value: 'datepicker.months.may',
  },
  {
    id: 5,
    value: 'datepicker.months.june',
  },
  {
    id: 6,
    value: 'datepicker.months.july',
  },
  {
    id: 7,
    value: 'datepicker.months.august',
  },
  {
    id: 8,
    value: 'datepicker.months.september',
  },
  {
    id: 9,
    value: 'datepicker.months.october',
  },
  {
    id: 10,
    value: 'datepicker.months.november',
  },
  {
    id: 11,
    value: 'datepicker.months.december',
  },
];

const getDaysRange = (month, isLeapYear) => {
  if (month <= 11) {
    let _;
    if ([0, 2, 4, 6, 7, 9, 11].includes(month)) {
      _ = range(31, 1);
    }
    else if (month === 1) {
      const nbOfDays = isLeapYear ? 29 : 28;
      _ = range(nbOfDays, 1);
    }
    else {
      _ = range(30, 1);
    }

    return _.map((item) => {
      return { id: item, text: `${item}` }
    });
  }
};

const getMonthsAsArray = (year) => {
  if (!year) {
    return;
  }

  return months.map((month) => {
    return {
      id: month.id,
      text: month.value,
    }
  });
};

const getYears = () => {
  const _ = range(200, 1900);
  return _.map((year, index) => {
    return {id: index, text: String(year)};
  });
}

export {
  getMonthsAsArray,
  getYears,
  getDaysRange,
  isLeapYear,
}
