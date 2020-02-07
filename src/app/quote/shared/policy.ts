export interface Address {
  AptSuite?: string;
  City: string;
  POBox?: string;
  State: string;
  StateAbbreviation?: string;
  StateId: number;
  Street?: string;
  StreetNumber?: string;
  ZipCode?: string;
  ZipCode4?: string;
  ZipCodeBlocked?: boolean;
  RestrictionDescription?: any;
}

export interface CreditCard {
  Address?: Address,
  AuthorizationCode?: string,
  CardName: string,
  CardNumber: string,
  CreditCardType: number,
  CVV2: string,
  ExpirationDate: string,
  Ticket?: string,
  VendorId?: number
}