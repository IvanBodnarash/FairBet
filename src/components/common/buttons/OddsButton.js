import React from "react";

const OddsButton = ({ odds }) => {
    return (
        <button className="text-md font-bold text-gray-300 mt-4 bg-gray-900 p-2 rounded-md w-44 hover:bg-indigo-900">
            <p className="text-blue-400">{odds}</p>
        </button>
    );
}

export default OddsButton;