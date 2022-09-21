import React from "react";

import Authors from "./features/authors/Authors.js";
import BookInput from "./features/books/BookInput";
import Books from "./features/books/Books";
import AuthorInput from "./features/authors/AuthorInput";

function App() {
  return (
    <div>
      <div>
        <h2>Authors</h2>
        <AuthorInput />
        <Authors />
      </div>
      <div>
        <h2>Book</h2>
        <BookInput />
        <Books />
      </div>
    </div>
  );
}

export default App;
