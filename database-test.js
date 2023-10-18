const randomUUID = require('crypto')

module.exports = class DatabaseMemory{

  #users = new Map();

  list() {
    return this.#users.values();
  }

  create(user) {
    const userId = randomUUID

    this.#users.set(userId, user);
  }

  update(id, user) {
    this.#users.set(id, user);
  }

  delete(id) {
    this.#users.delete(id);
  }

}

