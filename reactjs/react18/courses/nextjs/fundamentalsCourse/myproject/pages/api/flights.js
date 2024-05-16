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

export default function handler(req, res) {
  res.status(200).json(flightsArray);
}
