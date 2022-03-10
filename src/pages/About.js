import React from 'react';
import {NavBar} from '../components/global-components/navbar/index'
export default function Contact(){
    return(
        <main style={{height:"1000px"}}>
            <NavBar/>
            <div className="container">
                <div className="card w-100 h-100">
                    <div className='row'>
                    <h1 className='card-title text-center mt-5'>
                        Städkoll - för en renare städbransch
                    </h1>
                    </div>
                    <div className='row m-3'>
                    <p className='card-text text-wrap ml-5 mt-4 fw-normal m5'>
                    Rutavdraget infördes den 1 juli 2007. Det ges i form av en skattereduktion om 50% för arbetskostnaden för hushållstjänster upp till 50 000 kronor per år. Syftet med Rutavdraget är framförallt att svart arbete ska omvandlas till vitt, kvinnor och män ska öka sin tid på arbetsmarknaden och att fler korttidsutbildade ska komma in på arbetsmarknaden. Sedan införandet av RUT har antalet användare av avdraget ökat stadigt för varje år och 2019 översteg antalet användare 1 miljon.
                    Över 70% av Rutsubventionen är kopplad till hemstäd.
                    </p>
                    </div>
                    <div className='row m-3'>
                    <p className='text-wrap card-text'>
                    Rutavdraget infördes den 1 juli 2007. Det ges i form av en skattereduktion om 50% för arbetskostnaden för hushållstjänster upp till 50 000 kronor per år. Syftet med Rutavdraget är framförallt att svart arbete ska omvandlas till vitt, kvinnor och män ska öka sin tid på arbetsmarknaden och att fler korttidsutbildade ska komma in på arbetsmarknaden. Sedan införandet av RUT har antalet användare av avdraget ökat stadigt för varje år och 2019 översteg antalet användare 1 miljon.
                    Över 70% av Rutsubventionen är kopplad till hemstäd.
                    </p>
                    </div>
                    <div className='row m-3'>
                        <p className='fw-normal'>
                            <ul  class="list-unstyled">
                                <li className=''>- Vad blir den totala kostnaden för städtjänsten?</li>
                                <li>- Har städpersonal kollektivavtal?</li>
                                <li>- Ingår städutrustning?</li>
                                <li>- Är använda städprodukter miljömärkta?</li>  
                                <li>- Är det samma städpersonal vid varje städtillfälle?</li>       
                            </ul>
                        </p>
                    </div>
                    <div className='row m-3'>
                       <p className='fw-normal'>
                       Städkoll.se hjäper dig att enkelt svara på dessa frågor genom vårt verktyg för att objektivt jämföra priser och utvärdera leverantörer av hemstäd i ditt bostadsområde. Genom detta skapas transparens på marknaden för hemstäd och en möjlighet att också utvärdera leverantörer även utifrån kriterier kopplade till miljö, kvalitet och rättvisa villkor för anställda.
                       </p>
                    </div>
                    <div className='row m-3'>
                        <p className='fw-normal'>
                            Sidan drivs av Newsave AB som kvalitetsgranskar och genomför upphandlingar av städavtal för företag. Genom detta arbete finns en upparbetad kunskap om städbranschen och en erfarenhet av att även framstående företag med starka företagsvärderingar inom miljö och socialt ansvar, kan ha bristande kunskap om sina städavtal. Städkoll.se är därför startat med utgångspunkt i att om företag upplever bristande information för kontroll av städleverantörer borde privatmarknaden för hemstäd ha samma behov. Vi hoppas därmed att du som användare av hemstäd utvärderar de städleverantörer som finns i ditt område och känner en trygghet i att välja den leverantör som bäst uppfyller ditt behov.
                        </p>
                    </div>
                </div>
            </div>
            <footer>
            
            </footer>
        </main>
        
    )
}