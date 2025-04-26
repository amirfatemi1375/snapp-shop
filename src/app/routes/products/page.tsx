import products from "@/data/product.json";
import ProductCard from "@/components/product/ProductCard";
import styles from "./Products.module.scss";

const ProductList = () => {
  return (
    <div className={styles.productList}>
      {products.length ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.price}
            link={product.id}
            aria-label={`View details for ${product.name}`}
          />
        ))
      ) : (
        <p>محصولی یافت نشد.</p>
      )}
    </div>
  );
};

export default ProductList;
