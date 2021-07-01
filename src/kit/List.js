import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fonts } from './commons/basics';


const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`;
/* div вместо ul чтобы проще переходить на react native */

export default List;


export const ListItem = styled.div`
  min-height: 48px;
  box-sizing: border-box;
  padding: 8px 16px; 
  display: flex;
  align-items: center;
`;

export const ListItemIcon = styled.div`
  width: ${props => props.short ? '48px': '56px'};
  display: flex;
  justify-content: flex-${props => props.pos};
  ${props => props.isOpacity ? 'opacity: 0.87;' : ''}
`;  /* in material.ui opacity: 0.56 */

  ListItemIcon.propTypes = {
    pos: PropTypes.string,
    short: PropTypes.bool,
    isOpacity: PropTypes.bool
  };
  ListItemIcon.defaultProps = {
    pos: 'start',  // 'start'/'end' - потом может и 'center'
    short: false,
    isOpacity: false
  };




export const ListItemText = styled.div`
  flex: 3; /* 3 - чтобы рядом можно любую поставить (больше или меньше) */
  line-height: 1.25;
  ${fonts.body1}
  text-align: ${props => props.pos};
`;
  
  ListItemText.propTypes = {
    pos: PropTypes.string,
    /* children: PropTypes.string */
  };
  ListItemText.defaultProps = {
    pos: 'left'    // 'left'/'center'/'right'       
  };







