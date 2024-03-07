import { useState } from "react";

const NewEntry = () => {
  const [entries, setEnteries] = useState({
    date: "",
    sleepTime: "",
    wakeUpTime: "",
  });

  const handleEntriesData = (e) => {
    const { name, value } = e.target;
    setEnteries((previousEnteries) => {
      return {
        ...previousEnteries,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnteries({
      date: "",
      sleepTime: "",
      wakeUpTime: "",
    });
    // console.log(entries);
  };
  return (
    <>
      <div className="entries">
        <h3>Set Entries</h3>
        <div className="form">
          <form>
            <div>
              <label htmlFor="date">set date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={entries.date}
                onChange={handleEntriesData}
              />
            </div>
            <div>
              <label htmlFor="sleep-time">set sleep time</label>
              <input
                type="time"
                name="sleepTime"
                id="time"
                value={entries.sleepTime}
                onChange={handleEntriesData}
              />
            </div>
            <div>
              <label htmlFor="wakeup-time">set wakeup time</label>
              <input
                type="time"
                name="wakeUpTime"
                id="time"
                value={entries.wakeUpTime}
                onChange={handleEntriesData}
              />
            </div>

            <div>
              <button className="btn" onClick={handleSubmit}>
                add entries
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { NewEntry };
