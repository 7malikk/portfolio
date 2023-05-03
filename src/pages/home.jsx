import { Outlet, NavLink } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <NavLink
              to={'/'}
              className={({ isActive, isPending }) =>
                isActive ? 'active' : isPending ? 'pending' : ''
              }>
              Work
            </NavLink>
            <NavLink
              to={'unique'}
              className={({ isActive, isPending }) =>
                isActive ? 'active' : isPending ? 'pending' : ''
              }>
              Unique
            </NavLink>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/olatunbosun-olaosebikan-331a291ab/"
                rel="noreferrer">
                {' '}
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
