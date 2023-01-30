import { TimesTampEntity } from '../../../times-tamp/times-tamp.entity';
export declare class User extends TimesTampEntity {
    id: number;
    username: string;
    email: string;
    password: string;
}
