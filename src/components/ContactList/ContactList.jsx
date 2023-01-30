import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContactsByName, selectLoadingStatus } from 'redux/contacts/Selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/fetchApi';
import { Loader } from 'components/Loader/SpinningLoader';
import { ListBox, ListItem, BtnDelete, Text } from './Contact.styled';


export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsByName);
  const isLoading = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <div>
        <h2>Contacts:</h2>
        {contacts.length === 0 ? (
          <h2>Phonebook is empty</h2>
        ) : (
          <ListBox>
            {isLoading && <Loader />}
            {contacts.map(({ id, name, number }) => (
              <ListItem key={id}>
                <Text>{name}</Text>
                <Text>{number}</Text>
                <BtnDelete
                  variant="contained"
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  Delete contact
                </BtnDelete>
              </ListItem>
            ))}
          </ListBox>
        )}
      </div>
    </section>
  );
};

