class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    if (this.#items.includes(itemToRemove)) {
    this.#items.splice(this.#items.indexOf(itemToRemove), 1)  
    }
  }
  // alternative removeItem method
  // removeItem(itemToRemove) {
  //   const indexDeletedItem = this.#items.indexOf(itemToRemove);
  //   if (indexDeletedItem !== -1) {
  //     this.#items.splice(indexDeletedItem, 1);
  //   }
  // }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]