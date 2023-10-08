import { IsDateString, IsEmail, IsNumber, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class CreateTokenDTO {
  @IsNumber()
  id?: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minLowercase: 0,
    minNumbers: 0,
    minSymbols: 0,
    minUppercase: 0,
  })
  password: string;
  
  @IsOptional()
  @IsDateString()
  birthAt: string = null;
}