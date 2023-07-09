import { Container } from "./pagination-styled"

const Pagination = ({page, setPage, next}) => {

    return(
        <Container>
            <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                 disabled={page === 1}>
                 &lt;
            </button>
             
            <button onClick={() => { if (next) setPage((prev) => prev + 1); }}
                 disabled={!next}>
                 &gt;
            </button>
        </Container>
    )
}

export default Pagination;