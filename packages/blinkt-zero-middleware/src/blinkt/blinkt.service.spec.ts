import { Test, TestingModule } from "@nestjs/testing";
import { BlinktService } from "./blinkt.service";

describe("BlinktService", () => {
  let service: BlinktService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlinktService],
    }).compile();

    service = module.get<BlinktService>(BlinktService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
