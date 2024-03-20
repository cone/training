import FlightRow from "./flightRow";

const flights = [
  {
    id: 1,
    time: "1PM",
    origin: "Colima",
    destination: "CDMX"
  },
  {
    id: 2,
    time: "2PM",
    origin: "Colima",
    destination: "CDMX"
  },
  {
    id: 3,
    time: "3PM",
    origin: "Colima",
    destination: "CDMX"
  },
];

const FlightList = () => {
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Flights
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Time</th>
            <th>Origin</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => <FlightRow key={flight.id} flight={flight}/>)}
        </tbody>
      </table>
    </>
  )
};

export default FlightList;
