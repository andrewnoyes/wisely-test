import { makeAutoObservable } from 'mobx';

import { Restaurant } from 'sdk/dist';
import { apiClient } from './api-client';
export class RestaurantStore {
    public selectedRestaurant: Restaurant | null = null;

    public restaurants: Restaurant[] = [];

    public get hasRestaurants(): boolean {
        return this.restaurants.length > 0;
    }

    public constructor() {
        makeAutoObservable(this);
    }

    public loadRestaurants = async (): Promise<void> => {
        try {
            const restaurants = await apiClient.getRestaurants();
            this.setRestaurants(restaurants);
        } catch (error) {
            console.error('Failed to load restaurants', error);
            throw error;
        }
    };

    public createRestaurant = async (name: string): Promise<Restaurant> => {
        try {
            const restaurant = await apiClient.createRestaurant({ name });
            this.addRestaurant(restaurant);
            return restaurant;
        } catch (error) {
            console.error('Failed to create restaurant', error);
            throw error;
        }
    };

    public selectRestaurant = async (id: number): Promise<boolean> => {
        try {
            const restaurant = await apiClient.getRestaurantById(id);
            this.setSelectedRestaurant(restaurant);
            return true;
        } catch (error) {
            console.warn('Failed to select restaurant', error);
            return false;
        }
    };

    public clearRestaurant = (): void => {
        this.clearSelectedRestaurant();
    };

    //#region Actions

    private setRestaurants = (restaurants: Restaurant[]): void => {
        this.restaurants = restaurants;
    };

    private addRestaurant = (restaurant: Restaurant): void => {
        this.restaurants.push(restaurant);
    };

    private setSelectedRestaurant = (restaurant: Restaurant): void => {
        this.selectedRestaurant = restaurant;
    };

    private clearSelectedRestaurant = (): void => {
        this.selectedRestaurant = null;
    };

    //#endregion
}

export const restaurantStore = new RestaurantStore();
