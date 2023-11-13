import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
 
   
  div:nth-of-type(1) {
    width: 100%;
    display: block;
    text-align: center;
  }
  div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    margin-left: -18rem;
    margin-right: 2rem;
  }
  img {
    max-height: 15rem;
    min-height: 5rem;
    max-width: 60%;
    height: auto;
  }
 
`;