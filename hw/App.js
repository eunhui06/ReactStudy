import React, { useState } from 'react';
import styled from 'styled-components';
import NoteForm from './NoteForm';
import NoteItem from './NoteItem';

const AppBlock = styled.div`
  width: 400px;
  margin: 2rem auto;
`;

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAdd = () => {
    if (!title || !content) return;
    setNotes([...notes, { title, content }]);
    setTitle('');
    setContent('');
  };

  return (
    <AppBlock>
      <h2>메모장</h2>
      <NoteForm
        title={title}
        content={content}
        onChangeTitle={e => setTitle(e.target.value)}
        onChangeContent={e => setContent(e.target.value)}
        onAdd={handleAdd}
      />
      {notes.map((note, idx) => (
        <NoteItem key={idx} title={note.title} content={note.content} />
      ))}
    </AppBlock>
  );
}

export default App;
