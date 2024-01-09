import styled from 'styled-components';

export const ButtonStyled = styled.button<{
  width?: string;
  height?: string;
  padding?: string;
  background?: string;
  border?: boolean;
}>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '5.635rem')};
  background-color: ${(props) =>
    props.background ? props.background : '#ffffff'};
  border-radius: 0.5rem;
  border: ${(props) => (props.border ? '1px solid #eeeeee' : 'none')};
  display: flex;
  gap: 0.4375rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
  p {
    font-size: 0.75rem;
    color: #757575;
    line-height: 1rem;
  }
  &.choice {
    background-color: rgba(0, 21, 255, 0.1);
    border: 1px solid #0015ff;
    p {
      font-size: 0.75rem;
      color: #000000;
    }
  }
`;
