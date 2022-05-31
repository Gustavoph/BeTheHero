import styled from 'styled-components';

export const Input = styled.input`
  height: 6rem;
  width: 35.1rem;
  border-radius: .8rem;
  margin-bottom: 1.6rem;

  outline: none;
  font-size: 1.8rem;
  padding: 1.8rem 2.4rem;
  border: 1px solid var(--gray);

  &::placeholder {
    color: var(--gray-300);
  }
`;

export const Button = styled.button`
  color: var(--white);
  border-radius: .8rem;
  background-color: var(--red);

  transition: 500ms filter;

  &:hover {
    filter: brightness(0.8);
  }
`

