//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.

//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];
//TODO parse timestamp and determine the bin
//TODO increment the count for that bin

const INTERVAL = 30 * 60 * 1000; //30 minutes in milliseconds
const getBinningTimeStamp = (timestamp) => {
  const date = new Date(timestamp);
  // console.log("Before flooring: ", date.getTime());
  // console.log("Before flooring: ", date.toISOString());
  const flooredDate = Math.floor(date.getTime() / INTERVAL) * INTERVAL;
  // console.log("After flooring: ", flooredDate);
  return new Date(flooredDate).toISOString();
};
// console.log(getBinningTimeStamp("2025-10-22T10:01:00Z"));
// console.log(getBinningTimeStamp("2025-10-22T10:05:00Z"));
// console.log(getBinningTimeStamp("2025-10-22T10:14:00Z"));
const binnedEvents = events.reduce((acc, event) => {
  const binTimeStamp = getBinningTimeStamp(event.timestamp);
  if (!acc[binTimeStamp]) {
    acc[binTimeStamp] = { count: 0 };
  }
  acc[binTimeStamp].count = acc[binTimeStamp].count + 1;
  return acc;
}, {});
console.log(binnedEvents);
// output
// {
//   '2025-10-22T10:00:00.000Z': { count: 3 },
//   '2025-10-22T10:30:00.000Z': { count: 2 },
//   '2025-10-22T11:00:00.000Z': { count: 1 }
// }
