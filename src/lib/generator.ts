import type { GeneratedInfo } from './types';
import { namesData, emailDomains } from './data';

const random = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const generatePhoneNumber = (countryCode: string): string => {
  switch (countryCode) {
    case 'US':
    case 'CA':
      return `${randomInt(200, 999)}${randomInt(200, 999)}${randomInt(1000, 9999)}`;
    case 'CN':
      return `1${randomInt(3, 9)}${randomInt(100000000, 999999999)}`;
    case 'JP':
      return `${randomInt(70, 90)}${randomInt(10000000, 99999999)}`;
    case 'KR':
      return `10${randomInt(10000000, 99999999)}`;
    case 'GB':
      return `7${randomInt(100000000, 999999999)}`;
    case 'FR':
      return `6${randomInt(10000000, 99999999)}`;
    case 'DE':
      return `1${randomInt(500000000, 799999999)}`;
    case 'AU':
      return `4${randomInt(10000000, 99999999)}`;
    case 'IN':
      return `${randomInt(6, 9)}${randomInt(100000000, 999999999)}`;
    default:
      return `${randomInt(1000000000, 9999999999)}`;
  }
};

const generateBirthday = (): string => {
  const year = randomInt(1970, 2005);
  const month = String(randomInt(1, 12)).padStart(2, '0');
  const day = String(randomInt(1, 28)).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const generatePassword = (): string => {
  const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const lower = 'abcdefghjkmnpqrstuvwxyz';
  const numbers = '23456789';
  const special = '!@#$%^&*';

  let password = '';
  password += random(upper.split(''));
  password += random(lower.split(''));
  password += random(numbers.split(''));
  password += random(special.split(''));

  const all = upper + lower + numbers + special;
  for (let i = 0; i < randomInt(8, 12); i++) {
    password += random(all.split(''));
  }

  return password.split('').sort(() => Math.random() - 0.5).join('');
};

const generateEmail = (firstName: string, lastName: string, domain: string): string => {
  let selectedDomain = domain;

  if (domain === 'random') {
    const domains = emailDomains.filter(d => d.value !== 'random');
    selectedDomain = random(domains).value;
  }

  const patterns = [
    `${firstName.toLowerCase()}.${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
    `${firstName.toLowerCase()}${randomInt(100, 9999)}`,
    `${firstName.toLowerCase()}.${lastName.toLowerCase()}${randomInt(10, 99)}`,
  ];

  const username = random(patterns);
  return `${username}@${selectedDomain}`;
};

export const generateInfo = (countryCode: string, emailDomain: string = 'random'): GeneratedInfo => {
  const data = namesData[countryCode] || namesData.US;

  const lastName = random(data.lastNames);
  const firstName = random(data.firstNames);
  const birthday = generateBirthday();
  const phone = generatePhoneNumber(countryCode);
  const password = generatePassword();
  const email = generateEmail(firstName, lastName, emailDomain);

  return {
    lastName,
    firstName,
    birthday,
    phone,
    password,
    email,
  };
};
