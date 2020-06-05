// https://www.taniarascia.com/getting-started-with-react/
// https://reactjs.org/docs/hooks-intro.html
// https://reactjs.org/docs/components-and-props.html

import React, { Component } from 'react';
import Test from './Test';
import Table from './Table';

class App extends Component {

    render() {
        const word = 'scooter';
        const characters = [
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
          ]
        return (
            <div className="App">
                <h1>Hello {word}.</h1>
                <div className="container">
                    <Table characterData={characters} />
                </div>

                <Test />
               
            </div>
        )
    }
}

export default App;