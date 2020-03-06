import FourOhFour from './FourOhFour.js';
import { BrowserRouter as Router, Route, Switch 
} from "react-router-dom";

import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';


import React from 'react';
import Header from './Header.js';
import Paragraph from './Paragraph.js';
import Square from './Square.js';
import People from './People.js';
import Clicked from './Clicked.js';
import ToggleText from './ToggleText.js';
import Counter from './Counter.js';
import StepCounter from './StepCounter.js';
import Length from './Length.js';
import PasswordStrength from './PasswordStrength.js';
import TempConverter from './TempConverter.js';
import List from './List.js';
import CatchMeIfYouCan from './CatchMeIfYouCan.js';


// This renders the components passed in on each components page
const Stuff = ({ square }) => (
  <Router>
    <React.Fragment>

        {/* NAVBAR - This should probably go in its own component*/}
          <ul className="nav justify-content-center">
            <li className="nav-link">
              <Link to="/misc">Misc</Link>
            </li>
            <li className="nav-link">
              <Link to="/square">Square</Link>
            </li>
            <li className="nav-link">
              <Link to="/counters">Counters</Link>
            </li>
            <li className="nav-link">
              <Link to="/converter">Converter</Link>
            </li>
            <li className="nav-link">
              <Link to="/password">Test Your Password</Link>
            </li>
            <li className="nav-link">
              <Link to="/list">List</Link>
            </li>
          </ul>
          {/* NAVBAR END */}

      {/* HEADER */}
      <div style={{
        textAlign: "center",
        }}>
      <Header>React App</Header>
      <Button variant="warning" href="../square/red"
      style={{marginBottom: 20,}}>
        Go to Red Square
      </Button>{' '}
      </div>
      {/* HEADER END */}

      <Switch>
        <Route exact path="/para" component={ Paragraph }/>

        {/* <Route path="/square">
          {square ? <Square color="pink" /> : null}
        </Route> */}

        <Route path="/square/:id" render={ ({ match }) => ( <Square square={ match.params.id } />) } />

        
        <Route path="/misc">
          <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
          <Clicked />
          <ToggleText />
          <Length />
          <CatchMeIfYouCan jump={ 100 }/>
        </Route>
 

        <Route path="/counters">
          <Counter initial = { 50 } max={ 100 }/>
          <StepCounter max={ 100 } step={ 5 } />
        </Route>

        <Route path="/converter">
          <TempConverter />
        </Route>

        <Route path="/password">
          <PasswordStrength />
        </Route>

        <Route path="/list">
          <List />
        </Route>
      
        <FourOhFour /> {/* 404 PAGE */}
      </Switch>

    </React.Fragment>
  </Router>
    );


export default Stuff;
