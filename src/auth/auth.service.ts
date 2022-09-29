import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

import * as argon from 'argon2';

import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable({})
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  login() {
    return { msg: 'Te estas logeando' };
  }

  async register(dto: AuthDto) {
    // generar el hash a partir del password
    const hash = await argon.hash(dto.password);
    try {
      // guardar el nuevo user en la BD
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hash,
        },
      });
      delete user.hash;
      // retornar el user guardado
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credenciales tomadas');
        }
      }
    }
  }
}
