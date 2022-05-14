import Head from 'next/head'
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
import styles from '../styles/[username].module.css'
import { Avatar } from '@mui/material';
import { UserInfo } from '../interfaces/UserInfo';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import TwitterIcon from '@mui/icons-material/Twitter';
import PeopleIcon from '@mui/icons-material/People';
import UserInfoComponent from '../components/repositories/UserInfoComponent';
import RepositoriesComponent from '../components/repositories/RepositoriesComponent';
import { Repository } from '../interfaces/Repository';

const Repositories = () => {

    let userinfo: UserInfo = null
    let repositoriesVal: Repository[] = []
    const router = useRouter()
    const { username } = router.query
    const [userInfo, setUserInfo] = useState(userinfo)
    const [repositories, setrepositories] = useState(repositoriesVal)

    useEffect(() => {
        if (username) {
            axios.get('https://api.github.com/users/' + username)
                .then((result) => {
                    console.log(result.data)
                    let userinfo: UserInfo = result.data
                    setUserInfo(userinfo)
                })
                .catch((error) => {
                    if (error.response) {
                        toast.error("Error in reading")
                    }
                })

            axios.get('https://api.github.com/users/' + username + '/repos')
                .then((result) => {
                    console.log(result.data)
                    setrepositories(result.data)
                })
                .catch((error) => {
                    if (error.response) {
                        toast.error("Error in reading")
                    }
                })
        }
    }, [username])


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
                    <RepositoriesComponent repositories={repositories} />
                </div>

                : null}

        </div>
    )
}

interface UserInfoComponentProps {
    userInfo: UserInfo,
    username: String | String[]
}



export default Repositories