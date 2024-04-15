import { memo } from "react";

const FlightRow = ({ flight }) => {
  const {
    time,
    origin,
    destination,
  } = flight;

  return (
    <tr>
      <td>{time}</td>
      <td>{origin}</td>
      {destination && <td>{destination}</td>}
    </tr>
  );
}

// We can use the memoized version, but the JSX
// of this component is so trivial that we don't
// gain much
const FlightRowMemo = memo(FlightRow);

export default FlightRow;
export { FlightRowMemo };
