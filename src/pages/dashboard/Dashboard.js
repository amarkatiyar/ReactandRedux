import React from 'react';
import { Link } from 'react-router-dom';
function Dashboard () {
    return(
        <div className="container">
           <div style={{textAlign:'right'}}>
           <Link to="/login">
                                    <span style={{color:'blue',cursor:'pointer'}}  >logout</span>
                                    </Link>
           </div>
        </div>
    )
}

export default Dashboard;