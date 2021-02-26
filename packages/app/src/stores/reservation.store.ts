import { makeAutoObservable } from 'mobx';

import { Reservation } from 'sdk/dist';

export class ReservationStore {
    public reservations: Reservation[] = [];

    public constructor() {
        makeAutoObservable(this);
    }

    public get hasReservations(): boolean {
        return this.reservations.length > 0;
    }
}

export const reservationStore = new ReservationStore();
