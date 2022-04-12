import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Dashboard - Brand</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" />
        <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/Contact-Form-Clean.css" />
      </head>
      <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
        /*style="width: 90%;"*/>
        <div className="container-fluid d-flex flex-column p-0">
          <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">
              <span>Cardego<br />Studio<br /></span>
            </div>
          </a>
          <hr className="sidebar-divider my-0" />
          <ul id="accordionSidebar" className="navbar-nav text-light">
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
          </ul>
          <div className="text-center d-non d-md-inline">
            <button id="sidebarToggle" className="btn rounded-circle border-0" type="button"></button>
          </div>
          <input type="text" /*style="width: 160px; margin-bottom: 10px;"*/ />
          <ul className="list-group" /*style="width: 160px;"*/>
            <li className="list-group-item">
              <span>Card 1</span>
            </li>
            <li className="list-group-item">
              <span>Card 2</span>
            </li>
            <li className="list-group-item">
              <span>Card 3</span>
            </li>
          </ul>
        </div>
      </nav>
      <p>Test</p>
    </div>
  );
}

export default App;
