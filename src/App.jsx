import React, { PureComponent } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Header from './components/Header';
import Main from './components/Main';

class App extends PureComponent {
  render() {
    return (
      <Box bg="blackAlpha.200">
        <Header />
        <Container maxW="8xl">
          <Main />
        </Container>
      </Box>

    );
  }
}

export default App;
