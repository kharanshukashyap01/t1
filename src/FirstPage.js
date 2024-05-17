import HorizontalLinearStepper from "./HorizontalLinearStepper";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import databaseImage from './Database.jpg'

export default function FirstPage() {
    return (

        <div style={{ margin: '0 auto', textAlign: 'center' }}>
                <>
                <h2>Select a Data Source</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>
                        <img
                            src="./snowflake.png"
                            alt="snowflake"
                            style={{ width: '100px', cursor: 'pointer' }}
                            onClick={() => console.log('Database clicked')} // Handle click event here
                        />
                        <span style={{ marginTop: '5px' }}>Snowflake</span>
                        </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>
                        <img
                            src='./databrick.png'
                            alt="Database"
                            style={{ width: '100px', cursor: 'pointer' }}
                            onClick={() => console.log('Database clicked')} // Handle click event here
                        />
                        <span style={{ marginTop: '5px' }}>Databricks</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>
                        <img
                            src='./bigquery.png'
                            alt="Bigquery"
                            style={{ width: '100px', cursor: 'pointer' }}
                            onClick={() => console.log('Database clicked')} // Handle click event here
                        />
                        <span style={{ marginTop: '5px' }}>Bigquery</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>
                        <img
                            src='./postgres.png'
                            alt="Postgres"
                            style={{ width: '130px',height: '100px', cursor: 'pointer' }}
                            onClick={() => console.log('Database clicked')} // Handle click event here
                        />
                        <span style={{ marginTop: '5px' }}>Postgres</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>
                        <img
                            src='./redshift.png'
                            alt="Redshift"
                            style={{ width: '100px', cursor: 'pointer' }}
                            onClick={() => console.log('Database clicked')} // Handle click event here
                        />
                        <span style={{ marginTop: '5px' }}>Redshift</span>
                    </div>
                
                    </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>
                        <img
                            src='./aws s3.png'
                            alt="AWS S3"
                            style={{ width: '100px', height: '100', cursor: 'pointer' }}
                            onClick={() => console.log('Database clicked')} // Handle click event here
                        />
                        <span style={{ marginTop: '5px' }}>AWS S3</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>
                        <img
                            src='salesforce.png'
                            alt="Salesforce"
                            style={{ width: '130px', height: '70px', cursor: 'pointer' }}
                            onClick={() => console.log('Database clicked')} // Handle click event here
                        />
                        <span style={{ marginTop: '5px' }}>Salesforce</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>
                        <img
                            src='excel.png'
                            alt="Excel"
                            style={{ width: '100px', cursor: 'pointer' }}
                            onClick={() => console.log('Database clicked')} // Handle click event here
                        />
                        <span style={{ marginTop: '5px' }}>Excel</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>
                        <img
                            src='./dataBase.png'
                            alt="Database"
                            style={{ width: '100px',height:'100', cursor: 'pointer' }}
                            onClick={() => console.log('Database clicked')} // Handle click event here
                        />
                        <span style={{ marginTop: '5px' }}>Database</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>
                        <img
                            src='datacloud.png'
                            alt="cloudata"
                            style={{ width: '100px', cursor: 'pointer' }}
                            onClick={() => console.log('Database clicked')} // Handle click event here
                        />
                        <span style={{ marginTop: '5px' }}>cloudata</span>
                    </div>


                </div>    


                </>
        </div>

    );
}