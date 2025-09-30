export interface Booking {
  id: string;
  busId: string;
  userName: string;
  userEmail: string;
  seats: number[];
  totalFare: number;
  date: string;
  status: 'booked' | 'cancelled';
}
