const fetch = require('node-fetch');

const GENDERIZE_API_URL = 'https://api.genderize.io';

async function fetchGenderData(name) {
  const url = `${GENDERIZE_API_URL}?name=${encodeURIComponent(name)}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
    timeout: 8000,
  });

  if (!response.ok) {
    throw new Error(`Genderize API responded with status ${response.status}`);
  }

  const data = await response.json();
  return data;
}

module.exports = { fetchGenderData };