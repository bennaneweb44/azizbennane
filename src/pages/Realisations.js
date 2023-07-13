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
                        <h4 className="py-1">Blog</h4>
                        <p className="para-light">Blog pour des développeurs débutants à confirmés.<br />- <u>Stack</u> : Drupal 9, PHP 7.4</p>
                        <div className="my-3">
                            <a className="btn float-end" target="_blank" rel="noopener noreferrer" href="https://blog.bennaneweb.fr">Visiter</a>
                        </div>
                    </div>                    
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <h4 className="py-1">My Spend</h4>
                        <p className="para-light">Outil de gestion des dépenses et charges mensuelles.<br />- <u>Stack</u> : Symfony 5.2, Vuejs 2</p>
                        <div className="my-3">
                            <a className="btn float-end" target="_blank" rel="noopener noreferrer" href="https://myspend.bennaneweb.fr">Visiter</a>
                        </div>
                    </div>                    
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <h4 className="py-1">Geolocip</h4>
                        <p className="para-light">Ce site permet de géolocaliser des adresses IP publiques.<br />- <u>Stack</u> : React 17, Leaflet 1.7</p>
                        <div className="my-3">
                            <a className="btn float-end" target="_blank" rel="noopener noreferrer" href="https://geolocip.bennaneweb.fr">Visiter</a>
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
