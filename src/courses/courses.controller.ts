import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
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
}
