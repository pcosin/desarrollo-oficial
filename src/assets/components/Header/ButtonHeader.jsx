import React from "react";
import { Link } from "react-router-dom";

function ButtonHeader() {
  return (
    <>
      <Link to="/contact">
        <button>
          Tu auditoría <span>gratuita</span>, aquí
        </button>
      </Link>
    </>
  );
}

export default ButtonHeader;
