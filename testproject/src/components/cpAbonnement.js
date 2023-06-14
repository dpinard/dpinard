import * as React from 'react';

export default class Abonnement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            perso: {
                nomParieurs: [],
                capitalAllouer: 2,
                nbPariPris: 1,
                totalSolde: 1,
                totalProfit: 1.5,
                historiqueParis: [],
                typeSuivi: 'safe,moyen,risquer,fun',
            },
            followers: {
                nomParieurs: [],
                capitalAllouer: 2,
                nbPariPris: 1,
                totalSolde: 1,
                totalProfit: 1.5,
                historiqueParis: [],
                typeSuivi: 'safe,moyen,risquer,fun',
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