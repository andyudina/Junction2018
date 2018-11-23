import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Test } from './interfaces/test.interface';

@Injectable()
export class TestService {
  constructor(@Inject('TestModelToken') private readonly testModel: Model<Test>) {}

  async test(): Promise<Test[]> {
    return await this.testModel.find().exec();
  }
}
