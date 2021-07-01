import styled from 'styled-components';

import { elevation, palette, wnd } from './commons/basics';
import animation from './commons/animations';

const Page = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Page;


export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const AppBar = styled.div`
  ${elevation[4]}
  ${palette.primary}
  flex: 0;
  height: 48px; /* может надо будет сделать 56px */
  width: 100%;  /* может не надо */
`;


export const Modal = styled.div`
  ${wnd.modal}
  ${wnd.modalFull}
  ${props => props.transp ? 
    'background-color: rgba(255, 255, 255, 0.1)' : animation.blackout
  }
`;