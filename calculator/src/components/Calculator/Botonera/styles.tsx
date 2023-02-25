import styled from 'styled-components';

export const BotoneraContainer = styled.div`
  background-color: #00fffc3c;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
`;

export const ButtonsNumberContainer = styled.div`
  background-color: #ffccc2;
  grid-area: 2 / 1 / 5 / 4;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
`;

export const ButtonsSignsContainer = styled.div`
  background-color: #ffc442;
  grid-area: 1 / 1 / 2 / 4;
`;
