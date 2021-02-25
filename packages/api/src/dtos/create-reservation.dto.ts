import { ApiProperty } from '@nestjs/swagger';

export class CreateReservationDto {
    @ApiProperty()
    public name: string;

    @ApiProperty()
    public email: string;

    @ApiProperty()
    public partySize: number;
}
