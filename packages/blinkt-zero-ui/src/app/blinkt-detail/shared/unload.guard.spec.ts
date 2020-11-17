import { inject, TestBed, waitForAsync } from "@angular/core/testing";

import { UnloadGuard } from "./unload.guard";

describe("UnloadGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnloadGuard]
    });
  });

  it("should ...", inject([UnloadGuard], (guard: UnloadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
