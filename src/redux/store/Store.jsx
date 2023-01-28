import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from '../contacts/contactsSlice';
import { filterReducer } from '../contacts/FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
});


