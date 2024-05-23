import React from "react";
import '../../index.css';

function Header() {
    return (
        <div className="flex h-20 items-center text-white bg-gray-900">
            {/* <h1>Header</h1> */}
            <div className="flex-none w-20"><a href="https://valid-url.com" className="text-2xl" target="_blank" rel="noopener noreferrer">Logo</a></div>
            <div className="flex-1">search</div>
            <button className="justify-self-end w-20 bg-indigo-500 hover:bg-indigo-700 font-bold py-2 px-4 rounded">
                Connect
            </button>
        </div>
    );
}

export default Header;