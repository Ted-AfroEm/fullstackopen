import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "name") setNewName(value);
    else if (name === "number") setNewNumber(value);
    else setFilter(value);
  };

  const addName = (event) => {
    event.preventDefault();
    const nameExist = persons.find((person) => person.name === newName);
    if (nameExist === undefined) {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
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
      <div>
        filter shown with:{" "}
        <input name="filter" value={filter} onChange={handleChange} />
      </div>
      <h2>Add new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input name="name" value={newName} onChange={handleChange} />
        </div>
        <div>
          number:{" "}
          <input name="number" value={newNumber} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      {filterdPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
