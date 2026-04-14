import { useEffect, useState } from 'react';

const query = `
  query {
    authors {
      id
      name
      email
      country
      books {
        id
        title
        genre
        price
      }
    }
  }
`;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    })
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Assignment 06 - GraphQL</h1>
      <p>Endpoint público de GraphQL consumiendo autores y libros.</p>

      <h2>Endpoint</h2>
      <code>{import.meta.env.VITE_API_URL}</code>

      <h2>Consulta de ejemplo</h2>
      <pre>{query}</pre>

      <h2>Resultado</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

export default App;