import css from './Content.module.css';
import data from '../../data/products.json';

const Content = () => {
  return <h2 className={css.title}>{data[0].id}</h2>;
};

export default Content;
