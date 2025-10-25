import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UserController{
    @Post()
    async create(@Body() body){
        return{body};
    }

    @Get()
    async read(){
        return {users: []}
    }

    @Get(':id')
    async readOne(){
        return {user:{}}
    }
}