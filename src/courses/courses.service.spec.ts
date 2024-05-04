import { randomUUID } from 'node:crypto';
import { CoursesService } from './courses.service';

describe('CoursesService unit tests', () => {
  let service: CoursesService;
  let id: string;
  let create_at: Date;
  let expectOutputTags: any;
  let expectOutputCourse: any;
  let mockCourseRepository: any;
  let mockTagRepository: any;

  beforeEach(async () => {
    service = new CoursesService();
    id: randomUUID();
    create_at: new Date();
    expectOutputTags = [
      {
        id,
        name: 'nestjs',
        create_at,
      },
    ];
    expectOutputCourse = {
      id,
      name: 'test',
      description: 'test description',
      create_at,
      tags: expectOutputTags,
    };

    mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      update: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      findALl: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
    };

    mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
      findOne: jest.fn(),
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
