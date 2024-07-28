import React from 'react';
import '../App.scss';

function Realisations() {
  return (    
    <div>
      <section className="services d-flex align-items-center " id="realisations">        
        <div className="container text-light mt-5 pt-5">            
            <h2><i className="fas fa-palette"></i><span className="home_text"> Réalisations</span></h2>
            <div className="row gy-4 py-2" data-aos="zoom-in">
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <h4 className="py-1">My Spend</h4>
                        <p className="para-light">Outil de gestion des dépenses et des charges mensuelles selon le profil connecté.<br /><br />- <u>Stack</u> : Symfony 5.2, Vuejs 2</p>
                        <div className="my-3">
                            <a className="btn float-end" target="_blank" rel="noopener noreferrer" href="https://myspend.aziz-bennane.fr">Visiter</a>
                        </div>
                    </div>                    
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <h4 className="py-1">Geolocip</h4>
                        <p className="para-light">Ce site web permet de géolocaliser des adresses IP publiques sur cartes Leaflet.<br /><br />- <u>Stack</u> : React 17, Leaflet 1.7</p>
                        <div className="my-3">
                            <a className="btn float-end" target="_blank" rel="noopener noreferrer" href="https://geolocip.aziz-bennane.fr">Visiter</a>
                        </div>
                    </div>                    
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <h4 className="py-1">Pricing</h4>
                        <p className="para-light">Outil de simulation de placement d'un produit face à la concurrence.<br /><br />- <u>Stack</u> : Symfony 4.3, Twig</p>
                        <div className="my-3">
                            <a className="btn float-end" target="_blank" rel="noopener noreferrer" href="https://pricing.aziz-bennane.fr">Visiter</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <h4 className="py-1">CHR 44</h4>
                        <p className="para-light">Site web pour une association de Courses Hippiques Rurales, avec d'administration.<br /><br />- <u>Stack</u> : Next 14, React 18, Redux, tailwindCSS</p>
                        <div className="my-3">
                            <a className="btn float-end" target="_blank" rel="noopener noreferrer" href="https://chr44.aziz-bennane.fr">Visiter</a>
                        </div>
                    </div>                    
                </div>
            </div> 
        </div> 
      </section> 
    </div>
  );
}

export default Realisations;
