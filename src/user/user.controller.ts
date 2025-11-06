import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { createUserDTO } from "./dto/create-user.dto";

@Controller('users')
export class UserController{
    @Post()
    async create(@Body() {name,email, password}: createUserDTO){
        return{name, email, password};
    }

    @Get()
    async read(){
        return {users: []}
    }

    @Get(':id')
    async readOne(@Param() param){
        return {user:{}, param}
    }

    @Put(':id')
    async update(@Body() body, @Param() params){
        return{
            method: 'put',
            body,
            params
        }
    }

    @Patch(':id')
    async updatePartial(@Body() body, @Param() params){
        return {
            method: 'patch',
            body,
            params
        }
    }

    @Delete(':id')
    async delete(@Param() params){
        return{
            params
        }
    }

}