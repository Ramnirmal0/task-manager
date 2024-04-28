class CustomDB {
  #data;
  #uuid;
  constructor() {
    this.#data = {};
    this.#uuid = 0;
  }
  insertOne(item) {
    this.#uuid++;
    this.#data[this.#uuid] = {
      id: this.#uuid,
      title: item.title,
      description: item.description,
      completed: item.completed,
    };
    return true;
  }
  validateInput(item) {
    if (
      item.title.trim() === "" ||
      item.description.trim() === "" ||
      item.hasOwnProperty("id") ||
      typeof item.title !== "string" ||
      typeof item.description !== "string" ||
      typeof item.completed !== "boolean"
    ) {
      throw new Error("Invalid input");
    } else {
      return true;
    }
  }
  deleteOne(uuid) {
    if (!this.#data[uuid]) throw new Error("Invalid uuid");
    delete this.#data[uuid];
    return true;
  }
  updateOne(uuid, item) {
    if (!this.#data[uuid]) throw new Error("Invalid uuid");
    for (let key in item) {
      if (this.#data[uuid].hasOwnProperty(key) && !item.hasOwnProperty("id")) {
        this.#data[uuid][key] = item[key];
      }
    }
    return true;
  }
  find() {
    return Object.keys(this.#data).map((key) => this.#data[key]) || [];
  }
  findOne(uuid) {
    if (!this.#data[uuid]) throw new Error("Invalid uuid");
    return this.#data[uuid] || {};
  }
}

module.exports = CustomDB;
