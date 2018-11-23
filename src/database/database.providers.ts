import * as mongoose from 'mongoose';

mongoose.set('debug', true);

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(process.env.MONGODB_URL),
  },
];
