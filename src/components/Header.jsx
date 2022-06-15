import React, { PureComponent } from 'react';
import { Heading } from '@chakra-ui/react';

class Header extends PureComponent {
  render() {
    return (
      <div id="header">
        <Heading size="3xl" px={20} py={5} bgColor="gray.500">CV Generator</Heading>
      </div>
    );
  }
}

export default Header;
