import { useState } from "react"
import { Repository } from "../../interfaces/Repository"
import styles from '../../styles/repository.module.css'

interface RepositoryProps {
    repository: Repository
}

const RepositoryComponent = (props: RepositoryProps) => {

    const [repository, setrepository] = useState(props.repository)

    return (
        <div className={styles.repository}>
            <div className={styles.name}>
                <a href={repository.html_url} target="_blank" rel="noopener noreferrer">{repository ? repository.name : null}</a>
            </div>
            <div className={styles.description}>
                {repository ? repository.description : null}
            </div>
            <div className={styles.tags}>
                {repository ? repository.topics ? repository.topics.map((topic, key) => (
                    <div key={key} className={styles.tag}>
                        {topic}
                    </div>
                )) : null : null}
            </div>
        </div>
    )
}

export default RepositoryComponent