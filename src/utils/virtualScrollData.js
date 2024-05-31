import { faker } from '@faker-js/faker';
import shuffle from 'lodash/shuffle';
import Vue from 'vue';

const geneateData = function() {
  const data = [];
  for(let i = 0 ; i < 12; i++) {
    data.push(
      {
        
        avatar: faker.image.avatar(),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business'])
      }
    )
  }
  // console.log('geneateData: ', data)
  return data;
}

export function generateDataItems() {
  const dataItem = [];

  for(let i = 0; i < 1000; i++) {
    dataItem.push({
      id: faker.datatype.uuid(),
      data: geneateData()
    })
  }
  return dataItem;
}

export function generateAssetColor() {
  const colorArray = [];
  for (let i = 0 ; i < 20; i++) {
    const color = faker.internet.color();
    colorArray.push({color})
  }
  return shuffle(colorArray)
}

export function generateRowColor() {
  const dataItem = [];

  for(let i = 0; i < 1000; i++) {
    dataItem.push({
      id: faker.datatype.uuid(),
      data: generateAssetColor()
    })
  }
  return dataItem;
}

export function generateNewAssetColor() {
  const colorArray = [];
  for (let i = 0 ; i < 20; i++) {
    const color = faker.internet.color();
    colorArray.push({background: color})
  }
  return shuffle(colorArray)
}

export function generateRail() {
  const dataItem = [];

  for(let i = 0; i < 200; i++) {
    const data = {};
    Vue.set(data, 'id', faker.datatype.uuid()),
    Vue.set(data, 'title', 'rail-' + i);
    Vue.set(data, 'railArray', generateNewAssetColor())
    dataItem.push(data)
  }
  return dataItem;
}

export function generateVirtRail() {
  
}