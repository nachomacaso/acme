import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Redirect} from 'react-router-dom';
import SearchAcme from './components/SearchAcme';
import CreateNewItem from './components/CreateNewItem';
import EditAcmeItem from './components/EditAcmeItem';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <Header/>
            <main>
              <Route exact path="/" render={() => (<Redirect to="/search" />)}/>
              <Route exact path="/search" component={SearchAcme} />
              <Route exact path="/create" component={CreateNewItem} />
              <Route path='/:id/edit' component={EditAcmeItem}/>
            </main>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
