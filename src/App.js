import './App.css';
import React from 'react';
import './pages/contactTracingForm.js'
import ContactTracingForm from './pages/contactTracingForm.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ContactListPage from './pages/contactListPage';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ContactTracingForm />
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <header className="App-header">
              <ContactTracingForm />
            </header>
          </div>
        </Route>
        <Route
          path="/list">
          <div className="App">
            <header className="App-header">
              <ContactListPage />
            </header>
          </div>
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
