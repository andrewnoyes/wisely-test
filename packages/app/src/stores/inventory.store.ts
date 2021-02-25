import { action, observable, reaction } from 'mobx';
import moment from 'moment';

import { Inventory } from 'sdk/dist';
import { apiClient } from './api-client';

export class InventoryStore {
    @observable
    public inventories: Inventory[] = [];

    @observable
    public selectedDate: moment.Moment | null = null;

    @observable
    public loading: boolean = false;

    public constructor() {
        reaction(
            () => this.selectedDate,
            (date) => {
                if (date) {
                    console.log('date changed', date);
                } else {
                    console.log('date cleared');
                }
            }
        );
    }

    public loadInventories = async (date: Date, restaurantId: number): Promise<void> => {
        try {
            this.setLoading(true);
            const inventories = await apiClient.getInventoryByDate(restaurantId, date);
            console.log('inventories!!!', inventories);
            this.setInventories(inventories);
        } catch (error) {
            console.error('Failed to load inventories', error);
            throw error;
        } finally {
            this.setLoading(false);
        }
    };

    @action
    public setDate = (date: moment.Moment | null) => {
        console.log('date set!', date);
        this.selectedDate = date;
    };

    @action
    private setLoading = (loading: boolean): void => {
        this.loading = loading;
    };

    @action
    private setInventories = (inventories: Inventory[]): void => {
        this.inventories = inventories;
    };

    @action
    private clearInventories = (): void => {
        this.inventories = [];
    };

    // TODO: action for creating inventory
}

export const inventoryStore = new InventoryStore();
