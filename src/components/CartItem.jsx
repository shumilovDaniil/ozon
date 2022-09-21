import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../redux/slices/cartSlice";
import { addToFavorite } from "./../redux/slices/favoriteSlice";
import { Link } from "react-router-dom";

const CartItem = (item) => {
    const dispatch = useDispatch();
    const { title, price, id, "old-price": oldPrice, discount, img } = item;

    return (
        <div className="cart__item">
            <input className="checkbox" type="checkbox" name="" id="" />
            <img src={img} alt="" />
            <div className="cart__item-info">
                <h4>
                    <Link to={`/product/${id}`}>{title}</Link>
                </h4>
                <span>цвет белый, 80 гр</span>
                <span className="brand">Nezzah</span>
                <strong>В рассрочку по 110 ₽ / мес</strong>
                <div className="cart__item-actions">
                    <button onClick={() => dispatch(addToFavorite(item))}>
                        В избранное
                    </button>
                    <button onClick={() => dispatch(deleteFromCart(id))}>
                        Удалить
                    </button>
                </div>
            </div>

            <div className="cart__item-price">
                <strong className="price-now">{price} ₽</strong>
                <div className="price-row">
                    <div className="price-old">{oldPrice} ₽</div>
                    <span className="price-discount">Скидка {discount}%</span>
                </div>
            </div>

            <div className="select">
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                </select>
                <p>{price} ₽ / шт.</p>
            </div>
        </div>
    );
};

export default CartItem;
