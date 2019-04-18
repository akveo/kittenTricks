export const PATTERN_NAME: RegExp = /[a-z ,.'-]+/;
export const PATTERN_DOB: RegExp = /\d{1,2}\/\d{1,2}\/\d{4}/;
export const PATTERN_EMAIL: RegExp = /\S+@\S+\.\S+/;
export const PATTERN_PASSWORD: RegExp = /[a-z0-9]{8,}/;
export const PATTERN_PHONE: RegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
export const PATTERN_SMS_CODE: RegExp = /\d{4}/;

export const NameValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_NAME, value);
};

export const DOBValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_DOB, value);
};

export const EmailValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_EMAIL, value);
};

export const PasswordValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_PASSWORD, value);
};

export const PhoneNumberValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_PHONE, value);
};

export const SMSCodeValidator = (value: string): boolean => {
  return RegExpValidator(PATTERN_SMS_CODE, value);
};

const RegExpValidator = (regexp: RegExp, value: string): boolean => {
  return regexp.test(value);
};
