import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductsRequestData, SizePriceList } from '../../../types/Products';
import Button from '../../atoms/Button/Button';
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
  const [currentSizePrice, setCurrentSizePrice] = useState([
    {
      size: '',
      price: 0,
    },
  ]);

  const selectedProduct = productsList.find((product) => {
    return product.slug === slugRequested;
  });

  // list all the variants of the product
  const selectedProductVariants = selectedProduct?.variants;
  let newSizeList: SizePriceList = [];
  for (const prop in selectedProductVariants) {
    const sizeName = selectedProductVariants[prop]?.name;
    const sizePrice = selectedProductVariants[prop].price?.current;
    const newSizePrice = { size: sizeName, price: sizePrice };
    newSizeList.push(newSizePrice);
  }

  // initiate the first render
  useEffect(() => {
    setCurrentSizePrice([
      {
        size: newSizeList[0].size,
        price: newSizeList[0].price,
      },
    ]);
  }, []);

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <InformationCard>
          <img
            src={selectedProduct?.images[0].cachedPath}
            alt={selectedProduct?.name}
            width="250"
            height="350"
          />
        </InformationCard>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.buttonsContainer}>
          {newSizeList.map((child, key) => (
            <Button
              key={`${child.size}_${key}`}
              onClick={() => {
                const newCurrentSize = {
                  size: child.size,
                  price: child.price,
                };
                setCurrentSizePrice([newCurrentSize]);
              }}
            >
              {child.size}
            </Button>
          ))}
        </div>
        <InformationCard>
          <div className={styles.sizePrice}>
            <p>Taille : {currentSizePrice[0].size}</p>
            <p>Prix : {currentSizePrice[0].price}&euro;</p>
          </div>
        </InformationCard>
        <InformationCard>
          <div className={styles.description}>
            {selectedProduct?.name}
            {selectedProduct?.description}
          </div>
        </InformationCard>
      </div>
    </div>
  );
};

export default ProductsPage;
