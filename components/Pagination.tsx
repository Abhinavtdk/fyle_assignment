import Pagination from '@mui/material/Pagination';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from '../styles/pagination.module.css'

interface PaginationProps {
    page: number
    setPage: Dispatch<SetStateAction<number>>
    count: number
}

const BottomPagination = (props: PaginationProps) => {

    const count = props.count
    const [page, setPage] = useState(props.page)
    const setPageAtPagination = props.setPage

    useEffect(() => {

        setPage(props.page)

    }, [props.page])


    const handleChange = (event, value) => {
        setPageAtPagination(value)
        setPage(page)
        window.scroll(0, 0)
    }

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <Pagination count={count}
                    color="primary"
                    page={page}
                    onChange={handleChange} />
            </div>
        </div>
    )
}

export default BottomPagination