import { Component, OnInit } from '@angular/core';
import { ReservationModule } from '../reservation/reservation.module';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  reservations: Reservation[] = [];


  constructor(private reservationService: ReservationService){}


    ngOnInit(): void {
      this.reservationService.getReservations().subscribe( reservations => {
        this.reservations = reservations
      });
  }

  deleteReservation(id: string){
    this.reservationService.deleteReservation(id);
  }
}
