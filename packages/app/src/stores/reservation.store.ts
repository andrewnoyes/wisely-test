import { computed, observable } from 'mobx';

import { Reservation } from 'sdk/dist';

export class ReservationStore {
    @observable
    public reservations: Reservation[] = [];

    @computed
    public get hasReservations(): boolean {
        return this.reservations.length > 0;
    }
}

export const reservationStore = new ReservationStore();
