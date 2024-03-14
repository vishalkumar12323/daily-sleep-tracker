import { getTotalDuration } from "../authentication/sleepStates";

const SleepState = ({ sleepState }) => {
  return (
    <>
      <div className="states">
        <h2>Sleep States</h2>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Time of sleep</th>
                <th>Wake up time</th>
                <th>sleep duration</th>
              </tr>
            </thead>
            <tbody>
              {sleepState.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}/7</td>
                    <td>{element?.sleepTime}</td>
                    <td>{element?.wakeUpTime}</td>
                    <td>
                      {getTotalDuration(
                        element?.sleepTime,
                        element?.wakeUpTime
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export { SleepState };
