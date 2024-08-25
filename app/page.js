'use client'
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState([]);

  const handleSubmit = async () => {

    // First, the user data will be converted to embedding.
    // Then embedding will be used to generate a relevance from pinecone.
    // Then the result from 
    const response = await fetch('/api/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
      />
      <button onClick={handleSubmit}>Submit Question</button>
      <ul>
      {result}
      </ul>
    </div>
  );
}
