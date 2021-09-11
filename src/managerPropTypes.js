import PropTypes from 'prop-types';

export default PropTypes.shape({
  add: PropTypes.func.isRequired,
  registerAddFunction: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired
});
