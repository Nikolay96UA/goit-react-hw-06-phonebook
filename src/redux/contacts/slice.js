import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const contactSlice = createSlice({
  name: 'addContacts',
  initialState: initialState,
  reducers: {
    addContacts: (state, action) => ({
      ...state,
      contacts: [...state.contacts, { ...action.payload }],
    }),
    filtered: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
    deleteContact: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    }),
  },
});

export const contactsReducer = contactSlice.reducer;

export const { addContacts, deleteContact, filtered } = contactSlice.actions;
