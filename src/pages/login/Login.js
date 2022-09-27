import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Login (){
return(
    <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="card">
                        <h4 className="" style={{ textAlign: "center" }}>Login </h4>
                        <form style={{ padding: '10px 10px', display: 'inline-grid' }}>
                            
                            <label>Email Address</label>
                            <input type="email" />
                            <label>Password</label>
                            <input type="password" />
                            <div>
                                <input type="radio" />
                                Remember me
                            </div>

                            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                <Button>Login</Button>
                            </div>

                            <div>
                                <h6>Forgot Password ?
                                    <Link to="/dasboard">
                                    <span style={{color:'blue',cursor:'pointer'}}  >Click here</span>
                                    </Link>
                                </h6>
                            </div>
                           
                        </form>

                    </div>
                </div>
                <div className="col"></div>
                
            </div>
        </div>
)
}

export default Login;