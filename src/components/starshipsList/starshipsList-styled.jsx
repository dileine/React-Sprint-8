import styled from "styled-components";

export const Container = styled.div`
  width: 70rem;
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  color:  ${({ theme }) => theme.colors.font};
  ul {
    height: 72rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    div {
      margin: 0.8rem;
      padding: 1.2rem 1.5rem;
      background-color: ${({ theme }) => theme.colors.background};
      li:nth-child(1) {
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        font-size: 1.3rem;
      }
    }
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  button {
    width: 10rem;
    background-color:  ${({ theme }) => theme.colors.background};
    padding: 0.7rem;
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