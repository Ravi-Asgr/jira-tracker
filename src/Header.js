import React from "react";

const Header = () => {
    return(
        <header className="header" data-header>
        <div className="container">
    
          <h1>
            <a href="#" className="logo">Dashboard</a>
          </h1>
    
          <button className="menu-toggle-btn icon-box" data-menu-toggle-btn aria-label="Toggle Menu">
            <span className="material-symbols-rounded  icon">menu</span>
          </button>
    
          <nav className="navbar">
            <div className="container">
    
              <ul className="navbar-list">
    
                <li>
                  <a href="#" className="navbar-link active icon-box">
                    <span className="material-symbols-rounded  icon">grid_view</span>
    
                    <span>Home</span>
                  </a>
                </li>
    
                <li>
                  <a href="#" className="navbar-link icon-box">
                    <span className="material-symbols-rounded  icon">folder</span>
    
                    <span>Projects</span>
                  </a>
                </li>
    
                <li>
                  <a href="#" className="navbar-link icon-box">
                    <span className="material-symbols-rounded  icon">list</span>
    
                    <span>Tasks</span>
                  </a>
                </li>
    
                <li>
                  <a href="#" className="navbar-link icon-box">
                    <span className="material-symbols-rounded  icon">bar_chart</span>
    
                    <span>Reports</span>
                  </a>
                </li>
    
                <li>
                  <a href="#" className="navbar-link icon-box">
                    <span className="material-symbols-rounded  icon">settings</span>
    
                    <span>Settings</span>
                  </a>
                </li>
    
              </ul>
    
              <ul className="user-action-list">
    
                <li>
                  <a href="#" className="notification icon-box">
                    <span className="material-symbols-rounded  icon">notifications</span>
                  </a>
                </li>
    
                <li>
                  <a href="#" className="header-profile">
    
                    <figure className="profile-avatar">
                      <img src="./assets/images/avatar-1.jpg" alt="Elizabeth Foster" width="32" height="32" />
                    </figure>
    
                    <div>
                      <p className="profile-title">Elizabeth F</p>
    
                      <p className="profile-subtitle">Admin</p>
                    </div>
    
                  </a>
                </li>
    
              </ul>
    
            </div>
          </nav>
    
        </div>
      </header>
    );
}

export default Header;