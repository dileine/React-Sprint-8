import styled from "styled-components";

export const Container = styled.div`
margin: 5rem auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	background-color: ${({ theme }) => theme.colors.background};
	margin: 0 3rem;
	padding: 4rem 3.25rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

		h1 {
			color: ${({ theme }) => theme.colors.font};
			font-size: 2.25rem;
			font-weight: bold;
			text-transform: uppercase;
			text-align: center;
			letter-spacing: 0.25rem;
		}
         img {
			border: none;	
			border-radius: .75rem;
			margin: 0 1.5rem;
			padding: 0;
			max-width: 100%;
			object-fit: cover;
			
         }
        button {
            width: 12rem;
            background-color: ${({ theme }) => theme.colors.background};
            padding: 1rem;
            font-size: 1.3rem;
            color: ${({ theme }) => theme.colors.font};
            border: 0.1rem solid transparent;
            border-radius: 0.5rem;
            text-transform: uppercase;
            cursor: pointer;
        }
    
        button:hover {
            border-color: ${({ theme }) => theme.colors.border};
        }`;