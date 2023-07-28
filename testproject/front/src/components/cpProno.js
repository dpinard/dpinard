import * as React from 'react';

export default class Pronostics extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            perso: {
                etat: 'en attente, en cours, echu',
                typeParis: 'safe, moyen, risquer, fun',
                datePriseParis: '01/02/03',
                typeSport: 'basket, foot, etc',
                dateParis: '02/03/04',
                coteParis: 1.75,
                montantEngagerParis: 10,
                choixOddsParis: '1N2',
                gP: 17.5,
                profit: 7.5
            },
            followers: {
                etat: 'en attente, en cours, echu',
                typeParis: 'safe, moyen, risquer, fun',
                datePriseParis: '01/02/03',
                typeSport: 'basket, foot, etc',
                dateParis: '02/03/04',
                coteParis: 1.75,
                montantEngagerParis: 10,
                choixOddsParis: '1N2',
                gP: 17.5,
                profit: 7.5
            }
        }
    }

    render() {
        return (
            <div>
                {
                    Object.keys(this.state.perso).map((key) => <li>{key}: {this.state.perso[key]}</li>)
                }

            </div>
        )
    }
}