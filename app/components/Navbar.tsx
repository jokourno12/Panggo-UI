import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Panggo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link legacyBehavior href="/pages/nauth/about">
                  <a className="nav-link active" aria-current="page">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/pages/nauth/login">
                  <a className="nav-link">Login</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/pages/nauth/register">
                  <a className="nav-link">Register</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/pages/nauth/collab">
                  <a className="nav-link disabled" aria-disabled="true">Collaborate</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;