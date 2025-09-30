import { Injectable } from '@angular/core';
import { Bus } from '../../models/bus';

@Injectable({ providedIn: 'root' })
export class BusService {
  private locations: string[] = [
    'Delhi', 'Mumbai', 'Chandigarh', 'Bangalore', 'Hyderabad', 'Kolkata', 'Chennai', 'Jaipur', 'Pune', 'Lucknow'
  ];

  private buses: Bus[] = [
    {
      id: 'bus1',
      operator: 'GreenLine',
      from: 'Delhi',
      to: 'Chandigarh',
      date: '2025-10-01',
      departureTime: '08:00',
      arrivalTime: '12:00',
      price: 500,
      seatsAvailable: 20,
      totalSeats: 40
    },
    {
      id: 'bus2',
      operator: 'RedBus',
      from: 'Delhi',
      to: 'Jaipur',
      date: '2025-10-01',
      departureTime: '09:00',
      arrivalTime: '13:00',
      price: 600,
      seatsAvailable: 10,
      totalSeats: 40
    }
    // Add more mock buses as needed
  ];

  getLocations(): string[] {
    return this.locations;
  }

  searchBuses(from: string, to: string, date: string): Bus[] {
    return this.buses.filter(bus =>
      bus.from.toLowerCase() === from.toLowerCase() &&
      bus.to.toLowerCase() === to.toLowerCase() &&
      bus.date === date
    );
  }
}
