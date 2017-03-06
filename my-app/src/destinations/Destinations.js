import React, { Component } from 'react';
import logo from '../logo.svg';
import './Destinations.css';
import script from './script.js';


class Destinations extends Component {
  render() {
    return (
      <div className="Destinations">


      <div id="container">
              <section>
                  <h2>Top destination</h2>
                  <div className="dest-menu-deroulant">


                      <div id="btn-train" onclick="growDiv()">
                          <i id="dest-caret-train" className="fa fa-caret-right" aria-hidden="true"></i> Train
                      </div>


                      <div id="btn-hotel" onclick="growDiv()">
                          <i id="dest-caret-hotel" className="fa fa-caret-right" aria-hidden="true"></i> Hôtel
                      </div>

                      <div id="btn-weekend" onclick="growDiv()">
                          <i id="dest-caret-weekend" className="fa fa-caret-right" aria-hidden="true"></i> Week-end
                      </div>

                      <div id="btn-vol" onclick="growDiv()">
                          <i id="dest-caret-vol" className="fa fa-caret-right" aria-hidden="true"></i> Vol
                      </div>

                      <div id="btn-destinations" onclick="growDiv()">
                          <i id="dest-caret-destinations" className="fa fa-caret-right" aria-hidden="true"></i> Destinations
                      </div>


                  </div>

                  <div>
                    <div id="grow">
                      <div className="measuringWrapper">
                        <div className="dest-train">
                          <p><a href="#">Train Paris Bordeaux</a>
                          <a href="#">Train Paris Marseille</a>
                          <a href="#">Train Toulouse Paris</a>
                          <a href="#">Train Paris Lyon</a>
                          <a href="#">Train Paris Lille</a>
                          <a href="#">Train Paris Strasbourg</a>
                          <a href="#">Train Nantes Paris</a>
                          <a href="#">Train Montpellier Paris</a>
                          <a href="#">Train Rennes Paris</a>
                          <a href="#">Train Lille Bruxelles</a></p>
                        </div>
                      </div>
                    </div>
                    <div id="grow">
                      <div className="measuringWrapper">
                      <div className="dest-hotel">
                          <p><a href="#">Hôtel Paris</a>
                          <a href="#">Hôtel Barcelone</a>
                          <a href="#">Hôtel Amsterdam</a>
                          <a href="#">Hôtel Londres</a>
                          <a href="#">Hôtel Lyon</a>
                          <a href="#">Hôtel Marseille</a>
                          <a href="#">Hôtel New York</a>
                          <a href="#">Hôtel Rome</a>
                          <a href="#">Hôtel Bruxelles</a>
                          <a href="#">Hôtel Strasbourg</a></p>
                      </div>
                    </div>
                  </div>
                  <div id="grow">
                    <div className="measuringWrapper">
                      <div className="dest-weekend">
                        <p><a href="#">Week-end Paris</a>
                          <a href="#">Week-end Prague</a>
                          <a href="#">Week-end Amsterdam</a>
                          <a href="#">Week-end Londres</a>
                          <a href="#">Week-end Marrakech</a>
                          <a href="#">Week-end Barcelone</a>
                          <a href="#">Week-end Venise</a>
                          <a href="#">Week-end Rome</a>
                          <a href="#">Week-end Lisbonne</a>
                          <a href="#">Week-end New York</a></p>
                      </div>
                    </div>
                  </div>
                  <div id="grow">
                    <div className="measuringWrapper">
                      <div className="dest-vol">
                        <p>  <a href="#">Vol Paris</a>
                          <a href="#">Vol Barcelone</a>
                          <a href="#">Vol Amsterdam</a>
                          <a href="#">Vol Londres</a>
                          <a href="#">Vol Lyon</a>
                          <a href="#">Vol Marseille</a>
                          <a href="#">Vol New York</a>
                          <a href="#">Vol Rome</a>
                          <a href="#">Vol Bruxelles</a>
                          <a href="#">Vol Strasbourg</a></p>
                      </div>
                    </div>
                  </div>
                  <div id="grow">
                    <div className="measuringWrapper">
                      <div className="dest-destinations">
                          <p><a href="#">Paris</a>
                          <a href="#">Barcelone</a>
                          <a href="#">Amsterdam</a>
                          <a href="#">Londres</a>
                          <a href="#">Lyon</a>
                          <a href="#">Marseille</a>
                          <a href="#">New York</a>
                          <a href="#">Rome</a>
                          <a href="#">Bruxelles</a>
                          <a href="#">Strasbourg</a></p>
                      </div>
                    </div>
                  </div>
                  </div>
              </section>
          </div>
          <div id="container-conditions">
              <section className="dest-conditions">
                  <div>
                      <p>(1) (2) Voir les conditions des offres</p>
                  </div>
                  <div>
                      <div id="btn-masquer-conditions"  onclick="growCond()">
                      <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                      </div>
                  </div>
                </section>
                <section id="grow-cond">
                    <div className="measuringCond">
                      <div className="dest-conditions-texte">

              <h3>OFFRE EXCEPTIONNELLE :</h3>

              <p>Tarif promotionnel de 10 euros TTC valable pour l’achat d’un billet TGV pour un enfant âgé de 4 à 11 ans à la date du trajet. L’enfant doit être accompagné d’un adulte durant le trajet (dans la limite de deux enfants par adulte). Les billets de
                  l’enfant et de l’adulte doivent faire l’objet d’une seule et même commande. Offre valable pour un aller simple sans correspondance en 2nde classe en TGV (hors OUIGO et iDTGV), sur une sélection de destinations en France, dans la limite des
                  places disponibles. Billets en vente du 21 février au 6 mars 2017 inclus, pour des voyages du 31 mars au 1er mai 2017 inclus. Billets non échangeables et non remboursables. Offre non cumulable avec toute autre promotion en cours, code avantage
                  ou tarif réduit SNCF. Paiement en ligne obligatoire avec billet à imprimer soi-même, envoi gratuit du billet à domicile, retrait en borne libre service, en gares françaises, ou en boutique SNCF Rail Europe (frais de 10 euros par référence
                  de dossier).</p>


              <h3>OUI AUX PRIX INOUIS :</h3>

      <p>(1) Prix TTC, par personne, à partir de, pour un aller avec Ouibus, sur des ventes et circulations du 5 janvier au 2 février 2017, sur une sélection de destinations, sous réserve de disponibilités. Billets échangeables sous conditions : pour les modifications de nom, prénom et de la date de naissance, échange gratuit jusqu’à 12h après l’achat, au-delà : frais d’échange de 10€ par téléphone et de 5€ par Internet, par passager et par trajet. Billets non remboursables. Paiement en ligne. Offre non cumulable avec toute autre promotion en cours.</p>


      <h3>LOCATION DE VOITURE :</h3>

              <p>Prix TTC à partir de pour une location de catégorie économique aux dates de voyage indiquées et sur une sélection de destinations. Les frais supplémentaires liés à des demandes additionnelles ne sont pas inclus. Offre soumise à conditions et valable
                  sous réserve de disponibilité.</p>


              <h3>VENTE FLASH HÔTEL / VOL+HÔTEL :</h3>

              <p>Taux de réduction maximal, à partir de, calculé sur la base du tarif de référence hors taxes, d'un hébergement en chambre double, sur une sélection de dates. Offre valable pour des réservations effectuées entre le 28 Février et le 2 Mars 2017.
                  Pour bénéficier de cette offre, un nombre minimum de nuit est requis. Offre soumise à conditions et valable sous réserve de disponibilité. Taux de réduction non applicable à l'ensemble des nuits comprises dans le séjour.</p>

              <h3>PARTEZ EN FAMILLE AVEC TGV À PRIX MAGIQUE :</h3>

              <p>Tarif promotionnel de 10 euros TTC valable pour l’achat d’un billet TGV pour un enfant âgé de 4 à 11 ans à la date du trajet. L’enfant doit être accompagné d’un adulte durant le trajet (dans la limite de deux enfants par adulte). Les billets de
                  l’enfant et de l’adulte doivent faire l’objet d’une seule et même commande. Offre valable pour un aller simple sans correspondance en 2nde classe en TGV (hors OUIGO et iDTGV), sur une sélection de destinations en France, dans la limite des
                  places disponibles. Billets en vente du 21 février au 6 mars 2017 inclus, pour des voyages du 31 mars au 1er mai 2017 inclus. Billets non échangeables et non remboursables. Offre non cumulable avec toute autre promotion en cours, code avantage
                  ou tarif réduit SNCF. Paiement en ligne obligatoire avec billet à imprimer soi-même, envoi gratuit du billet à domicile, retrait en borne libre-service, en gares françaises, ou en boutique SNCF Rail Europe (frais de 10 euros par référence
                  de dossier).</p>

              <h3>+ DE 9 VOYAGEURS, JUSQU'À -65% :</h3>

              <p>Economie maximale calculée pour un tarif Jeune en groupe (de 12 à 27 ans inclus). Les tarifs groupes (enfants, jeunes, adultes) sont disponibles seulement sur certains trains, jusqu'à 24 heures avant le départ du train, et dans la limite des billets
                  disponibles à ces tarifs.</p>

                      <p>Copyright © Getty Images, Thinkstock, Photononstop</p>
                      </div>
                    </div>

                </section>
              </div>






      </div>
    );
  }
}

export default Destinations;
