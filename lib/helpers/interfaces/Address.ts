import { Key } from "./Key";
import { SignedKeyListInfo } from "./SignedKeyList";

enum ADDRESS_TYPE {
  TYPE_ORIGINAL = 1,
  TYPE_ALIAS = 2,
  TYPE_CUSTOM_DOMAIN = 3,
  TYPE_PREMIUM = 4,
  TYPE_EXTERNAL = 5,
}

export interface Address {
  DisplayName: string;
  DomainID: string;
  Email: string;
  HasKeys: number;
  ID: string;
  Keys: Key[];
  Order: number;
  Priority: number;
  Receive: number;
  Send: number;
  Signature: string;
  SignedKeyList: SignedKeyListInfo;
  Status: number;
  Type: ADDRESS_TYPE;
}
