/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('details', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('collections_id')
    table.string('creator')
    table.string('genre')
    table.string('details')
    table.date('date_created')
    table.date('start_date')
    table.date('completion_date')
    table.string('image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('details')
}
