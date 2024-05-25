import React from "react";
import OddsButton from "../buttons/OddsButton";

const TeamCard = ({ logo, teamName, odds }) => {
    return (
        <div className="w-52 flex flex-col items-center">
            {/* Team Logo */}
            <div div className="flex bg-gray-700 rounded-full items-center justify-center w-36 h-36" >
                <img src={logo} alt={teamName} className="size-32 object-cover p-4 justify-self-center" />
            </div >

            <div className="">
                {/* Team Name */}
                <div className="text-2xl text-gray-300 mt-2">
                    {teamName}
                </div>
                {/* <img src={BarcelonaLogo} alt="Barcelona Logo" className="w-36" /> */}

                {/* Team Odds */}
                <OddsButton odds={odds} />
                {/* <button className="text-md font-bold text-gray-300 mt-4 bg-gray-900 p-2 rounded-md w-44 hover:bg-indigo-900">
                    <p className="text-blue-400">{odds}</p>
                </button> */}
            </div>
        </div>
    );
}

export default TeamCard;