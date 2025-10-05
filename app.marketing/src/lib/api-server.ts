
export const apiServerFetch = async (
  path: string,
  requestOptions: RequestInit = {}
) => {
  const headers: Record<string, string> = (requestOptions.headers as Record<
    string,
    string
  >) || {
    'Content-Type': 'application/json',
  };

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.lin.ky';

  return fetch(`${apiUrl}${path}`, {
    headers,
    body: requestOptions.body,
    ...requestOptions,
  });
};