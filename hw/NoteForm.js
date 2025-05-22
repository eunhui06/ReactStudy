import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  background: #228be6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  margin-bottom: 1rem;
  cursor: pointer;
`;

function NoteForm({ title, content, onChangeTitle, onChangeContent, onAdd }) {
  return (
    <div>
      <Input placeholder="제목" value={title} onChange={onChangeTitle} />
      <Input placeholder="내용" value={content} onChange={onChangeContent} />
      <Button onClick={onAdd}>추가하기</Button>
    </div>
  );
}

export default NoteForm;
