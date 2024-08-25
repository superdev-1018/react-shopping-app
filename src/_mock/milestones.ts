import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const milestones = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  project: faker.company.name(),
  pendingAmount: faker.number.int({min: 100, max: 2000}),
  paidAmount: faker.number.int({min: 100, max: 2000}),
  date: faker.date.anytime(),
  rate: faker.number.float({min: 0.1, max: 1.0}),
  method: sample(['mastercard', 'visa', 'paypal']),
  milestone: sample(['request']),
  isUnreadMessage: ((faker.number.int({min: 100, max: 2000}) % 2) === 0),
  status: sample(['awaiting', 'complete', 'canceled']),
})) as MilestoneType[];
