import React from 'react';

export default function WalletConnectionDrawer({ children, isOpen, setIsOpen }) {
    return (
        <main
            className={
                " fixed overflow-hidden z-50 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-200 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    "w-1/4 m-3 rounded-xl max-w-lg right-0 absolute bg-gray-900 h-5/6 shadow-xl delay-400 duration-300 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className="relative w-full max-w-lg pb-10 flex flex-col">
                    <header className='p-4 font-bold text-white text-lg'>Connect a Wallet</header>.
                    {children}
                </article>
            </section>
            <section
                className="w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}