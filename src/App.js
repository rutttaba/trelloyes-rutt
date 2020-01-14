import React, { Component } from 'react';
import List from './composition/List'
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  render() {
    const { store } = this.props;

    return (
      <main className='App'>

        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>

        <div className='App-list'>

          {store.lists.map(item => (
            <List
              key={item.id}
              header={item.header}
              cards={item.cardIds.map(id => store.allCards[id])}
            />
          ))};

        </div>
      </main>
    );
  }
}

export default App;



