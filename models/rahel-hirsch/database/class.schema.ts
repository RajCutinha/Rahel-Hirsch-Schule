import { mysqlTable, int, varchar} from 'drizzle-orm/mysql-core';


export const classSchema = mysqlTable('Class', {
  ClassId: int('ClassId').primaryKey().autoincrement(),
  classInfo: varchar('classInfo', {length: 255}).notNull(),
  classTeacher: varchar('classTeacher', {length: 255}).notNull()
});
