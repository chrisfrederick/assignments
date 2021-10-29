import React, { useState} from 'react'


const HookForm = (props)=>{
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPW, setConfirmPW] = useState("")

    const createUser = (e)=>{
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirmPW};
        console.log("Welcome ", newUser)
    }


    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={ (e) => setFirstname(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={ (e) => setLastname(e.target.value)}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="text" onChange={ (e) => setConfirmPW(e.target.value)}/>
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