import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const contactSlice = createSlice({
  name: 'addContacts',
  initialState: initialState.contacts,
  reducers: {
    addContacts: (state, action) => ({
      ...state,
      contacts: [...state.contacts, { ...action.payload }],
    }),
    deleteContact: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    }),
  },
});

export const contactsReducer = contactSlice.reducer;

export const { addContacts, deleteContact } = contactSlice.actions;
