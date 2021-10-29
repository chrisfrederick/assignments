import React, { useState} from 'react'


const HookForm = (props)=>{
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPW, setConfirmPW] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] =useState(false);
    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPWError, setConfirmPWError] = useState("");

    const createUser = (e)=>{
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirmPW};
        setHasBeenSubmitted(true);
        console.log("Welcome ", newUser)
    }

    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFnameError("First Name is required!");
        } else if(e.target.value.length < 3) {
            setFnameError("First Name must be 3 characters or longer!");
        }
    }

    const handleLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setLnameError("Last Name is required!");
        } else if(e.target.value.length < 3) {
            setLnameError("Last Name must be 3 characters or longer!");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Email must be 3 characters or longer!");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("A password is required!");
        } else if(e.target.value.length < 3) {
            setPasswordError("Password must be 3 characters or longer!");
        }
    }

    const handlePasswordConfirm = (e) => {
        setConfirmPW(e.target.value);
        if(e.target.value.length != password) {
            setConfirmPWError("Passwords do not match!");
        }
    }


    return(
        <div>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={handleFirstName}/>
                    {
                    fnameError ?
                    <p style={{color:'red'}}>{ fnameError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={handleLastName}/>
                    {
                    lnameError ?
                    <p style={{color:'red'}}>{ lnameError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" onChange={handleEmail}/>
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" onChange={handlePassword}/>
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="text" onChange={handlePasswordConfirm}/>
                    {
                    confirmPWError ?
                    <p style={{color:'red'}}>{ confirmPWError }</p> :
                    ''
                }
                </div>
                <input type="submit" value="Create User"/>
            </form>
            <div>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPW}</p>
            </div>
        </div>
    )
}
export default HookForm