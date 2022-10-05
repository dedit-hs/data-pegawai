import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class PegawaiDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  phone: number;

  @IsNotEmpty()
  status: string;
}
