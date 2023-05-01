import connection from '../connection'

export function getCollectionsByUserId(auth0Id: string, db = connection) {
  return db('collections')
    .join('details', 'collections.id', 'details.collection_id')
    .where('collections.auth0_id', auth0Id)
    .select()
}