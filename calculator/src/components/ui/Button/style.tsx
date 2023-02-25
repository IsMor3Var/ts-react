import styled, { css } from 'styled-components';

export const ButtonStyle = styled.div`
  ${({ style }) => css`
    background-color: ${style?.backgroundColor},
    border: ${style?.border},
    border-radius: ${style?.borderRadius},
    height: ${style?.height},
    width: ${style?.width}
  `}
  border: 1px solid black;
  padding: 1rem;
  align-content: center;
`;
