import styled from 'styled-components';
import PropTypes from 'prop-types';

import { elevation, palette, color } from './commons/basics';


const Paper  = styled.div`
  ${palette.default}
  border-radius: ${props => props.square ? "0" : "4px"};
  ${props => props.outlined ? 
    'border: 1px solid ' + color.divider.default + ';' : 
    elevation[props.elevation]};
`;

  Paper.propTypes = {
    elevation: PropTypes.string,
    outlined: PropTypes.bool,
    square: PropTypes.bool
  };

  Paper.defaultProps = {
    elevation: "1",
    outlined: false,
    square: false
  };

export default Paper;