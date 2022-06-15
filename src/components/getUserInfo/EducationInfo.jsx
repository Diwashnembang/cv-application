import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import {
  FormControl, FormLabel, GridItem, Input, SimpleGrid, Button, Container, UnorderedList, Spacer,
} from '@chakra-ui/react';

class EducationInfo extends PureComponent {
  render() {
    const {
      getEducationHistory, addEducation, handelDeletInArray, handelUpdateInArray,
    } = this.props;
    return (
      <Container
        w="full"
        mt={5}

      >
        <UnorderedList p={0} m={0}>
          {getEducationHistory.map((education) => (
            <SimpleGrid
              columns={2}
              columnGap={3}
              rowGap={6}
              w="full"
              key={education.id}
              data-key={education.id}
            >
              <GridItem key={education.university.id} colSpan={2}>
                <FormControl>
                  <FormLabel>University</FormLabel>
                  <Input
                    placeholder={education.university.text}
                    type="text"
                    name="universityName"
                    onChange={(e) => {
                      handelUpdateInArray(e, education.id, 'educationHistory', 'university');
                    }}
                  />
                </FormControl>

              </GridItem>

              <GridItem key={education.city.id} colSpan={2}>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input
                    placeholder={education.city.text}
                    type="text"
                    name="cityi"
                    onChange={(e) => {
                      handelUpdateInArray(e, education.id, 'educationHistory', 'city');
                    }}
                  />
                </FormControl>
              </GridItem>

              <GridItem key={education.degree.id} colSpan={2}>
                <FormControl>
                  <FormLabel>Degree</FormLabel>
                  <Input
                    placeholder={education.degree.text}
                    type="text"
                    onChange={(e) => {
                      handelUpdateInArray(e, education.id, 'educationHistory', 'degree');
                    }}
                  />
                </FormControl>

              </GridItem>
              <GridItem key={uniqid()} colSpan={2}>
                <Button
                  type=" button "
                  onClick={(e) => {
                    handelDeletInArray(e, education.id, 'educationHistory');
                  }}
                >
                  Delet

                </Button>
              </GridItem>

            </SimpleGrid>
          ))}
        </UnorderedList>

        <Button type="button" onClick={addEducation} mt={9}>Add More</Button>

      </Container>

    );
  }
}

EducationInfo.propTypes = {
  getEducationHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    university: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
    degree: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
    city: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),

  })).isRequired,
  handelDeletInArray: PropTypes.func.isRequired,
  handelUpdateInArray: PropTypes.func.isRequired,
  addEducation: PropTypes.func.isRequired,

};

export default EducationInfo;
