import styled from 'styled-components';

export const HomeStyled = styled.div`
  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem;
    min-height: 100vh;
    max-width: 640px;
    background-color: #fff;

    .imgBox {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.8rem;

      .mainImg {
        width: 100%;
        height: auto;
      }
    }

    .powderFilterBox {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      height: auto;
      margin-bottom: 1.8rem;

      .powderFilters {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.6rem;
      }
    }

    .reviewTitleBox {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }

    .reviewTitle {
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
`;
