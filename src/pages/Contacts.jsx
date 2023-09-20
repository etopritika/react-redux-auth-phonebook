import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contacts from '../components/Contacts/Contacts';
import Filter from '../components/Filter/Filter';
import { ContactForm } from '../components/ContactsForm/ContactForm';
import { fetchContacts } from '../redux/contacts/contactOperations';
import { selectIsLoading } from '../redux/contacts/selectors';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    maxWidth: '960px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 0,
  },
};

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Your contacts</h1>
      <ContactForm />
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <Contacts />
    </main>
  );
}
