export type User = {
  id: number;
  username: string;
  password: string;
  membershipTier: MembershipTierEnum;
};

export enum MembershipTierEnum {
  BASIC = 'Basic',
  ADVANCE = 'Advance',
  HIGH = 'High',
}

export type UserCreateDto = Omit<User, 'id'>;

export type UserUpdateDto = Partial<User>;
