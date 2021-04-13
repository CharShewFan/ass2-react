import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'

const useStyle = makeStyles({
});

export default function QueryBar(){
    const classes = useStyle();

return (
    <Container>
    <form  className={classes.form}>

        <TextField id="queryString" label="string query" />     
        <TextField id="categoryId1" label="categoryId1" />
        <TextField id="categoryId2" label="categoryId2" />
        <TextField id="count" label="count query" />

    </form>
    </Container>
)}
