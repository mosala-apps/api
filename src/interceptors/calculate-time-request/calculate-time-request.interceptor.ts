import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class CalculateExecutionTimeOfRequestInterceptor
  implements NestInterceptor
{
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const dateIn = Date.now();
    return next.handle().pipe(
      tap(() => {
        const dateOut = Date.now();
        console.log(`Durée de la requête: ${dateOut - dateIn} ms`);
      }),
    );
  }
}
