import { Injectable } from '@nestjs/common';
import { carsSeed } from './data/cars.seed';

@Injectable()
export class SeedService {
  populateDb() {
    return 'Seed execute';
  }
}
