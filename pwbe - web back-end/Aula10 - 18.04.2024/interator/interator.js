class Iterator {
    constructor(collection) {
      this.collection = collection;
      this.index = 0;
    }
  
    hasNext() {
      return this.index < this.collection.length;
    }
  
    next() {
      const item = this.collection[this.index];
      this.index++;
      return item;
    }
  }
  
  class Collection {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    createIterator() {
      return new Iterator(this.items);
    }
  }
  
  // Exemplo de uso:
  
  const collection = new Collection();
  collection.addItem('Item 1');
  collection.addItem('Item 2');
  collection.addItem('Item 3');
  
  const iterator = collection.createIterator();
  
  while (iterator.hasNext()) {
    const item = iterator.next();
    console.log(item);
  }