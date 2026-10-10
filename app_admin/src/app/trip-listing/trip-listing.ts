import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';

import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';

import { Router } from '@angular/router';

// had to import this to force a re-render of this component on initial load
// (not sure why it wouldn't render the trip cards on the initial page load?)
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-trip-listing',
  imports: [CommonModule, TripCard],
  styleUrl: './trip-listing.css',
  templateUrl: './trip-listing.html',
  providers: [TripData]
})

export class TripListing implements OnInit {
  trips!: Trip[];
  message: string = "";

  constructor(
    private tripDataService: TripData,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    console.log("trip-listing constructor");
  }

  public addTrip(): void {
    this.router.navigate(["add-trip"]);
  }

  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = value;
          if(value.length > 0)
          {
            this.message = 'There are ' + value.length + ' trips available.';
          }
          else {
            this.message = 'There were no trips retireved from the database';
          }
          console.log(this.message);

          // make sure this component is re-rendered with the latest data
          this.cdr.markForCheck();
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}
