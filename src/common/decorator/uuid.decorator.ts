import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { isUUID } from 'class-validator';

export const UUIDParam = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const id = request.params.id;

    if (!id || !isUUID(id)) {
      throw new BadRequestException({ message: 'id is not valid' });
    }

    return id;
  },
);
