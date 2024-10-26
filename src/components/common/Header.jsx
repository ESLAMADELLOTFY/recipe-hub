import React, {useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "../data/Item";
import {useSelector } from "react-redux";

export default function Header() {
  const { totalItems } = useSelector((state) => state.cart);
  console.log(totalItems);
  

  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container-fluid nav-bar sticky-top">
        <div className="container">
          <nav className="navbar navbar-light navbar-expand-lg py-4">
            <Link to="/" className="navbar-brand">
              <h1 className="text-primary fw-bold mb-0">
              Flavor<span className="text-dark">Palate</span>
              </h1>
            </Link>
            <button
              onClick={() => setShow(!show)}
              className="navbar-toggler py-2 px-3"
              type="button"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div
              className={
                show ? "navbar-collapse show" : "navbar-collapse collapse"
              }
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-auto">
                {navList.map((nav, index) => (
                  <div key={index}>
                    <Link to={nav.path} className="nav-item nav-link" onClick={() => setShow(!show)}>
                      {nav.text}
                    </Link>
                  </div>
                ))}
              </div>
              <button className="btn-search btn btn-primary btn-md-square rounded-circle d-none d-lg-inline-flex">
                <i className="fas fa-search"></i>
              </button>
            </div>
              <Link
                to="/cart"
                className="btn-cart btn btn-primary btn-md-square ms-4 rounded-circle  "
              >
                <i className="fas fa-shopping-cart"></i>
                <span className="btn-sm rounded-circle btn-danger">
                  {totalItems} 
                </span>
              </Link>
          </nav>
        </div>
      </div>
     
    </>
  );
}