import ItemCount from "./ItemCount";
import React, { useState, useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const ItemDetail = ({ item, loaded }) => {
  const [num, setNum] = useState(0);
  const { addProducts } = useContext(CartContext);
  function handleClickConfirm() {
    addProducts({
      id: item.id,
      amount: num,
      name: item.title,
      price: item.price,
      key: item.number,
      stock: item.stock,
      image: item.image,
      description: item.description,
    });
  }
  return (
    <div>
      <div
        className={"tableDetail"}
        style={{ display: loaded !== 1 ? "flex" : "none" }}
      >
        Cargando...
      </div>
      <div
        className={"subTable tableDetail"}
        style={{ display: loaded !== 1 ? "none" : "flex" }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ width: "15%" }}>
            <img alt={item.title} src={item.image} />
          </div>
          <div
            style={{
              width: "85%",
              paddingLeft: "2%",
              display: "grid",
              justifyItems: "center",
            }}
          >
            <b>{item.title}</b>
            <p>{item.description}</p>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            justifyItems: "center",
            width: "25%",
            padding: "2%",
          }}
        >
          <div style={{ width: "100%", padding: "5%" }}>
            <ItemCount stock={item.stock} num={num} setNum={setNum} />
            <div
              style={{
                width: "100%",
                paddingTop: "20%",
                fontSize: "2.3vw",
                display: item.stock === 0 ? "none" : "inline-flex",
              }}
            >
              ¥{item.price}
            </div>
          </div>
          <Link to={"/cart"}>
            <Button
              text={"Confirmar"}
              width={"8.2vw"}
              height={"3vw"}
              border={"none"}
              backgroundColor={"rgb(18, 0, 177)"}
              color={"white"}
              onClick={handleClickConfirm}
              display={num === 0 ? "none" : "inline"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
