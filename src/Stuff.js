import FourOhFour from './FourOhFour.js';
import { BrowserRouter as Router, Route, Switch 
} from "react-router-dom";

import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';


import React from 'react';
import Header from './Header.js';
import Paragraph from './Paragraph.js';
import Square from './Square.js';
import SquareReducer from './SquareReducer.js';
import People from './People.js';
import Clicked from './Clicked.js';
import ClickedHook from './ClickedHook.js';
import ClickedReducer from './ClickedReducer.js';
import ToggleText from './ToggleText.js';
import ToggleTextHook from './ToggleTextHook.js';
import ToggleTextReducer from './ToggleTextReducer.js';
import Counter from './Counter.js';
import CounterHook from './CounterHook.js';
import CounterReducer from './CounterReducer.js';
import StepCounter from './StepCounter.js';
import StepCounterHook from './StepCounterHook.js';
import Length from './Length.js';
import PasswordStrength from './PasswordStrength.js';
import TempConverter from './TempConverter.js';
import List from './List.js';
import CatchMeIfYouCan from './CatchMeIfYouCan.js';
import CatchMeIfYouCanHook from './CatchMeIfYouCanHook.js';
import Progress from './Progress.js';
import RollCall from './RollCall.js';
import RollCallHook from './RollCallHook.js';


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
              <Link to="/square/blue">Square</Link>
            </li>
            <li className="nav-link">
              <Link to="/counter">Counters</Link>
            </li>
            <li className="nav-link">
              <Link to="/stepcounter/100/20">Step Counter</Link>
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
            <li className="nav-link">
              <Link to="/progress">Progress</Link>
            </li>
            <li className="nav-link">
              <Link to="/jump">Jump</Link>
            </li>
            <li className="nav-link">
              <Link to="/rollcall">RollCall</Link>
            </li>
            <li className="nav-link">
              <Link to="/squarereducer">Square Reduce</Link>
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

        {/* <Route path="/squarehook">
          {green ? <SquareHook color="pink" /> : null}
        </Route> */}


        <Route path="/square/:id" render={ ({ match }) => ( <Square square={ match.params.id } />) } />

        <Route path="/squarereducer">
          <SquareReducer />
        </Route>


        
        <Route path="/misc">
          <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
          <Clicked />
          <ClickedHook />
          <ClickedReducer />
          <ToggleText />
          <ToggleTextHook initial={"Clicked"} alternate={"Not Clicked"}/>
          <ToggleTextReducer initial={"Clicked"} alternate={"Not Clicked"}/>
          <Length />
        </Route>


        <Route path="/jump">
          <CatchMeIfYouCan jump={ 100 }/>
          <CatchMeIfYouCanHook jump={ 100 }/>
        </Route>
 

        <Route path="/counter">
          <Counter initial = { 50 } max={ 100 }/>
          <CounterHook initial = { 50 } max={ 100 }/>
          <CounterReducer />
        </Route>

        <Route path="/stepcounter">
          <StepCounterHook max={ 100 } step={ 5 } />
          <Route path="/stepcounter/:max/:step" render={ ({ match }) => ( <StepCounter max={ match.params.max } step={ match.params.step } />) } />
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

        <Route path="/progress">
          <Progress now={0} />
        </Route>

        <Route path="/rollcall">
          <RollCall names={ ["Bar", "Rar", "Gar"] } />
          <RollCallHook names={ ["Bar", "Rar", "Gar"] } />
        </Route>

      
        <FourOhFour /> {/* 404 PAGE */}
      </Switch>

    </React.Fragment>
  </Router>
    );


export default Stuff;
