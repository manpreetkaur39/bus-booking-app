import { Injectable } from '@angular/core';
import { Booking } from '../../models/booking';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private bookings: Booking[] = [];

  addBooking(booking: Booking) {
    this.bookings.push(booking);
  }

  getBookings(): Booking[] {
    return this.bookings;
  }

  cancelBooking(id: string) {
    const booking = this.bookings.find(b => b.id === id);
    if (booking) {
      booking.status = 'cancelled';
    }
  }
}
