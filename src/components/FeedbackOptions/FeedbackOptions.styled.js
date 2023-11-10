import styled from 'styled-components';

export const ButtonsWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 36px;
`;

export const Button = styled.button`
  padding: 14px 30px;
  background-color: transparent;
  border-radius: 30px;
  border: 2px solid ${({ name }) => chooseColorByOption(name)};

  font-size: 16px;
  font-weight: 600;
  color: #3e3e3e;

  &:hover {
    background-color: ${({ name }) => chooseColorByOption(name)};
    border-color: #3e3e3e;
  }
`;

function chooseColorByOption(color) {
  switch (color) {
    case 'good':
      return '#00D930';
    case 'neutral':
      return '#FFE661';
    case 'bad':
      return '#DD2800';
    default:
      return '#DD2800';
  }
}
