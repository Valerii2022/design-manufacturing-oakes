import { NavLink, useNavigate } from 'react-router-dom';
import css from './Header.module.css';
import { logo } from 'image/logo';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/store';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenuBtnClick = () => {
    setMenu(!menu);
  };

  const handleProductsLinksClick = e => {
    dispatch(setStatusFilter(e.target.textContent));
    navigate('/content');
    setMenu(!menu);
  };

  return (
    <header className={css.container}>
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
      <button
        className={css.mobileMenuBtn}
        type="button"
        onClick={handleMenuBtnClick}
      >
        <p className={css.mobileMenuTitle}>menu</p>
        <span className={css.menuIcon}></span>
      </button>
      {menu && (
        <div
          style={{ transform: 'translateY(0)' }}
          className={css.linkWrapper}
          onClick={handleProductsLinksClick}
        >
          <button type="button" className={css.link}>
            View All
          </button>
          <button type="button" className={css.link}>
            Feed Bunks & Bale Feeders
          </button>
          <button type="button" className={css.link}>
            Feed Through Panels
          </button>
          <button type="button" className={css.link}>
            Sucker Rod Panels & Gates
          </button>
          <button type="button" className={css.link}>
            Freestand Panels & Windbreak
          </button>
          <button type="button" className={css.link}>
            Pipe, Sucker Rods, & Posts
          </button>
          <button type="button" className={css.link}>
            Calf Shelter & Hopper Cones
          </button>
          <button type="button" className={css.link}>
            Calf Catcher
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
