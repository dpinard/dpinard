import * as React from 'react';

export default class Capital extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            perso: {
                misePariPerso: 54,
                nbPronoRealiser: 2,
                nbPariGains: 1,
                nbPariPerdu: 1,
                gainEuro: 1.5,
                perteEuro: 1,
                totalSolde: 0.5,
                totalProfit: 0.5,
            },
            follow: {
                misePariPerso: 54,
                nbPronoRealiser: 2,
                nbPariGains: 1,
                nbPariPerdu: 1,
                gainEuro: 1.5,
                perteEuro: 1,
                totalSolde: 0.5,
                totalProfit: 0.5,
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