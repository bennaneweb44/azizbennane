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
                            <li>- Refonte d’un backend PHP existant « from scratch » vers Symfony 4.4​</li>
                            <li>- Implémentation des ressources PHP en REST avec API platform​</li>
                            <li>- Tests unitaires et fonctionnels « end to end » sous PHPUnit​</li>
                            <li>- Respect du coding standard PSR-2/4 et configuration du Pre-commit​</li>
                            <li>- Développement interface d’administration sous React 16 et React-admin​</li>
                            <li>- TMA corrective et évolutive sur une application de gestion des livres sous React​</li>
                            <li>- Utilisation de Git, Gitlab, AWS et docker-compose pour l’industrialisation​</li>
                            <li>- Planification des sprints selon les demandes client et de la « defintion of done »​</li>
                            <li>- Agilité : Participation au « Sprint Review » et au « Sprint Retro » avec le client​</li>
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
                            <li>- Refonte d’un backend PHP existant « from scratch » vers Symfony 4.4​</li>
                            <li>- Implémentation des ressources PHP en REST avec API platform​</li>
                            <li>- Tests unitaires et fonctionnels « end to end » sous PHPUnit​</li>
                            <li>- Respect du coding standard PSR-2/4 et configuration du Pre-commit​</li>
                            <li>- Développement interface d’administration sous React 16 et React-admin​</li>
                            <li>- TMA corrective et évolutive sur une application de gestion des livres sous React​</li>
                            <li>- Utilisation de Git, Gitlab, AWS et docker-compose pour l’industrialisation​</li>
                            <li>- Planification des sprints selon les demandes client et de la « defintion of done »​</li>
                            <li>- Agilité : Participation au « Sprint Review » et au « Sprint Retro » avec le client​</li>
                            <li>- Rédaction de procédures techniques et fonctionnelles​</li>
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work expLeft"
                        contentStyle={{ background: '#CB4D58', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #CB4D58' }}
                        date="Jan 2021 - Aujourd'hui"
                        iconStyle={{ background: '#CB4D58', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Preview <span className='smallScreen'>[Jan 2018 - Déc 2019]</span></h3>
                        <h5 className="vertical-timeline-element-subtitle mb-2">Développeur PHP</h5>
                        <ul>
                            <li>- Refonte d’un backend PHP existant « from scratch » vers Symfony 4.4​</li>
                            <li>- Implémentation des ressources PHP en REST avec API platform​</li>
                            <li>- Tests unitaires et fonctionnels « end to end » sous PHPUnit​</li>
                            <li>- Respect du coding standard PSR-2/4 et configuration du Pre-commit​</li>
                            <li>- Développement interface d’administration sous React 16 et React-admin​</li>
                            <li>- TMA corrective et évolutive sur une application de gestion des livres sous React​</li>
                            <li>- Utilisation de Git, Gitlab, AWS et docker-compose pour l’industrialisation​</li>
                            <li>- Planification des sprints selon les demandes client et de la « defintion of done »​</li>
                            <li>- Agilité : Participation au « Sprint Review » et au « Sprint Retro » avec le client​</li>
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
                        <h3 className="vertical-timeline-element-title">Logisneuf <span className='smallScreen'>[Oct 2016 - Déc 2017]</span></h3>
                        <h5 className="vertical-timeline-element-subtitle mb-2">Développeur Laravel / Vuejs</h5>
                        <ul>
                            <li>- Refonte d’un backend PHP existant « from scratch » vers Symfony 4.4​</li>
                            <li>- Implémentation des ressources PHP en REST avec API platform​</li>
                            <li>- Tests unitaires et fonctionnels « end to end » sous PHPUnit​</li>
                            <li>- Respect du coding standard PSR-2/4 et configuration du Pre-commit​</li>
                            <li>- Développement interface d’administration sous React 16 et React-admin​</li>
                            <li>- TMA corrective et évolutive sur une application de gestion des livres sous React​</li>
                            <li>- Utilisation de Git, Gitlab, AWS et docker-compose pour l’industrialisation​</li>
                            <li>- Planification des sprints selon les demandes client et de la « defintion of done »​</li>
                            <li>- Agilité : Participation au « Sprint Review » et au « Sprint Retro » avec le client​</li>
                            <li>- Rédaction de procédures techniques et fonctionnelles​</li>
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
