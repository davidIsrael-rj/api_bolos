import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class UpdatePutUserDTO{
    
    @IsString()
    name:string;

    @IsEmail()
    email:string;

    
    @IsStrongPassword({
        minLength:6,
        minLowercase:0,
        minNumbers:0,
        minSymbols:0,
        minUppercase:0,
    }, {
        message:"A senha deve conter mais de 6 caracteres"
    })
    password:string;
}