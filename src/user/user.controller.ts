import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { createUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

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
    async update(@Body() {name,email,password}: UpdatePutUserDTO, @Param() params){
        return{
            method: 'put',
            name, email, password,
            params
        }
    }

    @Patch(':id')
    async updatePartial(@Body() {name,email,password}:UpdatePatchUserDTO, @Param() params){
        return {
            method: 'patch',
            name,email,password,
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