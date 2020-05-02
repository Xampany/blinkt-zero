import { Test, TestingModule } from '@nestjs/testing';
import { BlinktStubService } from './blinkt-stub.service';

describe('BlinktStubService', () => {
  let service: BlinktStubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlinktStubService],
    }).compile();

    service = module.get<BlinktStubService>(BlinktStubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
