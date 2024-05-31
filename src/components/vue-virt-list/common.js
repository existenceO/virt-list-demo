import { faker } from '@faker-js/faker';

export function getList(length){
  const newList = [];
  for (let i = 0; i < length; i++) {
    newList.push({
      index: i,
      id: faker.random.uuid(),
      text: faker.random.words(8),
    });
  }
  return newList;
}