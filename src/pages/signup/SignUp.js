import React,{useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import { fetchDate2,addUser } from '../../redux/apiAction';

function SignUP({
        // posdata2,fetchData2
        adduser
    }) {

    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [password, setPassword] = useState()
    const [checkbox, setCheckbox] = useState(false)
    const [message, setMessage] = useState();
    const [mobile, setmobile] = useState();
    const [iserror, setIserror]  = useState(null)
    const [error, setError] = useState(null);

    // useEffect(()=>{
    //     // fetchData2(),
    //     // adduser()
    // })

    const isValidEmail = (email)=>{
        return /\S+@\S+\.\S+/.test(email);
      }

      const mobileChange = (e) =>{
          if(e.target.value.length>10){
            setIserror('Please enter number only 10 digit')
          }
          else{
            setIserror(null)
          }
          setmobile(e.target.value)
      }

      const emailChange = e => {
        if (!isValidEmail(e.target.value)) {
          setError('Email is invalid');
        } else {
          setError(null);
        }
    
        setMessage(e.target.value);
      };

      const data={
        first_name: firstname,
        last_name: lastname,
        phone: mobile,
        email_address: message,
        password: password
      }

    //   var formdata = new FormData();
    //     formdata.append("password", 'amar');
    //     formdata.append("first_name", 'amr');
    //     formdata.append("last_name", 'katiyar');
    //     formdata.append("phone", '9807242329');
    //     formdata.append("email_address", 'amar@gmail.com');
     
      const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log("formdata",formdata)
        console.log("dataapi",data)
        adduser(data)
    }

   const handleClick = ()=>{
        // console.log("hello")
        
        this.props.history.push('/login')
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <div className="card">
                        <h4 className="" style={{ textAlign: "center" }}>Registration Form </h4>
                        <form style={{ padding: '10px 10px', display: 'inline-grid' }} >
                            <label>First Name</label>
                            <input type="text" 
                            value={firstname}
                            onChange={(e)=>setFirstName(e.target.value)}
                            required/>
                            <label>Last Name</label>
                            <input type="text" 
                            value={lastname}
                            onChange={(e)=>setLastName(e.target.value)}
                            required/>
                            <label>Email Address</label>
                            <input type="email"
                            value={message}
                            onChange={emailChange}
                            required
                             />
                            {error && <p style={{color: 'red'}}>{error}</p>}
                            <label>Password</label>
                            <input type="password" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required/>
                            <label>Mobile Number</label>
                            <input type="number" 
                            onChange={mobileChange}
                            value={mobile}
                            required/>
                            {iserror && <p style={{color: 'red'}}>{iserror}</p>}
                            {/* <div>
                                <input type="checkbox" 
                                value={checkbox}
                                onClick={(e)=>setCheckbox(e.target.value(true))}
                                required/>
                                Please accept T & C
                            </div> */}
                            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                <Button onClick={(e)=>handleSubmit(e)}>Submit</Button>
                            </div>
                            <div>
                                <h6>Login here ?
                                    <Link to="/login">
                                    <span style={{color:'blue',cursor:'pointer'}}  onClick={handleClick} >Click here</span>
                                    </Link>
                                </h6>
                            </div>
                        </form>
                        {/* <p style={{backgroundColor:'blue'}}>dnvkjdj</p>
                            {posdata2 && posdata2.map((item)=><p>{item.title}
                        </p>)} */}
                    </div>
                </div>
                <div className="col"></div>
                
            </div>
        </div>
    );
}

// const mapStateToProps = state =>{
//     return{
//         posdata2: state.apidata2,
//         userobj: state.apiReducer
//     }
// }

// const mapDispatchToProps = dispatch =>{
//     return{
//         // fetchData2:()=>dispatch(fetchData2()),
//         adduser:()=>dispatch(adduser())
//     }
// }

export default connect(null,{addUser})(SignUP);
// export default connect(mapStateToProps,mapDispatchToProps)(SignUP);