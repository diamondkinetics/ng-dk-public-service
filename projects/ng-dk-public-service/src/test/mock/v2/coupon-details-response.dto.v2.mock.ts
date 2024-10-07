import { CouponDetailsResponseDTOV2, DKSubscription } from '@diamondkinetics/dk-public-dto-ts';
import { faker } from '@faker-js/faker';
import { define } from 'cooky-cutter';

export const mockCouponDetailsResponseDTOV2 = define<CouponDetailsResponseDTOV2>({
  id: () => faker.string.alphanumeric(),
  dkSubscription: () => faker.helpers.arrayElement(DKSubscription.asArray().map(s => s.getName())),
  durationInMonths: () => faker.number.int(12),
});
