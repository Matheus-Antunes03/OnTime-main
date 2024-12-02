const API_BASE_URL = 'http://localhost:3333';

const apiRequest = async (resource, method, body, id = null) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const url = id ? `${API_BASE_URL}/api/${resource}/${id}` : `${API_BASE_URL}/api/${resource}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export default apiRequest;