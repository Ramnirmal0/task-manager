class CustomDB {
  #data;
  #uuid;
  constructor() {
    this.#data = {};
    this.#uuid = 0;
  }
  insertOne(item) {
    this.#uuid++;
    this.#data[this.uuid] = {
      id: this.#uuid,
      title: item.title,
      description: item.description,
      completed: Boolean(item.completed),
    };
    return true;
  }
  validateInput(item) {
    if (
      item.title.trim() === "" &&
      item.description.trim() === "" &&
      typeof item.title !== "string" &&
      typeof item.description !== "string" &&
      typeof item.completed !== "boolean"
    ) {
      throw new Error("Invalid input");
    }
    return true;
  }
  deleteOne(uuid) {
    delete this.#data[uuid];
    return true;
  }
  updateOne(item, uuid) {
    for (let key in item) {
      if (this.#data[uuid].hasOwnProperty(key) && !item.hasOwnProperty("id")) {
        this.#data[uuid][key] = item[key];
      }
    }
    return true;
  }
}

module.exports = CustomDB;