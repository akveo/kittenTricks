export const CardNumberValidator = (value: string): boolean => {
  return value.length === 19;
};

export const ExpirationDateValidator = (value: string): boolean => {
  return value.length === 5;
};

export const CvvValidator = (value: string): boolean => {
  return value.length === 3;
};

export const CardholderNameValidator = (value: string): boolean => {
  return /^$|^[a-zA-ZčČćĆđĐšŠžŽ-]+ [a-zA-ZčČćĆđĐšŠžŽ-]+$/.test(value) && value.length !== 0;
};
