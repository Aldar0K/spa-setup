import { Country, Currency } from 'shared/const/common';

export type Profile = {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  age: 22;
  currency: Currency;
  country: Country;
  city: string;
  avatar: string;
};

export type ProfileSchema = {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
};
