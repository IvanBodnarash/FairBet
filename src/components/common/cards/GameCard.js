import React from "react";
import TeamCard from "./TeamCard";
import MiddleCard from "./MiddleContainer";

const GameCard = ({ teamName1, teamName2, score, date, time, teamOdds1, teamOdds2, drawOdds, isLive, logoTeam1, logoTeam2 }) => {
    return (
        <div className="flex relative justify-center my-4">
            <div className="flex items-end justify-between mx-auto bg-gray-600 p-8 rounded-2xl shadow-2xl">

                {isLive && (
                    <div className="absolute top-4 text-sm text-white bg-red-700 px-8 py-2 rounded-2xl live-button">
                        Live
                    </div>
                )}

                {/* Left Container */}
                <TeamCard
                    logo={logoTeam1}
                    teamName={teamName1}
                    odds={teamOdds1}
                />

                {/* Middle Container */}
                <MiddleCard
                    score={score}
                    date={date}
                    time={time}
                    odds={drawOdds}
                />


                {/* Right Container */}
                <TeamCard
                    logo={logoTeam2}
                    teamName={teamName2}
                    odds={teamOdds2}
                />
            </div>
        </div>
    );
}

export default GameCard;