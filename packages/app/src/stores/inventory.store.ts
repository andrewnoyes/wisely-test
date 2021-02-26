import { reaction, makeAutoObservable } from 'mobx';
import moment from 'moment';

import { Inventory } from 'sdk/dist';
import { apiClient } from './api-client';
import { restaurantStore } from './restaurant.store';

export class InventoryStore {
    public inventories: Inventory[] = [];

    public selectedDate: moment.Moment | null = null;

    public loading: boolean = false;

    public constructor() {
        makeAutoObservable(this);

        reaction(
            () => ({ date: this.selectedDate, restaurant: restaurantStore.selectedRestaurant }),
            ({ date, restaurant }) => {
                if (date && restaurant) {
                    this.loadInventories(date.toDate(), restaurant.id);
                } else {
                    this.clearInventories();
                }

                // clear selected date when restaurant is cleared
                if (date && !restaurant) {
                    this.setDate(null);
                }
            }
        );
    }

    public loadInventories = async (date: Date, restaurantId: number): Promise<void> => {
        try {
            this.setLoading(true);
            const inventories = await apiClient.getInventoryByDate(restaurantId, date);
            this.setInventories(inventories);
        } catch (error) {
            console.error('Failed to load inventories', error);
            throw error;
        } finally {
            this.setLoading(false);
        }
    };

    public setDate = (date: moment.Moment | null) => {
        this.selectedDate = date;
    };

    private setLoading = (loading: boolean): void => {
        this.loading = loading;
    };

    private setInventories = (inventories: Inventory[]): void => {
        this.inventories = inventories;
    };

    private clearInventories = (): void => {
        this.inventories = [];
    };
}

export const inventoryStore = new InventoryStore();
