import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Please from 'pleasejs';
import { randoRange } from './rando';
import './App.css';

const [
  primary,
  secondary,
  tertiary,
] = Please.make_color({ colors_returned: 3 });

const styles = StyleSheet.create({
  title: {
    fontSize: '2.5rem',
    transform: `rotateZ(${randoRange(-10, 10)}deg)`,
  },
  header: {
    backgroundColor: secondary,
    height: '150px',
    padding: '20px',
    color: primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className={css(styles.header)}>
          <h1 className={css(styles.title)}>Welcome to Rando</h1>
        </header>
        <p className="App-intro">
          Generate truly random numbers!
        </p>
      </div>
    );
  }
}

export default App;
