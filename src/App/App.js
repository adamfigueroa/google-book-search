import React, { Component } from 'react';
import Header from '../Header/Header'
import Book from '../Book/Book'

class App extends Component {
  state = {
    placeholder: null
  }

  render() {
  return (
    <main className='App'>
      <Header />
      <Book />
    </main>
  );
}
}

export default App;