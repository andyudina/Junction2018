import { Connection } from 'mongoose';
import { TestSchema } from './schemas/test.schema';

export const testProviders = [
  {
    provide: 'TestModelToken',
    useFactory: (connection: Connection) => connection.model('Test', TestSchema),
    inject: ['DbConnectionToken'],
  },
];
