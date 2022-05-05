// Polymorphism

interface IStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: IStorage<T> = {};
  get(key: string): T {
    return this.storage[key];
  }
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

// create an instance
const stringStorage = new LocalStorage<string>();
