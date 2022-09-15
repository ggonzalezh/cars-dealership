import { Car } from '../../cars/interfaces/cars.interface';
import { v4 as uuid } from 'uuid';

export const carsSeed: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'ASD',
    model: 'as',
  },
];
