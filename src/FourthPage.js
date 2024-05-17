
import databaseImage from './JobStatuss.png'

export default function JobStatus(){
    return(

        <div style={{ margin: '0 auto', textAlign: 'center' }}>
                <>
                <h2>Job Status</h2>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>
                        <img
                            src={databaseImage}
                            alt="Database"
                            style={{  cursor: 'pointer' }}
    
                        />
                      
                    </div>
                </div>
            </>
        </div>
    );

}
