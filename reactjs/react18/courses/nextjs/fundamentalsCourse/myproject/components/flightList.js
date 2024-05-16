import { useEffect, useState } from "react";
import { FlightRowMemo } from "./flightRow";

const FlightList = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const response = await fetch("/api/flights");
      const flights = await response.json();
      setFlights(flights);
    };
    fetchFlights();
  }, []);

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
          {flights.map((flight) => <FlightRowMemo key={flight.id} flight={flight}/>)}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addFlight}>
        Add flight
      </button>
    </>
  )
};

export default FlightList;
