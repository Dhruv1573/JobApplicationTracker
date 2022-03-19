import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getApplications, editApplication } from '../Api/api';

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

const EditApplication = () => {
    const [application, setApplication] = useState(initialValue);
    const { CompanyName, AppliedDate, ApplicationStatus } = application;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadApplicationDetails();
    }, []);

    const loadApplicationDetails = async() => {
        const response = await getApplications(id);
        setApplication(response.data);
    }

    const editApplicationDetails = async() => {
        const response = await editApplication(id, application);
        history.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setApplication({...application, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Company Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='CompanyName' value={CompanyName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Applied Date</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='AppliedDate' value={AppliedDate} id="my-input" aria-describedby="my-helper-date" type='Date'/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Appliccation Status</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='ApplicationStatus' value={ApplicationStatus} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editApplicationDetails()}>Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditApplication;