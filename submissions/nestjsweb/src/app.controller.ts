import {Body, Controller, Get, Post} from '@nestjs/common';
import {CatsService} from "./service/cats.service";
import {Cat} from "./model/cat.entity";

@Controller('/cat')
export class AppController {
    constructor(private readonly catService: CatsService) {
    }

    @Get()
    getCats(): Promise<Cat[]> {
        return this.catService.findAll();
    }

    @Post('create')
    async createCat(
        @Body() cat: Cat): Promise<Cat> {
        return await this.catService.create(cat);
        //return { statusCode: HttpStatus.CREATED, message: 'Project Created Successfully', data: savedCat };
    }
}
