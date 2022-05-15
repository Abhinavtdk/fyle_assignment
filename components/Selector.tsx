import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface SelectorProps {
    perPage: number
    setPerPage: Dispatch<SetStateAction<number>>
    page: number
    numberOfRepos: number
    setPage: Dispatch<SetStateAction<number>>
}

const Selector = (props: SelectorProps) => {

    const perPage = props.perPage
    const setPerPage = props.setPerPage
    const setPage = props.setPage
    const numberOfRepos = props.numberOfRepos
    const page = props.page

    const handleChange = (event) => {
        if (page > Math.ceil(numberOfRepos / event.target.value)) {
            setPage(Math.ceil(numberOfRepos / event.target.value))
        }
        setPerPage(event.target.value)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px"
        }}>
            <FormControl sx={{
                width: "40%"
            }}>
                <InputLabel id="demo-simple-select-label">Reops Per Page</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={perPage}
                    label="Repos Per Page"
                    onChange={handleChange}
                >
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default Selector