import React from 'react';
import Header from './Header.js';
import Paragraph from './Paragraph.js';
import Square from './Square.js';
import People from './People.js';
import Clicked from './Clicked.js';
import ToggleText from './ToggleText.js';
import Counter from './Counter.js';
import StepCounter from './StepCounter.js';
import CatchMeIfYouCan from './CatchMeIfYouCan.js';
// import RollCall from './RollCall.js';

// This renders the components passed in on each components page
const Stuff = ({ square }) => (
    <React.Fragment>
      <Header>Bee Bop</Header>
      <Paragraph>Fizz Fazz waah</Paragraph>
      <Paragraph>flim flam</Paragraph>
      {square ? <Square color="pink" /> : null}
      <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
      <Clicked />
      <ToggleText />
      <Counter initial = { 50 } max={ 100 }/>
      <StepCounter max={ 100 } step={ 5 } />

    

      <CatchMeIfYouCan jump={ 100 }/>
      
    </React.Fragment>
    );


export default Stuff;
