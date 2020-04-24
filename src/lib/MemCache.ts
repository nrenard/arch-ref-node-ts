import NodeCache from 'node-cache';

const cache = new NodeCache();

class Cache {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  show(): any {
    return cache.get(this.key);
  }

  store(value: any): any {
    return cache.set(this.key, value);
  }

  update(value: any): any {
    return this.store(value);
  }

  destroy(): any {
    return cache.del(this.key);
  }
}

export default Cache;
