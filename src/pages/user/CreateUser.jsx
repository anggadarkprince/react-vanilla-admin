import React from 'react'
import './CreateUser.css'
import PageTitle from "../../components/pageTitle/PageTitle";

export default function CreateUser() {
    return (
        <>
            <PageTitle
                title="Create User"
                subtitle="Create new user account"/>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="john.smith"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="John Smith"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="john@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="password"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" placeholder="+1 123 456 78"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="New York | USA"/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male"/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other"/>
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="active">Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div style={{flexBasis: "100%"}}>
                    <button className="newUserButton">Create</button>
                </div>
            </form>
        </>
    )
}