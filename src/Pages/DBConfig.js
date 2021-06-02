import { React, useState, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core'
import './dbConfig.css'
import axios from 'axios'

const DBConfig = () => {

    const [dbName, setDbName] = useState("")

    const connectDB = () => {
        axios.post('http://localhost:8080/connect', {
            ip: '127.0.0.1',
            dbName: dbName
        }).then((res) =>
            axios.post('http://localhost:8080/tables', {
                dbName: dbName
            }).then((res) => { console.log(res) })
        )
    }

    return (
        <div id='db-config'>
            <TextField id="outlined-basic" label="DB Name" variant="outlined" value={dbName} onChange={(e) => setDbName(e.target.value)} />
            <Button variant="contained" color="primary" onClick={connectDB}>התחבר</Button>
            {}
        </div>
    )
}

export default DBConfig