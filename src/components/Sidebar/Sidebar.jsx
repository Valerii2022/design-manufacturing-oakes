import css from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <div class="catalog">
        <h2 className={css.title}>Product Quick Find...</h2>
        <div className={css.linkWrapper}>
          <a href="./catalog.html" className={css.link}>
            View All
          </a>
          <a href="./bunks.html" className={css.link}>
            Feed Bunks & Bale Feeders
          </a>
          <a href="./feed-through.html" className={css.link}>
            Feed Through Panels
          </a>
          <a href="./gates.html" className={css.link}>
            Sucker Rod Panels & Gates
          </a>
          <a href="./windbreak.html" className={css.link}>
            Freestand Panels & Windbreak
          </a>
          <a href="./pipes-rods.html" className={css.link}>
            Pipe, Sucker Rods, & Posts
          </a>
          <a href="./shelters.html" className={css.link}>
            Calf Shelter & Hopper Cones
          </a>
          <a href="./catcher.html" className={css.link}>
            Calf Catcher
          </a>
        </div>
      </div>
      <div className={css.formWrapper}>
        <h2 className={css.subtitle}>Contact Us</h2>
        <p className={css.text}>
          Simply fill out and submit the form below to send us an email.{' '}
          <span>All fields are required.</span>
        </p>
        <form action="#">
          <div className={css.inputWrap}>
            <label for="userName" className={css.label}>
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
            <label for="userEmail" className={css.label}>
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
            <label for="userPhone" className={css.label}>
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
            <label for="comments" className={css.label}>
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
            <label for="user-type" className={css.label}>
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
