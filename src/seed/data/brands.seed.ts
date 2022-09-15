import { Brand } from '../../brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const brandsSeed: Brand[] = [
  {
    id: uuid(),
    name: 'Volvo',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Tesla',
    createdAt: new Date().getTime(),
  },
];
