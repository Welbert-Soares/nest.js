import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll(@Res() response) {
    return response.status(200).json({ messsage: 'Listagem de cursos' });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso com ID ${id}`;
  }

  // @HttpCode(204)
  @Post()
  created(@Body() body) {
    return body;
  }

  @Patch(':id')
  updated(@Param('id') id: string, @Body() body) {
    console.log(body);
    return `Update course with ID ${id}`;
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Remove course with ID ${id}`;
  }
}
