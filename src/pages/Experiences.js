import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../App.scss';

function Experiences() {
  return (    
    <div>
      <section className="services d-flex align-items-center experiences" id="experiences">        
        <div className="container text-light" >        
            <h2><i className="fas fa-industry"></i><span className="home_text"> Expériences</span></h2>
            <div className="row gy-4 py-2" data-aos="zoom-in">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work expLeft"
                        contentStyle={{ background: '#CB4D58', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #CB4D58' }}
                        date="Jan 2021 - Aujourd'hui"
                        iconStyle={{ background: '#CB4D58', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Nova Technology <span className='smallScreen'>[Jan 2021 - Aujourd'hui]</span></h3>
                        <h5 className="vertical-timeline-element-subtitle mb-2">Développeur d'applications web</h5>
                        <ul>
                            <li>- Développement de besoins « métier » sous Symfony 4</li>
                            <li>- Implémentation de la logique métier sous ApiPlatform</li>
                            <li>- Persistance des données sous PostgreSQL / MongoDB</li>
                            <li>- Gestion des messages applicatifs sous RabbitMQ</li>
                            <li>- Application de l'agilité avec des sprints de 15j et la « DOD »​</li>
                            <li>- Codage de tests unitaires et fonctionnels sous PHPUnit</li>
                            <li>- Respect du coding standard PSR-2/4 et configuration du Pre-commit​</li>
                            <li>- TMA corrective et évolutive sur BO développé sous React​ 16</li>
                            <li>- Maintenance de fonctions Lambda sous Node.js</li>
                            <li>- Intégration sous Bitbucket, AWS CodeCommit & CodePipeline</li>
                            <li>- Rédaction de procédures techniques et fonctionnelles​</li>
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work expRight"
                        contentStyle={{ background: '#CA4785', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #CA4785' }}
                        date="Jan 2020 - Sept 2020"
                        iconStyle={{ background: '#CA4785', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Capgemini <span className='smallScreen'>[Jan 2020 - Sept 2020]</span></h3>
                        <h5 className="vertical-timeline-element-subtitle mb-2">Développeur Drupal 8</h5>
                        <ul>
                            <li>- Refonte « from scratch » de sites web dynamiques avec leurs BO​</li>
                            <li>- Ajout de «Custom DEV» en PHP 7 sous Drupal 8</li>
                            <li>- Gestion de la configuration sous Drush </li>
                            <li>- Versionning sous Git, et intégration sous Gitlab </li>
                            <li>- Développement sous SCRUM - Jira</li>
                            <li>- Rédaction de spécifications fonctionnelles et techniques</li>
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work expLeft"
                        contentStyle={{ background: '#CB4D58', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #CB4D58' }}
                        date="Jan 2018 - Déc 2019"
                        iconStyle={{ background: '#CB4D58', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Preview <span className='smallScreen'>[Jan 2018 - Déc 2019]</span></h3>
                        <h5 className="vertical-timeline-element-subtitle mb-2">Développeur PHP</h5>
                        <ul>
                            <li>- Développement « from scratch » du BO d'un site web publique de ventre de t-shirts sous Laravel</li>      
                            <li>- Refonte d’une solution PIM via le CMS open source PIMCORE sous Symfony 3/4​</li>
                            <li>- Implémentation de l'accès aux données objet en utilisant le service REST fourni par le CMS</li>
                            <li>- Développement de modules spécifiques (BO et FO) sous Prestashop​</li>
                            <li>- Responsive design, maquettage et gestion du code source sous GIT</li>
                        </ul>
                    </VerticalTimelineElement>
                          
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work expRight"
                        contentStyle={{ background: '#CA4785', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #CA4785' }}
                        date="Oct 2016 - Déc 2017"
                        iconStyle={{ background: '#CA4785', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Logisneuf <span className='smallScreen'>[Oct 2016 - Déc 2017]</span></h3>
                        <h5 className="vertical-timeline-element-subtitle mb-2">Développeur Laravel / Vuejs</h5>
                        <ul>
                            <li>- Développement évolutif et correctif des modules de l’extranet immobilier «Logissimmo» en SAAS​</li>
                            <li>- Participation à la refonte du site web public de l’entreprise sous Laravel 5.4 / Vue.js 2</li>
                            <li>- Implémentation d’API REST coté serveur et leur consommation côté client en PHP 7</li>
                            <li>- Responsive design, tests unitaires et gestion du code source sous Git</li>
                            <li>- Encadrement de 2 collaborateurs débutants pour les initier à créer des pages web statiques responsives via bootstrap 3 et css 3</li>
                        </ul>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Experiences;
