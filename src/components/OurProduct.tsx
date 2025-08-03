import Typography from "./Typography";
import Image from "./Image";
import Button from "./Button";
import { productList } from "../data/productList";
import { useShoesCardContext } from "../context/ShoesCardContext";

function OurProduct() {
  const { addCardItem } = useShoesCardContext();

  return (
    <div className="card">
      <div className="cardTop">
        <Image src="https://cdn-icons-png.flaticon.com/512/732/732084.png" />
      </div>

      <div className="cardTitle">Our Products</div>
      <div className="cardBody">
        {productList.map((product) => (
          <div key={product.id} className="shopItem">
            <div
              className="shopItem_image"
              style={{
                backgroundColor: product.id === 1 ? "rgb(212, 215, 214)" : "rgb(34, 175, 220)",
              }}
            >
              <Image src={`${product.image}`} />
            </div>

            <div className="shopItem_name">{product.title}</div>
            <Typography text={`${product.desc}`} />

            <div className="shopItem_bottom">
              <div className="shopItem_price">{`$${product.price}`}</div>
              <Button buttonText="ADD TO CARD" onClick={() => addCardItem(product)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProduct;
