import './App.css';
import { useState } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';


function App() {

  const [SelectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {SelectedContactId ? <SelectedContact SelectedContactId={SelectedContactId} setSelectedContactId={setSelectedContactId} /> : 
      <ContactList setSelectedContactId={setSelectedContactId}  />}
    </>
  );
}

export default App;
