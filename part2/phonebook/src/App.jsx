import { useState, useEffect } from "react";
import phonebookService from "./services/phonebook";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    phonebookService.getAll().then((returnedPersons) => {
      setPersons(returnedPersons);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();
    const nameExist = persons.find((person) => person.name === newName);
    const personContact = { name: newName, number: newNumber };
    if (nameExist === undefined) {
      phonebookService.create(personContact).then((returnedNewPerson) => {
        setPersons([...persons, returnedNewPerson]);
        setNewName("");
        setNewNumber("");
      });
    } else {
      let confirmUpdatePhone = window.confirm(
        `${newName} is already added to phonebook, replaace the old number with a new one?`
      );
      if (confirmUpdatePhone) {
        let updatePerson = persons.filter(
          (person) => person.name === personContact.name
        );
        phonebookService
          .update(updatePerson[0].id, personContact)
          .then((returnedUpdated) => {
            let updatedPersons = persons.map((person) => {
              if (person.id === returnedUpdated.id) {
                return returnedUpdated;
              }
              return person;
            });

            setPersons(updatedPersons);
            setNewName("");
            setNewNumber("");
          });
      }
    }
  };
  const filterdPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const deleteHandle = (person) => {
    let response = window.confirm(`Delete ${person.name}`);
    if (response) {
      phonebookService.deletePerson(person.id).then((deletedPerson) => {
        const updatedPersons = persons.filter(
          (person) => person.id !== deletedPerson.id
        );
        setPersons(updatedPersons);
      });
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filterQuery} setFilter={setFilterQuery} />
      <h2>Add new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filterdPersons} deleteHandle={deleteHandle} />
    </div>
  );
};

export default App;
