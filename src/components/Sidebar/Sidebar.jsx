import { useEffect, useState } from 'react';
import css from './Sidebar.module.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [filter, setFilter] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const handleProductsLinksClick = e => {
    setFilter(e.target.textContent);
    navigate('/content');
  };

  return (
    <aside className={css.sidebar}>
      <div className={css.catalog}>
        <h2 className={css.title}>Product Quick Find...</h2>
        <div className={css.linkWrapper} onClick={handleProductsLinksClick}>
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
      </div>
      <div className={css.formWrapper}>
        <h2 className={css.title}>Contact Us</h2>
        <p className={css.text}>
          Simply fill out and submit the form below to send us an email.{' '}
          <span>All fields are required.</span>
        </p>
        <form action="#">
          <div className={css.inputWrap}>
            <label htmlFor="userName" className={css.label}>
              Name:
            </label>
            <input
              type="text"
              className={css.input}
              id="userName"
              name="name"
            />
          </div>
          <div className={css.inputWrap}>
            <label htmlFor="userEmail" className={css.label}>
              Email:
            </label>
            <input
              type="email"
              className={css.input}
              id="userEmail"
              name="email"
            />
          </div>
          <div className={css.inputWrap}>
            <label htmlFor="userPhone" className={css.label}>
              Phone:
            </label>
            <input
              type="tel"
              className={css.input}
              id="userPhone"
              name="phone"
            />
          </div>
          <div className={css.inputWrap}>
            <label htmlFor="comments" className={css.label}>
              Comments:
            </label>
            <textarea
              type="textarea"
              className={css.textarea}
              id="comments"
              name="comments"
            ></textarea>
          </div>
          <div className={css.inputWrap}>
            <label htmlFor="user-type" className={css.label}>
              Type the words: <span className={css.typeText}>43BBWW</span>
            </label>
            <input type="text" className={css.input} id="type" name="type" />
          </div>
          <button type="submit" className={css.button}>
            Submit Form
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
