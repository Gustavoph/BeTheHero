import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: 112rem;
`

export const Content = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  img:first-child {
    margin-bottom: 10rem;
  }

  section {
    width: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  form {
    height: 100%;
    width: 100%;
    
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 3.6rem;
      font-weight: medium;
      margin-bottom: 3.2rem;
    }

    a {
      display: flex;
      align-items: center;
      background-color: transparent;
      margin-top: 4rem;
      
      svg {
        color: var(--red);
        font-size: 3rem;
        margin-right: 1.9rem;
      }

      font-size: 1.8rem;
      font-weight: bold;
      color: var(--text-secondary);      
    }
  }
`

export const ButtonCreateAccount = styled.button`
  
`