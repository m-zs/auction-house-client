import React from "react";
import { gql, useQuery } from "@apollo/client";

import "./App.css";

const users = gql`
  query Users {
    users {
      items {
        id
        username
        status
        role
      }
    }
  }
`;

export const App = () => {
  const { loading, error, data } = useQuery(users);

  console.log(data, error, loading);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
