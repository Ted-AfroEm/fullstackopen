import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "0914707603" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "name") setNewName(value);
    else setNewNumber(value);
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
  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
