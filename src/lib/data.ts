import type { Country, EmailDomain } from './types';

export const countries: Country[] = [
  { code: 'US', name: '美国', phonePrefix: '+1' },
  { code: 'CN', name: '中国', phonePrefix: '+86' },
  { code: 'JP', name: '日本', phonePrefix: '+81' },
  { code: 'KR', name: '韩国', phonePrefix: '+82' },
  { code: 'GB', name: '英国', phonePrefix: '+44' },
  { code: 'FR', name: '法国', phonePrefix: '+33' },
  { code: 'DE', name: '德国', phonePrefix: '+49' },
  { code: 'CA', name: '加拿大', phonePrefix: '+1' },
  { code: 'AU', name: '澳大利亚', phonePrefix: '+61' },
  { code: 'IN', name: '印度', phonePrefix: '+91' },
];

export const emailDomains: EmailDomain[] = [
  { value: 'random', label: '随机' },
  { value: 'gmail.com', label: 'gmail.com' },
  { value: 'outlook.com', label: 'outlook.com' },
  { value: 'yahoo.com', label: 'yahoo.com' },
  { value: 'hotmail.com', label: 'hotmail.com' },
  { value: 'icloud.com', label: 'icloud.com' },
  { value: 'protonmail.com', label: 'protonmail.com' },
  { value: 'aol.com', label: 'aol.com' },
  { value: 'mail.com', label: 'mail.com' },
  { value: 'zoho.com', label: 'zoho.com' },
];

export const namesData: Record<string, { lastNames: string[]; firstNames: string[] }> = {
  US: {
    lastNames: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'],
    firstNames: ['James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda', 'William', 'Barbara', 'David', 'Elizabeth', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Christopher', 'Karen']
  },
  CN: {
    lastNames: ['Wang', 'Li', 'Zhang', 'Liu', 'Chen', 'Yang', 'Huang', 'Zhao', 'Wu', 'Zhou', 'Xu', 'Sun', 'Ma', 'Zhu', 'Hu', 'Guo', 'He', 'Gao', 'Lin', 'Luo'],
    firstNames: ['Wei', 'Fang', 'Min', 'Jing', 'Lei', 'Na', 'Jun', 'Yan', 'Tao', 'Ying', 'Jie', 'Li', 'Hui', 'Qiang', 'Ming', 'Xin', 'Peng', 'Yu', 'Chao', 'Xia']
  },
  JP: {
    lastNames: ['Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe', 'Ito', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Kato', 'Yoshida', 'Yamada', 'Sasaki', 'Yamaguchi', 'Matsumoto', 'Inoue', 'Kimura', 'Hayashi', 'Shimizu', 'Saito'],
    firstNames: ['Hiroshi', 'Yuki', 'Takeshi', 'Akiko', 'Kenji', 'Yoko', 'Masato', 'Emi', 'Kazuo', 'Naomi', 'Taro', 'Haruka', 'Ichiro', 'Mai', 'Koji', 'Rin', 'Ryo', 'Sakura', 'Daiki', 'Aoi']
  },
  KR: {
    lastNames: ['Kim', 'Lee', 'Park', 'Choi', 'Jung', 'Kang', 'Cho', 'Yoon', 'Jang', 'Lim', 'Han', 'Oh', 'Seo', 'Shin', 'Kwon', 'Hwang', 'Ahn', 'Song', 'Hong', 'Yoo'],
    firstNames: ['Min-jun', 'Seo-yeon', 'Ji-woo', 'Ha-yoon', 'Do-yoon', 'Seo-jun', 'Si-woo', 'Ji-min', 'Ye-jun', 'Su-bin', 'Hyun-woo', 'Jae-won', 'Min-seo', 'Eun-woo', 'Ha-jun', 'Ye-eun', 'Yu-jin', 'Da-eun', 'Seung-hyun', 'Soo-ah']
  },
  GB: {
    lastNames: ['Smith', 'Jones', 'Taylor', 'Brown', 'Williams', 'Wilson', 'Johnson', 'Davies', 'Robinson', 'Wright', 'Thompson', 'Evans', 'Walker', 'White', 'Roberts', 'Green', 'Hall', 'Thomas', 'Clarke', 'Jackson'],
    firstNames: ['Oliver', 'Olivia', 'George', 'Amelia', 'Harry', 'Isla', 'Jack', 'Emily', 'Jacob', 'Ava', 'Charlie', 'Mia', 'Thomas', 'Isabella', 'Oscar', 'Sophia', 'William', 'Grace', 'James', 'Lily']
  },
  FR: {
    lastNames: ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau', 'Simon', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'David', 'Bertrand', 'Roux', 'Vincent', 'Fournier'],
    firstNames: ['Gabriel', 'Emma', 'Louis', 'Jade', 'Jules', 'Louise', 'Adam', 'Alice', 'Arthur', 'Chloe', 'Hugo', 'Lea', 'Raphael', 'Manon', 'Lucas', 'Clara', 'Leo', 'Camille', 'Ethan', 'Sarah']
  },
  DE: {
    lastNames: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Koch', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann', 'Braun', 'Krüger'],
    firstNames: ['Ben', 'Emma', 'Paul', 'Mia', 'Jonas', 'Hannah', 'Leon', 'Sophia', 'Finn', 'Anna', 'Noah', 'Emilia', 'Elias', 'Lina', 'Felix', 'Marie', 'Max', 'Lena', 'Moritz', 'Laura']
  },
  CA: {
    lastNames: ['Smith', 'Brown', 'Tremblay', 'Martin', 'Roy', 'Wilson', 'Macdonald', 'Gagnon', 'Johnson', 'Taylor', 'Anderson', 'Lee', 'Williams', 'Jones', 'White', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark'],
    firstNames: ['Liam', 'Emma', 'Noah', 'Olivia', 'Oliver', 'Ava', 'Ethan', 'Charlotte', 'Lucas', 'Sophia', 'Mason', 'Amelia', 'Logan', 'Isabella', 'Jackson', 'Mia', 'Benjamin', 'Harper', 'William', 'Evelyn']
  },
  AU: {
    lastNames: ['Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Taylor', 'Johnson', 'White', 'Martin', 'Anderson', 'Thompson', 'Nguyen', 'Thomas', 'Walker', 'Harris', 'Lee', 'Ryan', 'Robinson', 'Kelly', 'King'],
    firstNames: ['Oliver', 'Charlotte', 'Noah', 'Amelia', 'Jack', 'Isla', 'William', 'Olivia', 'Henry', 'Ava', 'Lucas', 'Mia', 'Thomas', 'Matilda', 'James', 'Grace', 'Ethan', 'Chloe', 'Mason', 'Zoe']
  },
  IN: {
    lastNames: ['Patel', 'Kumar', 'Singh', 'Sharma', 'Shah', 'Khan', 'Gupta', 'Reddy', 'Verma', 'Jain', 'Agarwal', 'Rao', 'Chopra', 'Desai', 'Mehta', 'Nair', 'Iyer', 'Pandey', 'Malhotra', 'Bhat'],
    firstNames: ['Aarav', 'Aadhya', 'Vivaan', 'Ananya', 'Aditya', 'Saanvi', 'Arjun', 'Diya', 'Sai', 'Aaradhya', 'Krishna', 'Pari', 'Ayaan', 'Kavya', 'Ishaan', 'Sara', 'Reyansh', 'Anika', 'Shaurya', 'Navya']
  }
};
