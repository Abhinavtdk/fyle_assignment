import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Repository } from "../../interfaces/Repository"
import RepositoryComponent from "./Repository"
import Grid from '@mui/material/Grid';
import BottomPagination from "../Pagination";
import Selector from "../Selector";

interface RepositoriesComponentProps {
    repositories: Repository[]
    page: number
    numberOfRepos: number
    setPage: Dispatch<SetStateAction<number>>
    numberOfReposPerPage: number
    setNumberOfReposPerPage: Dispatch<SetStateAction<number>>
}

const RepositoriesComponent = (props: RepositoriesComponentProps) => {

    const [repositories, setRepositories] = useState([])
    const [page, setPage] = useState(props.page)
    const [perPage, setPerPage] = useState(props.numberOfReposPerPage)
    const numberOfRepos = props.numberOfRepos
    const numberOfPages = Math.ceil(numberOfRepos / perPage)
    const setPageAtPagination = props.setPage
    const setNumberOfReposPerPage = props.setNumberOfReposPerPage

    useEffect(() => {
        console.log(props.repositories)
        setRepositories([])
    }, [props.repositories])

    useEffect(() => {
        setRepositories(props.repositories)
    }, [repositories])


    useEffect(() => {
        setPage(props.page)
        setPerPage(props.numberOfReposPerPage)
    }, [props.page, props.numberOfReposPerPage])



    return (
        <div style={{
            marginTop: "20px",
            maxWidth: "1000px",
        }}>
            <Grid container direction={"row"} alignItems={"center"}>
                {repositories ? repositories.map((repo, key) => (
                    <Grid item key={key} md={6} xs={12} sm={6}>
                        <RepositoryComponent repository={repo} />
                    </Grid>
                )) : null}
            </Grid>
            {repositories.length > 0 ?
                <div>
                    <BottomPagination page={page} setPage={setPageAtPagination} count={numberOfPages} />
                    <Selector perPage={perPage}
                        setPerPage={setNumberOfReposPerPage}
                        page={page}
                        setPage={setPageAtPagination}
                        numberOfRepos={numberOfRepos} />
                </div>
                :
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px"
                }}>
                    No Repositories
                </div>}
        </div>
    )
}

export default RepositoriesComponent