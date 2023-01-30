import { Repository } from 'typeorm';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { Topic } from './entities/topic.entity';
export declare class TopicService {
    private readonly topicRepository;
    constructor(topicRepository: Repository<Topic>);
    create(createTopicDto: CreateTopicDto): Promise<CreateTopicDto & Topic>;
    findAll(): Promise<Topic[]>;
    findOne(id: number): Promise<Partial<Topic>>;
    update(id: number, updateTopicDto: UpdateTopicDto): string;
    remove(id: number): string;
}
