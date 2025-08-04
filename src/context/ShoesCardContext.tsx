import React from "react";

interface IShoesCard {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface IOperator {
  card: IShoesCard;
  type: "increase" | "decrease";
}

interface IShoesCardContext {
  card: IShoesCard[];
  addCardItem: (item: IShoesCard) => void;
  removeCardItem: (cardItemId: number) => void;
  HandleChangeProduct: (cardOperator: IOperator) => void;
}

export const ShoesCardContext = React.createContext<IShoesCardContext>({
  card: [],
  addCardItem: () => {},
  removeCardItem: () => {},
  HandleChangeProduct: () => {},
});

export const ShoesCardContextProvider = ({ children }: React.PropsWithChildren) => {
  const [card, setCard] = React.useState<IShoesCard[]>([]);

  const addCardItem = (cardItem: IShoesCard) => {
    setCard((preState) => {
      const checkQuantity = preState.find((item) => item.id === cardItem.id);

      if (checkQuantity) {
        return preState.map((item) => (item.id === cardItem.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        return [...preState, { ...cardItem, quantity: 1 }];
      }
    });
  };

  const removeCardItem = (cardItemID: number) => {
    setCard((preState) => {
      const newPreState = JSON.parse(JSON.stringify(preState)) as IShoesCard[];
      const newCardItem = newPreState.filter((item) => item.id !== cardItemID);
      return newCardItem;
    });
  };

  const HandleChangeProduct = ({ card, type }: IOperator) => {
    if (type === "decrease" && card.quantity === 1) {
      removeCardItem(card.id);
      return;
    }

    setCard((prevState) =>
      prevState.map((cardItem) =>
        cardItem.id === card.id
          ? { ...cardItem, quantity: type === "increase" ? cardItem.quantity + 1 : cardItem.quantity - 1 }
          : cardItem
      )
    );
  };
  return (
    <ShoesCardContext.Provider
      value={{
        card,
        addCardItem,
        removeCardItem,
        HandleChangeProduct,
      }}
    >
      {children}
    </ShoesCardContext.Provider>
  );
};

export const useShoesCardContext = () => React.useContext(ShoesCardContext);
