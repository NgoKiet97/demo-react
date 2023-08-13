import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify'; //version npm install --save-exact react-toastify@8.0.2
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Navbar/Nav';
import Home from './Example/Home';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">



          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React
          </p>

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/to-do-app">
              <ListTodo />
            </Route>
            <Route path="/my-component">
              <MyComponent />
            </Route>

          </Switch>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
