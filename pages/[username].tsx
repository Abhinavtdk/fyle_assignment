import { useRouter } from "next/router"

const Repositories = () => {

    const router = useRouter()
    const { username } = router.query

    return (
        <div>
            {username}
        </div>
    )
}

export default Repositories