import styled from 'styled-components';

export const PanelContainer = styled.div`
  padding: 8px 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-self: start;

  span {
    font-size: 15px;
    align-self: flex-end;
    font-weight: bold;
  }

  span:last-child {
    font-size: 30px;
  }
`;
