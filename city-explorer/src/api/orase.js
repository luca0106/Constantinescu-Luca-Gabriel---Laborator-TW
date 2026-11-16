const API_URL = 'https://jsonplaceholder.typicode.com'

// Cere lista completă cu cei 10 utilizatori
export async function fetchUsers() {
  const response = await fetch(`${API_URL}/users`)
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }
  return response.json()
}

// Cere datele pentru un singur utilizator, pe baza ID-ului
export async function fetchUserById(id) {
  const response = await fetch(`${API_URL}/users/${id}`)
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }
  return response.json()
}