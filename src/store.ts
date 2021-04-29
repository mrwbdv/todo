import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer } from './redux/reducer';

export const config = {
  key: 'root',
  storage: storage,
};

export const persisted = persistReducer(config, reducer);

export const store = createStore(persisted);
