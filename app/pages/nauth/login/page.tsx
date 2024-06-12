import React from "react";

function Login(){
    return(
        <div className="container">
            <h1>Login page</h1>
            <form className="row g-3">
                <div className="col-auto">
                    <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                    <input type="text" className="form-control" id="staticEmail2" placeholder="email@example.com" />
                </div>
                <div className="col-auto">
                    <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                    <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;