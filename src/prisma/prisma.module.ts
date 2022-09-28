import { Global, Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:mede9216@localhost:5432/apiNestDB?schema=public',
        },
      },
    });
  }
}
