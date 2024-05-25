import React from "react";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import FootballLayout from "../../components/layout/FootballLayout";
import '../../index.css';

function Main() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="">
            <Header setIsOpen={setIsOpen}/>
            <FootballLayout isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Footer />
        </div>
    );
}

export default Main;