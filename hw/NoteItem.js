// src/components/NoteItem.js
import React from 'react';
import styled from 'styled-components';

const NoteBlock = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;

function NoteItem({ title, content }) {
  return (
    <NoteBlock>
      <h4>{title}</h4>
      <p>{content}</p>
    </NoteBlock>
  );
}

export default NoteItem;
