import { useSearchParams } from 'react-router-dom';
import { ProductsRequestData } from '../../../types/Products';
import InformationCard from '../../molecules/InformationCard/InformationCard';
import styles from './ProductPage.module.css';

interface Props {
  dataLoader: () => ProductsRequestData;
}

const ProductsPage = ({ dataLoader }: Props) => {
  const data: ProductsRequestData = dataLoader();
  const productsList = data.items;
  const [searchParams] = useSearchParams();
  const slugRequested = searchParams.get('slug');

  const selectedProduct = productsList.find((product) => {
    return product.slug === slugRequested;
  });

  //TODO: list all the variant sizes with corresponding price and generate as much buttons
  //TODO: stock current size and price with useState hook
  //TODO: update the size/price state with each button
  console.log(selectedProduct);
  return (
    <div className={styles.productContainer}>
      <InformationCard>
        <img
          src={selectedProduct?.images[0].cachedPath}
          alt={selectedProduct?.name}
          width="250"
          height="350"
        />
      </InformationCard>
      <div className={styles.descriptionContainer}>
        <p>
          Taille :{' '}
          {
            selectedProduct?.variants[`${selectedProduct?.code}-variant-0`]
              ?.name
          }
        </p>
        <p>
          Prix :{' '}
          {
            selectedProduct?.variants[`${selectedProduct?.code}-variant-0`]
              ?.price.current
          }
          {
            selectedProduct?.variants[`${selectedProduct?.code}-variant-0`]
              ?.price.currency
          }
        </p>
        <InformationCard>
          {selectedProduct?.name}
          {selectedProduct?.description}
        </InformationCard>
      </div>
    </div>
  );
};

export default ProductsPage;
