import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faHeart, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useAuth } from "../contexts/auth.context";

const Footer = () => {
  const { user } = useAuth();

  return (
    <div className="border-top pt-3 py-2 text-center d-flex justify-content-center align-items-center">
      <div className="me-2">
        <Link to="/about" className="footer-link">
          <FontAwesomeIcon icon={faInfoCircle} /> About
        </Link>
      </div>

      {user && (
        <div className="d-flex align-items-center">
          <Link to="/favorites" className="footer-link me-2">
            <FontAwesomeIcon icon={faHeart} /> Favorite
          </Link>

          {user.biz && (
            <Link to="/my-cards" className="footer-link me-2">
              <FontAwesomeIcon icon={faCreditCard} /> My Cards
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Footer;