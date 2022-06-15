import React, { PureComponent } from 'react';
import { Container } from '@chakra-ui/react';
import Header from './components/Header';
import Main from './components/Main';

class App extends PureComponent {
  render() {
    return (

      <div>
        <Header />
        <Container maxW="container.xl" p={0}>
          <Main />
        </Container>
      </div>
    );
  }
}

export default App;
