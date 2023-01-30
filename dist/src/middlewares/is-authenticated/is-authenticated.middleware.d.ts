import { NestMiddleware } from '@nestjs/common';
export declare class IsAuthenticatedMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
