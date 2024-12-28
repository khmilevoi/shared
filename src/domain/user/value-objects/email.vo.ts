import * as z from 'zod';
import { ValueObject } from '../../interfaces/value-object.interface';

export class EmailVo implements ValueObject {
  constructor(private readonly email: string) {
    this.validate();
  }

  validate(): boolean {
    z.string().email().parse(this.email);

    return true;
  }
}