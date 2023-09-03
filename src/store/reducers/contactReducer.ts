
import { createReducer } from '@reduxjs/toolkit';
import { Contact, ContactActions } from '../actions/contactActions';

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

export const contactReducer = createReducer(initialState, {
});
