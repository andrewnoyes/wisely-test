import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateInventoryDto {
    @ApiProperty()
    public startTime: Date;

    @ApiPropertyOptional()
    public endTime?: Date;

    @ApiProperty({ type: Date, isArray: true })
    public dates: Date[];

    @ApiProperty()
    public reservationLimit: number;
}
