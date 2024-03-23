const Note = ({ note, tootleImportance }) => {
  const label = note.important ? "make not importan" : "make important";
  return (
    <li>
      {note.content}
      <button onClick={tootleImportance}>{label}</button>
    </li>
  );
};

export default Note;
