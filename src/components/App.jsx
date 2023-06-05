import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Title, Div, TitleList } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parselContacts = JSON.parse(contacts);
    if (parselContacts) this.setState({ contacts: parselContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleSubmit = ({ name, number }) => {
    const newContacts = {
      name,
      number,
      id: nanoid(),
    };
    const find = this.state.contacts.find(
      element => element.name.toLowerCase() === name.toLowerCase()
    );

    find
      ? alert(find.name + ' is already in contacts.')
      : this.setState(prevState => ({
          contacts: [newContacts, ...prevState.contacts],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleFilters = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const visibleFilters = this.getVisibleFilters();
    return (
      <Div>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handleSubmit} />
        <TitleList>Contacts</TitleList>
        <Filter onChange={this.changeFilter} value={this.state.filter} />
        <ContactList contacts={visibleFilters} onDelete={this.deleteContacts} />
      </Div>
    );
  }
}

export default App;
