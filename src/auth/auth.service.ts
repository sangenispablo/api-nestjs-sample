import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login() {
    return { msg: 'Te estas logeando' };
  }

  register() {
    return { msg: 'Te estas registrando' };
  }
}
