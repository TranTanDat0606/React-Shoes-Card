import { useShoesCardContext } from "../context/ShoesCardContext";
import { FormatUSD } from "../utils/FormatUSD";
import Button from "./Button";
import Image from "./Image";

function YourCard() {
  const { card, removeCardItem } = useShoesCardContext();

  const totalQuantity = card.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = card.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="card">
      <div className="cardTop">
        <Image src="https://cdn-icons-png.flaticon.com/512/732/732084.png" />
        <div>Total: {totalQuantity}</div>
      </div>

      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">{totalPrice}</span>
      </div>

      <div className="cardBody">
        {card.length === 0 ? (
          <p>Không có sản phẩm nào trong giỏ.</p>
        ) : (
          card.map((item) => (
            <div className="cardItem">
              <div className="cardItem_left">
                <div className="cardItem_image">
                  <Image src={`${item.image}`} />
                </div>
              </div>
              <div className="cardItem_right">
                <div className="cardItem_name">{item.title}</div>
                <div className="cardItem_price">{FormatUSD(item.price * item.quantity)}</div>
                <div className="cartItem_actions">
                  <div className="cartItem_count">
                    <div className="cartItem_button">-</div>
                    <div className="cartItem_number">{item.quantity}</div>
                    <div className="cartItem_button">+</div>
                  </div>

                  <Button
                    buttonText="ADD TO CARD"
                    className="carItem_remove"
                    icon={
                      <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC" />
                    }
                    onClick={() => removeCardItem(item.id)}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default YourCard;
