import { Repository } from "../../interfaces/Repository"

interface RepositoryProps {
    repository: Repository
}

const RepositoryComponent = (props: RepositoryProps) => {

    const repository = props.repository

    return (
        <div>
            {repository ? repository.name : null}
        </div>
    )
}

export default RepositoryComponent