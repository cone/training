
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
      <td>{destination}</td>
    </tr>
  );
}

export default FlightRow;