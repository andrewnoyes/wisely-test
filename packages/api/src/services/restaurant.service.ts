import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRestaurantDto } from '../dtos';
import { Restaurant } from '../entities';

@Injectable()
export class RestaurantService {
    public constructor(
        @InjectRepository(Restaurant)
        private readonly _restaurantRepository: Repository<Restaurant>
    ) {}

    public async findAll(): Promise<Restaurant[]> {
        return await this._restaurantRepository.find();
    }

    public async findById(id: number): Promise<Restaurant> {
        const restaurant = await this._restaurantRepository.findOne(id);
        if (!restaurant) {
            throw new NotFoundException(`No restaurant found for ID ${id}`);
        }

        return restaurant;
    }

    public async createRestaurant(dto: CreateRestaurantDto): Promise<Restaurant> {
        const { name } = dto;
        const trimmed = name.trim();
        if (!trimmed) {
            throw new BadRequestException('Restaurant name cannot be blank');
        }

        const restaurant = new Restaurant();
        restaurant.name = name;

        return await this._restaurantRepository.save(restaurant);
    }
}
