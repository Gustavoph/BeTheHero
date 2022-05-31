import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: 112rem;
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;
  border: 1px solid red;

  display: flex;
  align-items: center;
  justify-content: center;

  section {
    height: 57.7rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 1.8rem;
  }
`;