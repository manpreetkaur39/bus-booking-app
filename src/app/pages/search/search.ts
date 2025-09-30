import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusService } from '../../shared/services/bus.service';
import { Bus } from '../../models/bus';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  source: string = '';
  destination: string = '';
  date: string = '';
  passengers: number = 1;

  locations: string[] = [];
  filteredSources: string[] = [];
  filteredDestinations: string[] = [];

  buses: Bus[] = [];
  searched: boolean = false;

  constructor(private busService: BusService) {
    this.locations = this.busService.getLocations();
  }

  filterSources() {
    this.filteredSources = this.locations.filter(loc =>
      loc.toLowerCase().includes(this.source.toLowerCase())
    );
  }

  filterDestinations() {
    this.filteredDestinations = this.locations.filter(loc =>
      loc.toLowerCase().includes(this.destination.toLowerCase())
    );
  }

  searchBuses(event: Event) {
    event.preventDefault();
    this.buses = this.busService.searchBuses(this.source, this.destination, this.date);
    this.searched = true;
  }

  selectSource(loc: string) {
    this.source = loc;
    this.filteredSources = [];
  }

  selectDestination(loc: string) {
    this.destination = loc;
    this.filteredDestinations = [];
  }
}
