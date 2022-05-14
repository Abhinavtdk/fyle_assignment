import { useState } from "react"
import { Repository } from "../../interfaces/Repository"
import RepositoryComponent from "./Repository"

interface RepositoriesComponentProps {
    repositories: Repository[]
}

const RepositoriesComponent = (props: RepositoriesComponentProps) => {

    const [repositories, setRepositories] = useState(props.repositories)

    return (
        <div>
            {repositories ? repositories.map((repo, key) => (
                <RepositoryComponent key={key} repository={repo} />
            )) : null}
        </div>
    )
}

export default RepositoriesComponent