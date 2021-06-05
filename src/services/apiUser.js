const API = process.env.API || 'http://127.0.0.1:5000/'

export const saveUserApi = data => {
  return fetch(`${API}user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
  // .then(data => console.log(data));
}