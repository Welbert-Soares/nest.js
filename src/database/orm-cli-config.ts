import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1714825778133 } from 'src/migrations/1714825778133-CreateCoursesTable';
import { CreateTagsTable1714827026822 } from 'src/migrations/1714827026822-CreateTagsTable';
import { CreateCoursesTagsTable1714828597631 } from 'src/migrations/1714828597631-CreateCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1714825778133,
    CreateTagsTable1714827026822,
    CreateCoursesTagsTable1714828597631,
  ],
});
