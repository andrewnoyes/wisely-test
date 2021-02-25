import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryDto {
    @ApiProperty()
    public startTime: Date;

    @ApiProperty()
    public endTime?: Date;

    @ApiProperty()
    public dates: Date[];

    @ApiProperty()
    public reservationLimit: number;
}
