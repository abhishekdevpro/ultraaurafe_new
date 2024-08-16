import 'bootstrap-daterangepicker/daterangepicker.css';

export const initialSettings = {
  endDate: new Date("2020-08-11T12:30:00.000Z"),
  ranges: {
    "Last 30 Days": [
      new Date("2020-07-12T04:57:17.076Z"),
      new Date("2020-08-10T04:57:17.076Z"),
    ],
    "Last 7 Days": [
      new Date("2020-08-04T04:57:17.076Z"),
      new Date("2020-08-10T04:57:17.076Z"),
    ],
    "Last Month": [
      new Date("2020-06-30T18:30:00.000Z"),
      new Date("2020-07-31T18:29:59.999Z"),
    ],
    "This Month": [
      new Date("2020-07-31T18:30:00.000Z"),
      new Date("2020-08-31T18:29:59.999Z"),
    ],
    Today: [
      new Date("2020-08-10T04:57:17.076Z"),
      new Date("2020-08-10T04:57:17.076Z"),
    ],
    Yesterday: [
      new Date("2020-08-09T04:57:17.076Z"),
      new Date("2020-08-09T04:57:17.076Z"),
    ],
  },
  startDate: new Date("2020-08-04T04:57:17.076Z"), // Set "Last 7 Days" as default
  timePicker: false,
};
