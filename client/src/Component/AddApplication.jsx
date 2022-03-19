import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addApplication } from '../Api/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    CompanyName: '',
    AppliedDate: '',
    ApplicationStatus: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddApplication = () => {
    const [application, setApplication] = useState(initialValue);
    const { CompanyName, AppliedDate, ApplicationStatus } = application;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setApplication({...application, [e.target.name]: e.target.value})
    }

    const addApplicationDetails = async() => {
        await addApplication(application);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Company Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='CompanyName' value={CompanyName} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Applied Date</InputLabel>
                <Input type='Date' onChange={(e) => onValueChange(e)} name='AppliedDate' value={AppliedDate} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Application Status</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ApplicationStatus' value={ApplicationStatus} id="my-input"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addApplicationDetails()}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddApplication;