import React from "react";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Thanks = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="page-section min-h-svh">
        <h1 className="text-4xl md:text-5xl font-bold text-center py-12">
          Thank you for sending this message!
        </h1>

        <button
          onClick={() => {
            navigate("/");
          }}
          className="holo-btn"
        >
          <span>
            <AiFillHome />
          </span>
          Go Back
        </button>
      </div>
    </>
  );
};
