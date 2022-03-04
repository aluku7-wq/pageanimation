/** @format */

import React from "react";
import Data from "../Data/Data";
import "./Products.css";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { productanimation, productCardAnimation } from "../animation/Animation";
import { motion } from "framer-motion";

const Products = ({
  showproduct,
  setShowproduct,
  transition,
  setTransition,
}) => {
  return (
    <div className="products">
      <div className="products_body">
        <div className="product_dashboard">
          <div
            className="top_section"
            onClick={() => {
              setTimeout(() => setShowproduct(!showproduct), 1000);
              setTransition(!transition);
            }}>
            <AiOutlineCaretLeft />
            <p>back</p>
          </div>
          <div className="lower_section">
            <p>
              <BiChevronLeft />
            </p>
            <p className="right_icon">
              <BiChevronRight />
            </p>
          </div>
        </div>
        <motion.div
          className="product_container"
          variants={productanimation}
          animate="show">
          {Data.map((perfume, index) => {
            return (
              <motion.div
                className="product_card"
                key={index}
                variants={productCardAnimation}>
                <img src={`../images/${perfume.image}`} alt="" />
                <p className="card_name">{perfume.name}</p>
                <p className="card_price">sh. {perfume.price}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
