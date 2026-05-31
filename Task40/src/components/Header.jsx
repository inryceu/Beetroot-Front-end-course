import { NavLink } from 'react-router-dom';

export default function Header() {
  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/blog', label: 'Blog' },
    { to: '/news', label: 'News' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <div className="logo" aria-hidden="true"></div>
      <h1 className="site-title">Blog name</h1>
      <nav className="site-nav" aria-label="Primary">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.to} className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link${isActive ? ' is-active' : ''}`
                }
                to={item.to}
                end={item.end}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
