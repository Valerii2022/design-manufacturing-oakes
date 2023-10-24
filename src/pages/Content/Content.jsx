import { useNavigate } from 'react-router-dom';
import css from './Content.module.css';
import data from '../../data/products.json';
import { nanoid } from 'nanoid';

const Content = () => {
  const navigate = useNavigate();
  console.log(data);

  return (
    <div className={css.container}>
      <div className={css.breadcrumbs}>
        <p>
          <button
            onClick={() => {
              navigate('/');
            }}
            className={css.homeLink}
          >
            Home
          </button>
          - All Products view
        </p>
      </div>
      <ul className={css.catalogList}>
        {data.map(({ productId, products }) => {
          return (
            <li className={css.catalogItem} key={productId}>
              <h2 className={css.title}>{productId}</h2>
              <ul className={css.itemList}>
                {products.map(
                  ({ id, video, image, title, price, description }) => {
                    return (
                      <li className={css.item} key={id}>
                        {video && (
                          <div className={css.video}>
                            <iframe
                              className={css.videoFrame}
                              src={video}
                              title="Calf Catcher Design Manufacturing"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        )}
                        <div className={css.itemInfoWrap}>
                          <div className={css.imageList}>
                            {image.map(element => {
                              return (
                                <img key={nanoid()} src={element} alt={title} />
                              );
                            })}
                          </div>
                          <div className={css.descriptionList}>
                            <div className={css.descriptionTitleWrap}>
                              <h4 className={css.blockTitle}>{title}</h4>
                              <p>
                                <span>Price:</span> {price}
                              </p>
                            </div>
                            {description && (
                              <div className={css.description}>
                                <span>Description</span>
                                <p>{description}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  }
                )}
              </ul>
            </li>
          );
        })}
      </ul>
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
      <div className={css.addressBox}>
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
