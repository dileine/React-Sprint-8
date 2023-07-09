import  styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  button {
    width: 6rem;
    background-color:  ${({ theme }) => theme.colors.background};
   
    font-size: 1rem;
    color:  ${({ theme }) => theme.colors.font};
    border: 0.1rem solid transparent;
    border-radius: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  button:hover {
    border-color: white;
  }
  span {
    font-size: 1.5rem;
    width: 1rem;
  }
  
`;