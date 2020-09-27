import React from 'react';

import BlueCard from '../../components/BlueCard';
import Header from '../../components/Header';
import ProcessCard from '../../components/ProcessCard';
import Footer from '../../components/Footer';
import SituationCard from '../../components/SituationCard';
import BordelessCard from '../../components/BordelessCard';
import InformationCard from '../../components/InformationCard';

import './styles.css'
import ContentHeader from '../../components/ContentHeader';
import StageCard from '../../components/StageCard';

function Home() {
    return (
        <div className='container'>
            <Header />

            <ContentHeader searchProcess={true} />

            <ProcessCard />

            <div className='content-container'>
                <SituationCard />

                <div className="responsive-StageCard">
                    <StageCard/>
                </div>

                <div className="responsiveDiv">
                    <BordelessCard />

                    <InformationCard />
                </div>

                <BlueCard />

                
            </div>

            <Footer />
        </div>
    );
}

export default Home;