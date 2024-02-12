import { ICity, NewCity } from './city.model';

export const sampleWithRequiredData: ICity = {
  id: 10776,
};

export const sampleWithPartialData: ICity = {
  id: 3552,
  name: 'an mist',
  lat: 25190.37,
  lng: 30599.47,
};

export const sampleWithFullData: ICity = {
  id: 29510,
  name: 'multitask yowza yet',
  lat: 23140.83,
  lng: 11661.21,
};

export const sampleWithNewData: NewCity = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
