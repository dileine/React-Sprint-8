import styled from "styled-components";

export const Container = styled.div`
	margin: 6rem 3rem;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4rem;

	.container-img-starship {
		width: 100%;
		border-bottom: 0.3rem solid ${({ theme }) => theme.colors.border};
		position: relative;

		.img-starship {
			width: 100%;
			max-height: 40rem;
			object-fit: fill;
		}

		.message {
			font-size: 1.3rem;
			font-weight: 600;
			text-transform: uppercase;
			text-align: center;
			position: absolute;
			bottom: 2.5rem;
			right: 3rem;
		}
	}

	.list-details-starship {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		font-size: 1.4rem;

		.name-starship {
			color:${({ theme }) => theme.colors.font};
			margin-left: 1.5rem;
			font-size: 1.8rem;
			font-weight: 600;
			text-transform: uppercase;
		}

		.block-list-details-starship {
			width: 100%;
			height: 20rem;
			background-color: ${({ theme }) => theme.colors.backgroundText};
			border-radius: 2rem;
			padding: 2rem;
			padding-bottom: 0.25rem;
			display: flex;
			flex-flow: column wrap;
			gap: 2rem 4rem;

			li {
				list-style: none;
				width: calc(50% - 2rem);
				display: flex;
				justify-content: space-between;

				span:nth-child(1) {
					flex: 1;
					font-size: 1.25rem;
					font-weight: 600;
				}

				span:nth-child(2) {
					flex: 2;
					text-align: right;
				}
			}
		}
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
		border-color: ${({ theme }) => theme.colors.borderButton};
	}

	
`;