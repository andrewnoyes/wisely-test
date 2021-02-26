import { makeAutoObservable, reaction } from 'mobx';

import { Reservation } from 'sdk/dist';
import { apiClient } from './api-client';
import { restaurantStore } from './restaurant.store';

export class ReservationStore {
    public reservations: Reservation[] = [];

    public selectedDate: moment.Moment | null = null;

    public loading: boolean = false;

    public get hasReservations(): boolean {
        return this.reservations.length > 0;
    }

    public constructor() {
        makeAutoObservable(this);

        reaction(
            () => ({ date: this.selectedDate, restaurant: restaurantStore.selectedRestaurant }),
            ({ date, restaurant }) => {
                if (date && restaurant) {
                    this.loadReservations(date.toDate(), restaurant.id);
                } else {
                    this.clearReservations();
                }

                // clear selected date when restaurant is cleared
                if (date && !restaurant) {
                    this.setDate(null);
                }
            }
        );
    }

    public setDate = (date: moment.Moment | null) => {
        this.selectedDate = date;
    };

    private loadReservations = async (date: Date, restaurantId: number): Promise<void> => {
        try {
            this.setLoading(true);
            const reservations = await apiClient.getReservationsByDate(restaurantId, date);
            this.setReservations(reservations);
        } catch (error) {
            console.error('Failed to load reservations', error);
            throw error;
        } finally {
            this.setLoading(false);
        }
    };

    private setLoading = (loading: boolean): void => {
        this.loading = loading;
    };

    private setReservations = (reservations: Reservation[]): void => {
        this.reservations = reservations;
    };

    private clearReservations = (): void => {
        this.reservations = [];
    };
}

export const reservationStore = new ReservationStore();
