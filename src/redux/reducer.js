import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';

export const reducer = combineReducers({
  contacts: contactsReducer,
});
