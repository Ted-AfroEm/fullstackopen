import { useState, useEffect } from "react";
import phonebookService from "./services/phonebook";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    phonebookService.getAll().then((returnedPersons) => {
      setPersons(returnedPersons);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    const nameExist = persons.find((person) => person.name === newName);
    if (nameExist === undefined) {
      const personContact = { name: newName, number: newNumber };
      phonebookService.create(personContact).then((returnedNewPerson) => {
        setPersons([...persons, returnedNewPerson]);
        setNewName("");
        setNewNumber("");
      });
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };
  const filterdPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filterdPersons} />
    </div>
  );
};

export default App;
