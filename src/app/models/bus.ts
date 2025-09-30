export interface Bus {
  id: string;
  operator: string;
  from: string;
  to: string;
  date: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  seatsAvailable: number;
  totalSeats: number;
}
