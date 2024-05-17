import React, { useState, useEffect } from "react";

function ThirdPage() {
    const [selectedValue, setSelectedValue] = useState(null);
    const [databases, setDatabases] = useState([]);

    useEffect(() => {
        // Fetch the database names from the API
        fetch("http://65.1.2.39:8000/databases") // Replace with your actual API endpoint
            .then((response) => response.json())
            .then((data) => {
                setDatabases(data);
                setSelectedValue(data[0]); // Optionally select the first database by default
            })
            .catch((error) => console.error("Error fetching databases:", error));
    }, []);

    const handleRadioChange = (value) => {
        setSelectedValue(value);
    };

    const handleSubmit = () => {
        if (selectedValue) {
            console.log("Selected database:", selectedValue);
            // Proceed to the next step with the selected database
            // For example, navigate to another page or perform an action
        } else {
            alert("Please select a database.");
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
        radioGroup: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "20px",
            borderRadius: "8px",
            backgroundColor: "white",
            padding: "30px",
            boxShadow: "0px 2px 3.84px rgba(0, 0, 0, 0.25)",
        },
        radioButton: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "10px 0",
        },
        radioLabel: {
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
                <div style={styles.radioGroup}>
                    {databases.map((database, index) => (
                        <div key={index} style={styles.radioButton}>
                            <input
                                type="radio"
                                id={`database${index}`}
                                value={database}
                                checked={selectedValue === database}
                                onChange={() => handleRadioChange(database)}
                            />
                            <label htmlFor={`database${index}`} style={styles.radioLabel}>
                                {database}
                            </label>
                        </div>
                    ))}
                    <button style={styles.submitButton} onClick={handleSubmit}>
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ThirdPage;
