import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.container}>
      <nav className={css.navigation}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/content">Content</NavLink>
      </nav>
    </header>
  );
};

export default Header;

/* <header class="header">
            <div class="container">
                <div class="wrapper">
                    <div class="header__logo">
                        <img src="./img/logo.jpg" alt="DM-logo" class="logo">
                    </div>
                    <div class="header__welder">
                        <img src="./img/welder.png" alt="Welder" class="welder">
                    </div>
                    <div class="header__contacts">
                        <div class="header__tel">
                            <p>Call Us Today!</p>
                            <a href="tel:7017424440" class="header__phone-call">701-742-4442</a>
                        </div>
                    </div>
                </div>
            </div>
        </header> */
