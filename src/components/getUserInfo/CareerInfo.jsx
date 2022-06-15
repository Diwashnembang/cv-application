import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import {
  Button, FormControl, FormLabel, GridItem, Input, SimpleGrid, UnorderedList,
} from '@chakra-ui/react';

class CareerInfo extends PureComponent {
  render() {
    const {
      addCareer, handelUpdateInArray, getCareerHistory, handelDeletInArray,
    } = this.props;
    return (
      <div>
        <UnorderedList p={0} m={0}>
          {getCareerHistory.map((career) => (
            <SimpleGrid
              columns={2}
              columnGap={3}
              rowGap={6}
              w="full"
              p={10}
              key={career.id}
              data-key={career.id}
            >
              <GridItem key={career.position.id} colSpan={2}>
                <FormControl>
                  <FormLabel>Position</FormLabel>
                  <input
                    placeholder={career.position.text}
                    type="text"
                    name="position"
                    id="position"
                    onChange={(e) => {
                      handelUpdateInArray(e, career.id, 'careerHistory', 'position');
                    }}
                  />
                </FormControl>
              </GridItem>
              <GridItem key={career.company.id} colSpan={2}>
                <FormControl>
                  <FormLabel>Company</FormLabel>
                  <input
                    placeholder={career.company.text}
                    type="text"
                    name="position"
                    id="position"
                    onChange={(e) => {
                      handelUpdateInArray(e, career.id, 'careerHistory', 'company');
                    }}
                  />
                </FormControl>

              </GridItem>
              <GridItem key={career.city.id} colSpan={2}>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input
                    placeholder={career.city.text}
                    type="text"
                    name="position"
                    id="position"
                    onChange={(e) => {
                      handelUpdateInArray(e, career.id, 'careerHistory', 'city');
                    }}
                  />
                </FormControl>

              </GridItem>
              <GridItem key={career.from.id} colSpan={2}>
                <FormControl>
                  <FormLabel>From</FormLabel>
                  <Input
                    placeholder={career.from.text}
                    type="text"
                    name="position"
                    id="position"
                    onChange={(e) => {
                      handelUpdateInArray(e, career.id, 'careerHistory', 'from');
                    }}
                  />
                </FormControl>

              </GridItem>
              <GridItem key={career.to.id} colSpan={2}>
                <FormControl>
                  <FormLabel>To</FormLabel>
                  <Input
                    placeholder={career.to.text}
                    type="text"
                    name="position"
                    id="position"
                    onChange={(e) => {
                      handelUpdateInArray(e, career.id, 'careerHistory', 'to');
                    }}
                  />
                </FormControl>

              </GridItem>
              <GridItem key={uniqid()} colSpan={2}>
                <button
                  type="button"
                  onClick={(e) => {
                    handelDeletInArray(e, career.id, 'careerHistory');
                  }}
                >
                  Delet

                </button>
              </GridItem>
            </SimpleGrid>
          ))}
        </UnorderedList>
        <Button p={10} type="button" onClick={addCareer}>Add More</Button>
      </div>

    );
  }
}

CareerInfo.propTypes = {

  handelUpdateInArray: PropTypes.func.isRequired,
  getCareerHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    position: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      },
    ),
    company: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      },
    ),
    city: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      },
    ),
    from: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      },
    ),
    to: PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      },
    ),
  })).isRequired,
  addCareer: PropTypes.func.isRequired,
  handelDeletInArray: PropTypes.func.isRequired,

};

export default CareerInfo;
