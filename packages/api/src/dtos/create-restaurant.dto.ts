import { ApiProperty } from '@nestjs/swagger';

export class CreateRestaurantDto {
    @ApiProperty()
    public name: string;
}
