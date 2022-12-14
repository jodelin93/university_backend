import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({ description: 'email utilisateur' })
    email: string;
    @IsNotEmpty()
    @ApiProperty({ description: 'username utilisateur' })
    username: string;
    @IsNotEmpty()
    @ApiProperty({ description: 'mot de passe utilisateur' })
    password: string;
    @ApiProperty({ description: 'le role sur le systeme utilisateur' })
    @IsNotEmpty()
    role_name: string;
}
