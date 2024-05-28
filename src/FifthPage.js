import React, { useState, useEffect } from "react";
import './FifthPage.css';

function FifthPage() {
    const [selectedTables, setSelectedTables] = useState([]);
    const selectedValues = "crm";
    const [tables, setTables] = useState([]);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [proceedClicked, setProceedClicked] = useState(false);

    useEffect(() => {
        // Fetch the table names from the API
        fetch("https://993a1f8e-0871-4eba-b614-e2c3b490b2ed.mock.pstmn.io/tables/crm") // Replace with your actual API endpoint
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                if (data && Array.isArray(data.tables)) {
                    setTables(data.tables);
                } else {
                    throw new Error("Invalid data format");
                }
            })
            .catch((error) => {
                console.error("Error fetching tables:", error);
                setError(error.message);
            });
    }, []);

    const handleCheckboxChange = (value) => {
        setSelectedTables((prevSelectedTables) =>
            prevSelectedTables.includes(value)
                ? prevSelectedTables.filter((item) => item !== value)
                : [...prevSelectedTables, value]
        );
    };

    const handleSubmit = () => {
        if (selectedTables.length > 0) {
            setProceedClicked(true);
            fetchTableData();
        } else {
            alert("Please select at least one table.");
        }
    };





    const fetchTableData = () => {
        if (selectedValues && selectedTables) {
            fetch('https://993a1f8e-0871-4eba-b614-e2c3b490b2ed.mock.pstmn.io/scan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    include_schema_regex: selectedValues,
                    include_table_regex: selectedTables
                })
            })
                .then(response => response.json())
                .then(setData)
                .catch(console.error);
        }
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
        checkboxGroup: {
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "space-around",
            marginTop: "20px",
            borderRadius: "8px",
            backgroundColor: "white",
            padding: "30px",
            boxShadow: "0px 2px 3.84px rgba(0, 0, 0, 0.25)",
        },
        checkbox: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "10px 0",
        },
        checkboxLabel: {
            marginLeft: "8px",
            fontSize: "17px",
            color: "#333",
        },
        submitButton: {
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
        },
    };

    return (
        <div>
            <h1 style={styles.heading}>Select the tables</h1>
            <div style={styles.container}>
                <div style={styles.checkboxGroup}>
                    {error ? (
                        <p>Error loading tables: {error}</p>
                    ) : tables.length > 0 ? (
                        tables.map((table, index) => (
                            <div key={index} style={styles.checkbox}>
                                <input
                                    type="checkbox"
                                    id={`table${index}`}
                                    value={table}
                                    checked={selectedTables.includes(table)}
                                    onChange={() => handleCheckboxChange(table)}
                                />
                                <label htmlFor={`table${index}`} style={styles.checkboxLabel}>
                                    {table}
                                </label>
                            </div>
                        ))
                    ) : (
                        <p>Loading tables...</p>
                    )}
                    <button style={styles.submitButton} onClick={handleSubmit}>
                        Proceed
                    </button>
                </div>
            </div>
            {proceedClicked && (
                <div>
                    <h1 style={styles.heading}>Data for selected tables</h1>
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>Database</th>
                                <th>Table</th>
                                <th>Field</th>
                                <th>PIILevel</th>
                                <th>Class</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.database}</td>
                                        <td>{item.table}</td>
                                        <td>{item.field}</td>
                                        <td>{item.PIILevel}</td>
                                        <td>{item.Class}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>





                </div>
            )}
        </div>
    );
}

export default FifthPage;
