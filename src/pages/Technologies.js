import React from 'react';
import '../App.scss';

function Technologies() {
  return (    
    <div>
      <section className="services d-flex align-items-center " id="technologies">        
        <div className="container text-light mt-5">        
            <h2><i className="fas fa-microchip"></i><span className="home_text"> Technologies</span></h2>
            <div className="row gy-4 py-2" data-aos="zoom-in">
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <i className="fas fa-code fa-2x p-0"></i>
                        <h4 className="py-2">Backend</h4>
                        <ul className="para-light">
                            <li>- <b>Frameworks</b> : Symfony 4+, Api Platform</li>
                            <li>- <b>Architecture</b> : SOLID, DDD</li>
                            <li>- <b>CMS</b> : Drupal 8+, Pimcore</li>
                            <li>- <b>Planification</b> : Commandes, Cron</li>
                            <li>- <b>Automatisation</b> : ScriptRunner, Makefile</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <i className="fas fa-mobile-alt fa-2x p-0"></i>
                        <h4 className="py-2">Frontend</h4>
                        <ul className="para-light">
                            <li>- <b>Frameworks</b> : React, Next, Vue 2</li>
                            <li>- <b>Web</b> : HTML, CSS, Bootstrap</li>
                            <li>- <b>State</b> : Redux toolkit, Vuex</li>
                            <li>- <b>Mobile</b> : React Native, Expo</li>
                            <li>- <b>Build</b> : Webpack, Metro, APK</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <i className="fas fa-database fa-2x p-0"></i>
                        <h4 className="py-2">Bases de données</h4>
                        <ul className="para-light">
                            <li>- <b>Language</b> : SQL, Procédures stockées</li>
                            <li>- <b>ORM</b> : Doctrine</li>
                            <li>- <b>SGBD</b> : MySQL, PostgreSQL</li>
                            <li>- <b>No SQL</b> : MongoDB</li>
                            <li>- <b>Tech</b> : MPD, Agrégation, Sous-requêtes</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <i className="fas fa-code-branch fa-2x p-0"></i>
                        <h4 className="py-2">Versionning & Intégration</h4>
                        <ul className="para-light">
                            <li>- <b>Versionning</b> : Git</li>
                            <li>- <b>Dépôts</b> : Gitlab, Github, Bitbucket, AWS CC</li>
                            <li>- <b>CI/CD</b> : Gitlab, Bitbucket, AWS CP</li>
                            <li>- <b>Todo</b> : Todo ...</li>
                            <li>- <b>Todo</b> : Todo ...</li>
                        </ul>
                    </div>                    
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <i className="fas fa-check fa-2x p-0"></i>
                        <h4 className="py-2">Tests & Clean code</h4>
                        <ul className="para-light">
                            <li>- <b>Frameworks</b> : PhpUnit, Cypress</li>
                            <li>- <b>Architecture</b> : TDD, BDD</li>
                            <li>- <b>Qualité</b> : Phpcs, PhpStan, Eslint, SonarQube</li>
                            <li>- <b>Standards</b> : PSR-1, PSR-4, PSR-12</li>
                            <li>- <b>Autre</b> : Docs techniques et fonctionnelles</li>
                        </ul>
                    </div>                    
                </div>
                <div className="col-lg-4">
                    <div className="card bg-transparent">
                        <i className="fas fa-bezier-curve fa-2x p-0"></i>
                        <h4 className="py-2">Outils & conception</h4>
                        <ul className="para-light">
                            <li>- <b>UML</b> : UC, MCD, Classes</li>
                            <li>- <b>Agilité et collaboration</b> : Jira, Confluence</li>
                            <li>- <b>Patterns</b> : Singleton, Repository</li>
                            <li>- <b>Dépendances</b> : Composer, Npm, Yarn</li>
                            <li>- <b>Configuration</b> : Yaml, Drush, Makefile</li>
                        </ul>
                    </div>                    
                </div>
            </div> 
        </div> 
      </section> 
    </div>
  );
}

export default Technologies;
