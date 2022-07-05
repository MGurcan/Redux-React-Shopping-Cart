import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
    features: {
      ram: 43,
      memory: 256,
      isletimSistemi: "free-dos",
      garanti:"distributor"

    }
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
    features: {
      ram: 4,
      memory: 256,
      isletimSistemi: "free-dos",
      garanti:"distributor"
    }
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
    features: {
      ram: 41,
      memory: 256,
      isletimSistemi: "free-dos",
      garanti:"distributor"
    }
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
    features: {
      ram: 42,
      memory: 256,
      isletimSistemi: "free-dos",
      garanti:"distributor"
    }
  },
  /* {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
    features: {
      ram: 45,
      memory: 256,
      isletimSistemi: "free-dos",
      garanti:"distributor"
    }
  }, */
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
              features={product.features}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
