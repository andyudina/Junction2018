import { Get, Controller } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from './interfaces/test.interface';

@Controller()
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  async root(): Promise<Test[]> {
    return this.testService.test();
  }
}
