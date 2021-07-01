import { keyframes, css } from 'styled-components';


const blackout = keyframes`
  from { background-color: rgba(0, 0, 0, 0); }
  to { background-color: rgba(0, 0, 0, 0.5); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fromLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;
const fromRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;
const fromTop = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;
const fromBottom = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const popDown = keyframes`
  from { opacity: 0.2; height: 0; }
  to { opacity: 1; min-height: 48px; height: auto; }
`;


const animation = {
  blackout: css`animation: ${blackout} 0.4s linear forwards;`,
  fadeIn: css`animation: ${fadeIn} 0.3s ease-in forwards;`,

  fromLeft: css`animation: ${fromLeft} 0.3s ease-in forwards;`,
  fromRight: css`animation: ${fromRight} 0.3s ease-in forwards;`,
  fromTop: css`animation: ${fromTop} 0.3s ease-in forwards;`,
  fromBottom: css`animation: ${fromBottom} 0.3s ease-in forwards;`,

  popDown: css`animation: ${popDown} 0.5s ease-in forwards;`,
}

export default animation;



/* 
const kf = {
  blackout: keyframes`
    from { background-color: rgba(0, 0, 0, 0); }
    to { background-color: rgba(0, 0, 0, 0.5); }
  `,
  fadeIn: keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `,
  fromLeft: keyframes`
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  `,
  fromRight: keyframes`
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  `,
  fromTop: keyframes`
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
  `,
  fromBottom: keyframes`
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  `,
  popDown: keyframes`
    from { opacity: 0.2; height: 0; }
    to { opacity: 1; min-height: 48px; height: auto; }
  `,
};
*/