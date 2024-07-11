import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 1 }); // Cache items for 5 seconds

export const getCachedData = (key) => {
  return cache.get(key);
};

export const setCachedData = (key, value) => {
  cache.set(key, value);
};
