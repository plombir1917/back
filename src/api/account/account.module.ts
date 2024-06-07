import { Module } from '@nestjs/common';
import { AccountResolver } from './account.resolver';
import { PrismaModule } from 'src/database/prisma.module';
import { PrismaService } from 'src/database/prisma.service';
import { AccountService } from './account.service';
import { AuthModule } from '../auth/auth.module';
import { MinioModule } from 'src/utils/minio/minio.module';

@Module({
  imports: [PrismaModule, AuthModule, MinioModule],
  providers: [AccountResolver, AccountService],
})
export class AccountModule {}
