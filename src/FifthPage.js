import React, { useState } from "react";

import { styled } from '@mui/system';
import {
    TablePagination,
    tablePaginationClasses as classes,
} from '@mui/base/TablePagination';

function FifthPage() {
    const [
        selectedValue,
        setSelectedValue,
    ] = useState("option1");

    const handleRadioChange = (
        value
    ) => {
        setSelectedValue(value);
    };

    const styles = {
        container: {
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        heading: {
            color: "black",
            textAlign: "center",
        },
        radioGroup: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:
                "space-around",
            marginTop: "20px",
            borderRadius: "8px",
            backgroundColor: "white",
            padding: "30px",
            boxShadow:
                "0px 2px 3.84px rgba(0, 0, 0, 0.25)",
        },
        radioButton: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        radioLabel: {
            marginLeft: "8px",
            fontSize: "17px",
            color: "#333",
        },
    };

    return (
        <div>
            <h1 style={styles.heading}>
                Select the table
            </h1>
            <div
                style={styles.container}
            >
                <div
                    style={
                        styles.radioGroup
                    }
                >
                    <div
                        style={
                            styles.radioButton
                        }
                    >
                        <input
                            type="radio"
                            id="option1"
                            value="option1"
                            checked={
                                selectedValue ===
                                "option1"
                            }
                            onChange={() =>
                                handleRadioChange(
                                    "option1"
                                )
                            }
                        />
                        <label
                            htmlFor="option1"
                            style={
                                styles.radioLabel
                            }
                        >
                            Table 1
                        </label>
                    </div>

                    <div
                        style={
                            styles.radioButton
                        }
                    >
                        <input
                            type="radio"
                            id="option2"
                            value="option2"
                            checked={
                                selectedValue ===
                                "option2"
                            }
                            onChange={() =>
                                handleRadioChange(
                                    "option2"
                                )
                            }
                        />
                        <label
                            htmlFor="option2"
                            style={
                                styles.radioLabel
                            }
                        >
                        Table 2
                        </label>
                    </div>

                    <div
                        style={
                            styles.radioButton
                        }
                    >
                        <input
                            type="radio"
                            id="option3"
                            value="option3"
                            checked={
                                selectedValue ===
                                "option3"
                            }
                            onChange={() =>
                                handleRadioChange(
                                    "option3"
                                )
                            }
                        />
                        <label
                            htmlFor="option3"
                            style={
                                styles.radioLabel
                            }
                        >
                            Table 3
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}



function TableUnstyled() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Root sx={{ maxWidth: '100%', width: 500 }}>
            <table aria-label="custom pagination table">
                <thead>
                    <tr>
                        <th>Dessert</th>
                        <th>Calories</th>
                        <th>Fat</th>
                    </tr>
                </thead>
                <tbody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <tr key={row.name}>
                            <td>{row.name}</td>
                            <td style={{ width: 160 }} align="right">
                                {row.calories}
                            </td>
                            <td style={{ width: 160 }} align="right">
                                {row.fat}
                            </td>
                        </tr>
                    ))}
                    {emptyRows > 0 && (
                        <tr style={{ height: 41 * emptyRows }}>
                            <td colSpan={3} aria-hidden />
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <CustomTablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            slotProps={{
                                select: {
                                    'aria-label': 'rows per page',
                                },
                                actions: {
                                    showFirstButton: true,
                                    showLastButton: true,
                                },
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </tr>
                </tfoot>
            </table>
        </Root>
    );
}

function createData(name, calories, fat) {
    return { name, calories, fat };
}

const rows = [
    createData('Cupcake', 305, 3.7),
    createData('Donut', 452, 25.0),
    createData('Eclair', 262, 16.0),
    createData('Frozen yoghurt', 159, 6.0),
    createData('Gingerbread', 356, 16.0),
    createData('Honeycomb', 408, 3.2),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Jelly Bean', 375, 0.0),
    createData('KitKat', 518, 26.0),
    createData('Lollipop', 392, 0.2),
    createData('Marshmallow', 318, 0),
    createData('Nougat', 360, 19.0),
    createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Root = styled('div')(
    ({ theme }) => `
  table {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  }
  `,
);

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`;

export { FifthPage, TableUnstyled };