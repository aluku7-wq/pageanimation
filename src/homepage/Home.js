/** @format */

import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Products from "../products/Products";
import Transition from "../transition/Transition";
import { AnimatePresence } from "framer-motion";
import "./Home.css";

const Home = () => {
  const [transition, setTransition] = useState(false);
  const [showproduct, setShowproduct] = useState(false);
  return (
    <div className="home">
      {showproduct ? (
        <Products
          showproduct={showproduct}
          setShowproduct={setShowproduct}
          transition={transition}
          setTransition={setTransition}
        />
      ) : (
        <div className="home_cover">
          <div className="home_overlay">
            <Navbar />
            <div className="home_body">
              <div className="top_text">
                <p>perfume network</p>
              </div>
              <div className="lower_text">
                <div
                  className="button"
                  onClick={() => {
                    setTransition(!transition);
                    setTimeout(() => setShowproduct(!showproduct), 500);
                  }}>
                  <p>click</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <AnimatePresence exitBeforeEnter>
        {transition && <Transition />}
      </AnimatePresence>
    </div>
  );
};

export default Home;
