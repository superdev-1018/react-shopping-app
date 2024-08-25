import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const transactions = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  project: faker.company.name(),
  amount: faker.number.int({min: 100, max: 2000}),
  date: faker.date.anytime(),
  rate: faker.number.float({min: 0.1, max: 1.0}),
  status: sample(['sent', 'canceled', 'pending']),
})) as TransactionType[];
