import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContact } from 'redux/contacts/fetchApi';
import { selectContacts } from 'redux/contacts/Selectors';
import { FormSection, FormBox, Label, Input, BtnSubmit} from './ContactForm.styled';



export const ContactForm = () => {
  const initualValues = {
    name: '',
    number: '',
  };

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleOnSubmit = (values, { resetForm }) => {
    contacts.find(
      contact => values.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? Notify.failure(`${values.name} is already in contacts`)
      : dispatch(addContact(values)) && resetForm();
  };

  return (
    <FormSection>
      <div>
        <Formik initialValues={initualValues} onSubmit={handleOnSubmit}>
          <FormBox>
            <Label>Name</Label>
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              as={Input}
              required
            />
            <Label>Number</Label>
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              as={Input}
              required
            />
            <BtnSubmit variant="contained" type="submit">
              Add contact
            </BtnSubmit>
          </FormBox>
        </Formik>
      </div>
    </FormSection>
  );
};

