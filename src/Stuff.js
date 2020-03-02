import React from 'react';
import Header from './Header.js';
import Paragraph from './Paragraph.js';
import Square from './Square.js';
import People from './People.js';

// This renders the components passed in on each components page
const Stuff = ({ square }) => (
    <React.Fragment>
      <Header>Bee Bop</Header>
      <Paragraph>Fizz Fazz waah</Paragraph>
      <Paragraph>flim flam</Paragraph>
      {square ? <Square color="red" /> : null}
      <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
    </React.Fragment>
    );


export default Stuff;
