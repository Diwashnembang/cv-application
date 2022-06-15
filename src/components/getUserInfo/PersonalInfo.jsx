import React, { PureComponent } from 'react';
import {
  SimpleGrid, GridItem, FormControl, FormLabel, Input, Textarea, FormHelperText,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

class PersonalInfo extends PureComponent {
  render() {
    const {
      getFirstName, getLastName, getAddress, getContact, getDescription, getEmail,
    } = this.props;
    return (

      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full" px={10}>
        <FormControl>
          <GridItem colSpan={1}>
            <FormLabel> First Name</FormLabel>
            <Input type="text" name="firstName" id="userFirstName" onChange={getFirstName} />
          </GridItem>
        </FormControl>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel> Last Name</FormLabel>
            <Input type="text" name="lastName" id="userLastName" onChange={getLastName} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input type="text" name="Address" id="userAddress" onChange={getAddress} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="Email" id="userEmail" onChange={getEmail} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Contact</FormLabel>
            <Input type="number" name="Contact" id="userContact" onChange={getContact} />
            <FormHelperText>Contact Must Be Number</FormHelperText>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea name="Description" id="userDescription" resize="none" size="lg" onChange={getDescription} />
          </FormControl>
        </GridItem>
      </SimpleGrid>

    );
  }
}

PersonalInfo.propTypes = {
  getFirstName: PropTypes.func.isRequired,
  getLastName: PropTypes.func.isRequired,
  getAddress: PropTypes.func.isRequired,
  getContact: PropTypes.func.isRequired,
  getEmail: PropTypes.func.isRequired,
  getDescription: PropTypes.func.isRequired,
};

export default PersonalInfo;
