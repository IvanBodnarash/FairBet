// // import React from 'react';

// // export default function BetslipContainer({ children, isOpenBetslip, setIsOpenBetslip }) {
// //     return (
// //         <div
// //             className={
// //                 " fixed top-0 bottom-0 left-0 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out " +
// //                 (isOpenBetslip
// //                     ? " translate-x-0  "
// //                     : " -translate-x-full  ")
// //             }
// //         >
// //             <section
// //                 className={
// //                     "max-w-lg bg-gray-900 h-5/6 shadow-xl delay-400 duration-300 ease-in-out transition-all transform  " +
// //                     (isOpenBetslip ? " translate-x-0 " : " translate-x-full ")
// //                 }
// //             >
// //                 <article className="relative w-full max-w-lg pb-10 flex flex-col">
// //                     <div className="flex flex-row items-center">
// //                         <button className="p-2 m-4 rounded-lg bg-gray-800 hover:bg-gray-800 cursor-pointer hover:bg-indigo-900" onClick={() => setIsOpenBetslip(false)}></button>
// //                         <header className='p-4 font-bold text-white text-lg'>Connect a Wallet</header>
// //                     </div>
// //                     {children}
// //                 </article>
// //             </section>
// //             <section
// //                 className="w-screen h-full cursor-pointer "
// //                 onClick={() => {
// //                     setIsOpenBetslip(false);
// //                 }}
// //             ></section>
// //         </div>
// //     );
// // }

// import React from 'react';
// import { IoCloseSharp } from "react-icons/io5";

// export default function WalletConnectionDrawer({ children, isOpenBetslip, setIsOpenBetslip }) {
//     return (
//         <main
//             className={
//                 " fixed overflow-hidden z-50 inset-0 transform ease-in-out " +
//                 (isOpenBetslip
//                     ? " transition-opacity opacity-100 duration-500 translate-x-0  "
//                     : " transition-all delay-200 opacity-0 translate-x-full  ")
//             }
//         >
//             <section
//                 className={
//                     "w-1/4 m-3 rounded-xl max-w-lg right-0 absolute bg-gray-900 h-5/6 shadow-xl delay-400 duration-300 ease-in-out transition-all transform  " +
//                     (isOpenBetslip ? " translate-x-0 " : " translate-x-full ")
//                 }
//             >
//                 <article className="relative w-full max-w-lg pb-10 flex flex-col">
//                     <div className="flex flex-row items-center">
//                         <button className="p-2 m-4 rounded-lg bg-gray-800 hover:bg-gray-800 cursor-pointer hover:bg-indigo-900" onClick={() => setIsOpenBetslip(false)}><IoCloseSharp className="text-white text-3xl" /></button>
//                         <header className='p-4 font-bold text-white text-lg'>Connect a Wallet</header>
//                     </div>
//                     {children}
//                 </article>
//             </section>
//             <section
//                 className="w-screen h-full cursor-pointer "
//                 onClick={() => {
//                     setIsOpenBetslip(false);
//                 }}
//             ></section>
//         </main>
//     );
// }

// BetDetails.jsx
// import React from 'react';

// const BetDetails = ({ selectedBet, betAmount, setBetAmount, teamName1, teamName2, score, date, time, teamOdds1, teamOdds2, drawOdds, onClose }) => {
//     if (!selectedBet) {
//         return null;
//     }

//     return (
//         <div className="right-0 top-0 h-full w-1/3 bg-white shadow-lg p-4 z-50">
//             <button onClick={onClose} className="text-right text-red-500">Close</button>
//             <div className="p-4">
//                 <h2 className="text-xl font-bold">Bet Details</h2>
//                 <p>You chose bet on: {selectedBet}</p>
//                 <input
//                     type="number"
//                     value={betAmount}
//                     onChange={(e) => setBetAmount(e.target.value)}
//                     placeholder="Enter amount"
//                     className="p-2 m-2 border rounded-md w-full"
//                 />
//                 <div className="mt-4">
//                     <p><strong>Match Info:</strong></p>
//                     <p>Teams: {teamName1} vs {teamName2}</p>
//                     <p>Score: {score}</p>
//                     <p>Date: {date}</p>
//                     <p>Time: {time}</p>
//                     <p>Odds:</p>
//                     <ul>
//                         <li>{teamName1}: {teamOdds1}</li>
//                         <li>{teamName2}: {teamOdds2}</li>
//                         <li>Draw: {drawOdds}</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BetDetails;

// BetDetailsDrawer.jsx
import React from 'react';

const BetDetailsDrawer = ({ isOpenBetslip, selectedBet, betAmount, setBetAmount, teamName1, teamName2, score, date, time, teamOdds1, teamOdds2, drawOdds, onClose }) => {
    return (
        <div
            className={`fixed top-16 right-0 h-full bg-gray-900 shadow-lg transition-transform transform ${
                isOpenBetslip ? 'translate-x-0' : 'translate-x-full'
            } w-1/3`}
        >
            <button onClick={onClose} className="text-right text-red-500 m-4">Close</button>
            <div className="p-4 text-gray-300">
                <h2 className="text-xl font-bold">Bet Details</h2>
                {selectedBet && (
                    <>
                        <p>You chose bet on: {selectedBet}</p>
                        <input
                            type="number"
                            value={betAmount}
                            onChange={(e) => setBetAmount(e.target.value)}
                            placeholder="Enter amount"
                            className="p-2 m-2 border rounded-md w-full"
                        />
                        <div className="mt-4">
                            <p><strong>Match Info:</strong></p>
                            <p>Teams: {teamName1} vs {teamName2}</p>
                            <p>Score: {score}</p>
                            <p>Date: {date}</p>
                            <p>Time: {time}</p>
                            <p>Odds:</p>
                            <ul>
                                <li>{teamName1}: {teamOdds1}</li>
                                <li>{teamName2}: {teamOdds2}</li>
                                <li>Draw: {drawOdds}</li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default BetDetailsDrawer;

