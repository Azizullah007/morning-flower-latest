import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Morning Flower</h1>
          <p>
          We are based in Dubai-UAE, wholesale and retail clothing supplier, among best wholesale clothing suppliers, providing fashion-forward pieces to retailers and boutiques from all over the world. So they called us high quality boutique wholesale clothing supplier. On our website, you will find everything you need to stock your boutique with trendy and high quality wholesale womens clothing items – from turkish designed ladies dresses, suits and trouseres. We carry all sizes and styles to help you provide a wide range of choices for your customers. Low prices on quality wholesale clothes will allow you to add a significant markup percent while still keeping the garments affordable for your clientele. {" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
