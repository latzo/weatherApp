export interface ICity {
  id: number;
  name?: string | null;
  lat?: number | null;
  lng?: number | null;
}

export type NewCity = Omit<ICity, 'id'> & { id: null };
