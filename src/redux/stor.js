import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './contacts/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: 'filterValue',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const stor = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(stor);
