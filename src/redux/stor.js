import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const stor = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(stor);
