import { Module } from '@nestjs/common';
import { TopicModule } from './topic/topic.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TopicModule, CategoryModule],
})
export class ForumModule {}
