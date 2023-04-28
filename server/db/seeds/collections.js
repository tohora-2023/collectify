/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('collections').del()
  await knex('collections').insert([
    { id: 1, auth0_Id: '', category: 'movie' },
    { id: 2, auth0_Id: '', category: 'book' },
    { id: 3, auth0_Id: '', category: 'album' },
  ])
}
