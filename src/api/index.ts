export interface ClientResponse {
  script: string;
  output: string[];
}

const apiUrl = 'http://localhost:5000';

export const fetchClientData = async (request: string) => {
  const response = await fetch(`${apiUrl}${request}`);
  const data: ClientResponse[] = await response.json();
  return data;
};

export const postClientData = async (request: string) => {
  const response = await fetch(`${apiUrl}${request}`, {
    method: 'POST',
  });
  const data: ClientResponse[] = await response.json();
  return data;
};
