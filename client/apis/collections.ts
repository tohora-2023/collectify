import request from 'superagent'

export async function getAllCollectionsByUser(token: string) {
  const response = await request.get('/api/v1/collections').set('Authorization', `Bearer${token}`)
  return response.body
}