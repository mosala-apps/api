import { TopicService } from './topic.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
export declare class TopicController {
    private readonly topicService;
    constructor(topicService: TopicService);
    create(createTopicDto: CreateTopicDto): Promise<CreateTopicDto & import("./entities/topic.entity").Topic>;
    findAll(): Promise<import("./entities/topic.entity").Topic[]>;
    findOne(id: number): Promise<Partial<import("./entities/topic.entity").Topic>>;
    update(id: number, updateTopicDto: UpdateTopicDto): string;
    remove(id: number): string;
}
