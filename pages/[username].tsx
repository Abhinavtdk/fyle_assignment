import Head from 'next/head'
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
import styles from '../styles/[username].module.css'
import { UserInfo } from '../interfaces/UserInfo';
import UserInfoComponent from '../components/repositories/UserInfoComponent';
import RepositoriesComponent from '../components/repositories/RepositoriesComponent';
import { Repository } from '../interfaces/Repository';
import { CircularProgress } from '@mui/material';

const Repositories = () => {

    let userinfo: UserInfo = null
    let repositoriesVal: Repository[] = []
    const router = useRouter()
    const { username } = router.query
    const [userInfo, setUserInfo] = useState(userinfo)
    const [repositories, setrepositories] = useState(repositoriesVal)
    const [page, setPage] = useState(1)
    const [numberOfReposPerPage, setPerPage] = useState(6)

    useEffect(() => {
        if (username) {
            axios.get('https://api.github.com/users/' + username)
                .then((result) => {
                    let userinfo: UserInfo = result.data
                    setUserInfo(userinfo)
                })
                .catch((error) => {
                    if (error.response) {
                        // toast.error("Error in reading")
                        router.push('/')
                    }
                })
            getRepositoriesUser()
        }
    }, [username])

    useEffect(() => {

        if (username)
            getRepositoriesUser()

    }, [page, numberOfReposPerPage])

    const getRepositoriesUser = async () => {

        axios.get('https://api.github.com/users/' + username + '/repos?per_page=' + numberOfReposPerPage + '&page=' + page)
            .then((result) => {
                // console.log(result.data)
                setrepositories(result.data)
            })
            .catch((error) => {
                if (error.response) {
                    // toast.error("Error in reading")
                }
            })
    }


    return (
        <div className={styles.container}>
            <Head>
                <title>{username}</title>
                <meta name="repositories" content="all repositories of user" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ToastContainer />
            {userInfo ?
                <div className={styles.body}>
                    <UserInfoComponent userInfo={userInfo} username={username} />
                    <RepositoriesComponent
                        repositories={repositories}
                        page={page}
                        setPage={setPage}
                        numberOfRepos={userInfo.public_repos}
                        numberOfReposPerPage={numberOfReposPerPage}
                        setNumberOfReposPerPage={setPerPage}
                    />
                </div>

                : <div style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <CircularProgress />
                </div>}

        </div>
    )
}


export default Repositories