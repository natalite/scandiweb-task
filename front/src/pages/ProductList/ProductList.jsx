import Layout from '../../components/layout/Layout';
import ProductItem from './components/ProductItem/ProductItem';
import Header from '../../components/layout/Header';
import { Link } from 'react-router-dom';
import useProductList from './useProductList';

const ProductList = () => {
  const {
    selectedProducts,
    productList,
    handleCheckboxChange,
    handleMassDelete,
  } = useProductList();

  const products = productList?.map((product, id) => {
    return (
      <div key={id}>
        <ProductItem
          id={product.id}
          sku={product.sku}
          name={product.name}
          price={product.price}
          attribute={product.attribute}
          selectedProducts={selectedProducts}
          onCheckboxChange={handleCheckboxChange}
        />
      </div>
    );
  });
  return (
    <Layout>
      <Header
        title='Product List'
        firstButton={<Link to={'/add-product'}>ADD</Link>}
        secButton='MASS DELETE'
        massDelete={() => handleMassDelete()}
      />
      <div className=' flex gap-10 flex-wrap w-full py-10 '>{products}</div>
    </Layout>
  );
};

export default ProductList;
