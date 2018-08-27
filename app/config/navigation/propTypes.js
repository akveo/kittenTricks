import PropTypes from 'prop-types';

const shape = (propShape) => PropTypes.shape(propShape);

const functionTypes = {
  goBack: PropTypes.func,
  navigate: PropTypes.func,
};

const NavigationType = shape({
  goBack: functionTypes.goBack.isRequired,
  navigate: functionTypes.navigate.isRequired,
});

export default NavigationType;
