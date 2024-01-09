import styled from 'styled-components';

export const HeaderStyled = styled.div`
  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem;
    height: 5vh;
    background-color: #fddd;

    .topbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      width: 100%;
      margin: 1rem 0;

      .title {
        font-size: 1rem;
        color: #000;
      }

      .mainIcon {
        width: 1.2rem;
        height: 1.2rem;
      }

      .loginIcon {
        font-size: 1.2rem;
      }
    }
  }
`;
