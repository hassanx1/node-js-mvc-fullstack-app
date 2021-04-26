'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskListSchema extends Schema {
  up () {
    this.create('task_lists', (table) => {
      table.increments()
      table.string('taskName')
      table.bool('isDone').default(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('task_lists')
  }
}

module.exports = TaskListSchema
