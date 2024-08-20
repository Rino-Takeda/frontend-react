import React from "react";

export const Button = ({ buttonText, onclick }) => (
    <button className = "button" onClick={onclick}>
        {buttonText}
    </button>
);