import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiURL= "http://localhost:3001"
  private reservations: Reservation[] = [];


  constructor(private http: HttpClient){}

  // CRUD

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiURL + "/reservations");
  }

  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiURL + "/reservation/"+id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();

    this.reservations.push(reservation);
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1)
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;
  }

}
