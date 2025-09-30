import { Injectable } from '@angular/core';
import { Bus } from '../../models/bus';

@Injectable({ providedIn: 'root' })
export class BusService {
  private locations: string[] = [
    // Major European cities navigable by train
    'Amsterdam', 'Athens', 'Barcelona', 'Belgrade', 'Berlin', 'Bern', 'Bratislava', 'Brussels',
    'Bucharest', 'Budapest', 'Cologne', 'Copenhagen', 'Dresden', 'Dublin', 'Edinburgh', 'Florence',
    'Frankfurt', 'Geneva', 'Gothenburg', 'Hamburg', 'Helsinki', 'Innsbruck', 'Krakow', 'Leipzig',
    'Lisbon', 'Ljubljana', 'London', 'Lyon', 'Madrid', 'Milan', 'Munich', 'Naples', 'Nice',
    'Oslo', 'Paris', 'Porto', 'Prague', 'Rome', 'Rotterdam', 'Salzburg', 'Sarajevo', 'Seville',
    'Sofia', 'Stockholm', 'Stuttgart', 'Tallinn', 'Turin', 'Valencia', 'Venice', 'Vienna',
    'Vilnius', 'Warsaw', 'Zagreb', 'Zurich',
    // Add more as needed for coverage
  ];

  private buses: Bus[] = [
    {
      id: 'eu1',
      operator: 'EuroRail',
      from: 'Paris',
      to: 'Berlin',
      date: '2025-10-01',
      departureTime: '07:00',
      arrivalTime: '15:00',
      price: 120,
      seatsAvailable: 30,
      totalSeats: 50
    },
    {
      id: 'eu2',
      operator: 'InterCity Express',
      from: 'Amsterdam',
      to: 'Brussels',
      date: '2025-10-01',
      departureTime: '09:00',
      arrivalTime: '12:00',
      price: 60,
      seatsAvailable: 20,
      totalSeats: 40
    }
    // Add more mock European train schedules as needed
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
