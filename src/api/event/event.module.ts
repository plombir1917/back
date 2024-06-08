import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventResolver } from './event.resolver';
import { PrismaModule } from 'src/database/prisma.module';
import { MinioModule } from 'src/utils/minio/minio.module';

@Module({
  imports: [PrismaModule, MinioModule],
  providers: [EventResolver, EventService],
})
export class EventModule {}
