import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import { logo } from 'image/logo';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <NavLink to="/">
            <div className={css.logo}>
              <img src={logo.mainLogo} alt="Logo" width={'200px'} />
            </div>
          </NavLink>

          <div className={css.welder}>
            <img src={logo.welder} alt="Welder" width={'125px'} />
          </div>
          <div className={css.contacts}>
            <div className={css.headerPhone}>
              <p>Call Us Today!</p>
              <a href="tel:7017424440" className={css.phoneLink}>
                701-742-4442
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

//     <header className={css.container}>
//   <nav className={css.navigation}>
//     <NavLink to="/">Home</NavLink>
//     <NavLink to="/content">Content</NavLink>
//   </nav>
// </header>
