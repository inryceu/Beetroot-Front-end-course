import React from "react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo" aria-hidden="true"></div>
      <h1 className="site-title">Blog name</h1>
      <nav className="site-nav" aria-label="Primary">
        <ul className="nav-list">
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item} className="nav-item"></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
