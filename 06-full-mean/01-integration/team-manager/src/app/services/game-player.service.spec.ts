import { TestBed } from '@angular/core/testing';

import { GamePlayerService } from './game-player.service';

describe('GamePlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamePlayerService = TestBed.get(GamePlayerService);
    expect(service).toBeTruthy();
  });
});
