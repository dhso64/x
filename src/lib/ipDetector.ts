interface IPApiCoResponse {
  country_code?: string;
}

interface IPApiComResponse {
  status?: string;
  countryCode?: string;
}

interface IPInfoResponse {
  country?: string;
}

interface FreeIPApiResponse {
  countryCode?: string;
}

const detectFromIpApiCo = async (): Promise<string | null> => {
  try {
    const response = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(5000) });
    if (!response.ok) return null;
    const data: IPApiCoResponse = await response.json();
    return data.country_code || null;
  } catch {
    return null;
  }
};

const detectFromIpApiCom = async (): Promise<string | null> => {
  try {
    const response = await fetch('https://ip-api.com/json/', { signal: AbortSignal.timeout(5000) });
    if (!response.ok) return null;
    const data: IPApiComResponse = await response.json();
    if (data.status === 'success') {
      return data.countryCode || null;
    }
    return null;
  } catch {
    return null;
  }
};

const detectFromIpInfo = async (): Promise<string | null> => {
  try {
    const response = await fetch('https://ipinfo.io/json', { signal: AbortSignal.timeout(5000) });
    if (!response.ok) return null;
    const data: IPInfoResponse = await response.json();
    return data.country || null;
  } catch {
    return null;
  }
};

const detectFromFreeIpApi = async (): Promise<string | null> => {
  try {
    const response = await fetch('https://freeipapi.com/api/json', { signal: AbortSignal.timeout(5000) });
    if (!response.ok) return null;
    const data: FreeIPApiResponse = await response.json();
    return data.countryCode || null;
  } catch {
    return null;
  }
};

export const detectCountry = async (): Promise<string> => {
  const apis = [
    detectFromIpApiCo(),
    detectFromIpApiCom(),
    detectFromIpInfo(),
    detectFromFreeIpApi(),
  ];

  try {
    const result = await Promise.race(apis);
    if (result) {
      return result;
    }
  } catch {
    // Do nothing
  }

  const results = await Promise.allSettled(apis);
  for (const result of results) {
    if (result.status === 'fulfilled' && result.value) {
      return result.value;
    }
  }

  return 'US';
};
