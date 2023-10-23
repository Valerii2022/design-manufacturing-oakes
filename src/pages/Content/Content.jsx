import css from './Content.module.css';
// import data from '../../data/products.json';

const Content = () => {
  return (
    <div className={css.container}>
      <div className={css.text}>
        <p>
          While we try to keep information current and accurate on this website,
          prices and information are subject to change. Please contact us to
          verify all pricing and information listed on this website.
        </p>
      </div>
      <div className={css.warningText}>
        <p>
          We also stock a full line of new steel for your convenience. Please
          call for pricing.
        </p>
      </div>
      <div class="main__info-bottom">
        <h2 className={css.title}>Have Questions or want to place an order?</h2>
        <p>
          If you have any questions or would like to place an order, we would
          love to speak with you. Simply fill out our online contact form or
          utlize the information below to contact us.
        </p>
        <h3 className={css.subtitle}>Design Manufacturing, Inc.</h3>
        <address>
          <p>11128 88th Street SE</p>
          <p>Oakes, ND 58474</p>
        </address>
        <p>Phone: 701-742-4442</p>
      </div>
    </div>
  );
};

export default Content;
