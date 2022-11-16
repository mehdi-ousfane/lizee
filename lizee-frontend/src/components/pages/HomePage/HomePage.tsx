import { generatePath, Link } from 'react-router-dom';
import { ProductsRequestData } from '../../../types/Products';

import Button from '../../atoms/Button/Button';
import ExpressDeliveryIcon from '../../icons/ExpressDeliveryIcon/ExpressDeliveryIcon';
import HygieneShirtIcon from '../../icons/HygieneShirtIcon/HygieneShirtIcon';
import PackageIcon from '../../icons/PackageIcon/PackageIcon';
import DateRangePicker from '../../molecules/DateRangePicker/DateRangePicker';
import InformationCard from '../../molecules/InformationCard/InformationCard';
import styles from './HomePage.module.css';
interface Props {
  dataLoader: () => ProductsRequestData;
}

const HomePage = ({ dataLoader }: Props) => {
  const data: ProductsRequestData = dataLoader();
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.mainSectionContainer}>
        <h1 className={styles.mainTitle}>Lizee Reuse Platform</h1>
        <p className={styles.descriptionTitle}>
          Rent or buy our product on demand.
        </p>
        <p className={styles.description}>Delivered when you need it.</p>
        <div className={styles.calendarContainer}>
          <DateRangePicker />
          <Button>Start</Button>
        </div>
        <div className={styles.buttonsContainer}>
          <Button>Go to shop</Button>
          <Button>See our pack</Button>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.cards}>
            <InformationCard>
              <ExpressDeliveryIcon /> <p>Delivery on time</p>
            </InformationCard>
            <InformationCard>
              <HygieneShirtIcon /> <p>Hygiene and quality control</p>
            </InformationCard>
            <InformationCard>
              <PackageIcon /> <p>Easy returns</p>
            </InformationCard>
          </div>
          <p>
            The more you travel, the more you save !{' '}
            <mark>More information</mark>
          </p>
        </div>
      </div>
      <div className={styles.productsContainer}>
        {data.items.map((item) => {
          const slug = item.slug;
          return (
            <InformationCard key={slug}>
              <Link
                to={generatePath('/lizee/produits/?slug=:slug', { slug })}
                key={`${item.name}_${item.slug}`}
              >
                <img
                  src={item.images[0].cachedPath}
                  alt={item.name}
                  width="90"
                  height="120"
                />
                <p>{item.name}</p>
              </Link>
            </InformationCard>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
