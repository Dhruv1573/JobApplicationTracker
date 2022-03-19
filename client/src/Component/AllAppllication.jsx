import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getApplications, deleteApplication } from '../Api/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllApplications = () => {
    const [applications, setApplicationss] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllApplications();
    }, []);

    const deleteApplicationData = async (id) => {
        await deleteApplication(id);
        getAllApplications();
    }

    const getAllApplications = async () => {
        let response = await getApplications();
        setApplicationss(response.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>CompanyName</TableCell>
                    <TableCell>Applied Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {applications.map((application) => (
                    <TableRow className={classes.row} key={application.id}>
                        <TableCell>{application._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{application.CompanyName}</TableCell>
                        <TableCell>{application.AppliedDate}</TableCell>
                        <TableCell>{application.ApplicationStatus}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${application._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteApplicationData(application._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllApplications;