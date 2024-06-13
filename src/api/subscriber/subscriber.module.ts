import { Module } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { SubscriberResolver } from './subscriber.resolver';

@Module({
  providers: [SubscriberResolver, SubscriberService],
})
export class SubscriberModule {}
