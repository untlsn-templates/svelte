import { types } from 'mobx-state-tree';
import devtools from '~/helpers/mstdev';

const Store = types
  .model({
    count: 0,
  })
  .actions((self) => ({
    increment() {
      self.count++;
    },
  }));

const store = Store.create();
devtools(store);

export default store;
