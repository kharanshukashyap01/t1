import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, LinearProgress, Box } from '@mui/material';

const data = [
    {
        jobName: 'CRM Database',
        startTime: '16 May 2024, 4:00 PM',
        process: 80,
        result: 'Open',
    },
    {
        jobName: 'Alpha Database',
        startTime: '16 May 2024, 4:03 PM',
        process: 100,
        result: 'Completed',
    },
    {
        jobName: 'LLM Database',
        startTime: '16 May 2024, 4:05 PM',
        process: 40,
        result: 'Failed',
    },
];

const ProcessBar = ({ value }) => (
    <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" value={value} />
        </Box>
        <Box minWidth={35}>
            <p>{`${value}%`}</p>
        </Box>
    </Box>
);

function JobStatus() {
    return (
        <>
            <h1 >
            Job Status
        </h1>
        <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Job Name</TableCell>
                            <TableCell>Start Time</TableCell>
                            <TableCell>Process</TableCell>
                            <TableCell>Result</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.jobName}</TableCell>
                                <TableCell>{row.startTime}</TableCell>
                                <TableCell>
                                    <ProcessBar value={row.process} />
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color={row.result === 'Open'
                                            ? 'primary'
                                            : row.result === 'Completed'
                                                ? 'success'
                                                : 'error'}
                                    >
                                        {row.result}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer></>
    );
}

export default JobStatus;
