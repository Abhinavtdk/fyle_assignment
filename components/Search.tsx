import styles from '../styles/search.module.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


export default function Search() {

    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleClick = async () => {

        setLoading(true)
        //Will check if the username is present, if present then route to the repositories page
        //else display an error toast.
        axios.get('https://api.github.com/users/' + username)
            .then((result) => {
                router.push('/' + username)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                if (error.response) {
                    toast.error(error.response.data.message)
                }
            })
    }

    return (
        <div className={styles.container}>
            <ToastContainer />
            <p>Enter the Github Username</p>
            <TextField id="outlined-basic"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                }} />
            <div className={styles.button}>
                <Button variant="contained" className={styles.button}
                    sx={{
                        marginTop: 5,
                        width: "100%"
                    }}
                    onClick={handleClick}
                >{"Find Repositories"}</Button>
            </div>
            <div className={styles.loader}>{loading ? <CircularProgress /> : null}</div>
        </div>
    )
}