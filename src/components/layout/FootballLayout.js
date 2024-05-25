import React from "react";
import GameCard from "../common/cards/GameCard";
import WalletConnectionDrawer from "../side-pannels-drawers/WalletConnection";
import Wallet from "../buttons/Wallet";

import RealMadridLogo from "../../assets/img/real-madrid-logo.png";
import FCBarcelonaLogo from "../../assets/img/fc-barcelona-logo.png";
import BayernLogo from "../../assets/img/fc-bayern-munich-logo.png";
import StuttgartLogo from "../../assets/img/fc-stuttgart-logo.png";

import { GiSoccerBall } from "react-icons/gi";

function FootballLayout({ isOpen, setIsOpen }) {
    return (
        <div className="min-h-screen bg-gray-800 pt-8 pb-12">

            {/* Sport Category */}
            <div className="flex justify-center">
                <GiSoccerBall className="text-gray-200 text-4xl mr-2" />
                <p className="text-3xl font-bold text-gray-200 tracking-wide uppercase">
                    Football
                </p>
            </div>

            {/* Game Cards */}
            <div className="flex flex-col justify-center mt-8">
                <GameCard 
                    logoTeam1={RealMadridLogo}
                    logoTeam2={FCBarcelonaLogo}
                    teamName1="Real Madrid"
                    teamName2="FC Barcelona"
                    score="2 - 1"
                    date="Aug 23"
                    time="11:30"
                    teamOdds1="2.25"
                    teamOdds2="2.15"
                    drawOdds="0.12"
                    isLive={true}
                />
                <GameCard 
                    logoTeam1={BayernLogo}
                    logoTeam2={StuttgartLogo}
                    teamName1="FC Bayern Munich"
                    teamName2="Stuttgart"
                    score="0 - 0"
                    date="Oct 10"
                    time="14:30"
                    teamOdds1="5.25"
                    teamOdds2="4.15"
                    drawOdds="1.12"
                    isLive={false}
                />
            </div>

            <WalletConnectionDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="rounded-2xl">
                    <Wallet 
                        walletName="Metamask"
                        walletLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png"
                    />
                </div>
            </WalletConnectionDrawer>
        </div>
    );
}

export default FootballLayout;