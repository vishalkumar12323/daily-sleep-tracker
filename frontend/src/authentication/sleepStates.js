function getTotalDuration(sleepTime, wakeUpTime) {
  const sleepTimeObj = new Date("1970-01-01T" + sleepTime + ":00");
  const wakeUpTimeObj = new Date("1970-01-01T" + wakeUpTime + ":00");
  if (wakeUpTimeObj < sleepTimeObj) {
    wakeUpTimeObj.setDate(wakeUpTimeObj.getDate() + 1);
  }
  const duration = wakeUpTimeObj - sleepTimeObj;
  let hours = Math.floor(duration / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

  if (hours >= 12) {
    hours -= 12;
  }
  if (hours === 0) {
    hours = 12;
  }

  return `${hours}:${minutes}`;
}

const formateData = (data) => {
  const formattedData = [["Date", "Sleeping Time", "Wake Up Time"]];

  data.forEach((item) => {
    const dateParts = item?.date.split("-");
    const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0].slice(
      2
    )}`;

    formattedData.push([formattedDate, item?.sleepTime, item?.wakeUpTime]);
  });

  return formattedData;
};

export { getTotalDuration, formateData };
