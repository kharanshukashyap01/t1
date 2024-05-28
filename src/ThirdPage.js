import React, { useState, useEffect } from "react";

function ThirdPage() {
    const [selectedValues, setSelectedValues] = useState([]);
    const [databases, setDatabases] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the database names from the API
        fetch("https://993a1f8e-0871-4eba-b614-e2c3b490b2ed.mock.pstmn.io/databases") // Replace with your actual API endpoint
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                if (data && Array.isArray(data.databases)) {
                    setDatabases(data.databases);
                } else {
                    throw new Error("Invalid data format");
                }
            })
            .catch((error) => {
                console.error("Error fetching databases:", error);
                setError(error.message);
            });
    }, []);

    const handleCheckboxChange = (value) => {
        setSelectedValues((prevSelectedValues) =>
            prevSelectedValues.includes(value)
                ? prevSelectedValues.filter((item) => item !== value)
                : [...prevSelectedValues, value]
        );
    };

    const handleSubmit = () => {
        if (selectedValues.length > 0) {
            console.log("Selected databases:", selectedValues);
            // Proceed to the next step with the selected databases
            // For example, navigate to another page or perform an action
        } else {
            alert("Please select at least one database.");
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
            <h1 style={styles.heading}>Select the database</h1>
            <div style={styles.container}>
                <div style={styles.checkboxGroup}>
                    {error ? (
                        <p>Error loading databases: {error}</p>
                    ) : databases.length > 0 ? (
                        databases.map((database, index) => (
                            <div key={index} style={styles.checkbox}>
                                <input
                                    type="checkbox"
                                    id={`database${index}`}
                                    value={database}
                                    checked={selectedValues.includes(database)}
                                    onChange={() => handleCheckboxChange(database)}
                                />
                                <label htmlFor={`database${index}`} style={styles.checkboxLabel}>
                                    {database}
                                </label>
                            </div>
                        ))
                    ) : (
                        <p>Loading databases...</p>
                    )}
                    <button style={styles.submitButton} onClick={handleSubmit}>
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ThirdPage;
