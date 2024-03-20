import { useState } from "react";
import FlightRow from "./flightRow";

const flightsArray = [
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
  const [flights, setFlights] = useState(flightsArray);
  const addFlight = () => {
    setFlights([
      ...flights,
      {
        id: flights.length + 1,
        time: "4PM",
        origin: "Colima",
        destination: "CDMX"
      },
    ]);
    // passing a function to the hook(setFlights) like:
    // setFlights((flights) => ...) warranties that we are uing the
    // result of the last call to "setFlights". That is because React
    // batches the hook calls if there are too many consecutive calls
  }

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
      <button className="btn btn-primary" onClick={addFlight}>
        Add flight
      </button>
    </>
  )
};

export default FlightList;
