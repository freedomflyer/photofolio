import * as React from 'react'
import {Card} from '../../components'
import glamorous from 'glamorous'

export namespace CardDeck {
    export interface Props {

    }

    export interface State {

    }
}

export class CardDeck extends React.Component<CardDeck.Props, CardDeck.State> {
    constructor() {
        super()
    }

    render() {
        const urls = [
            'https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/20347153_1911040072478912_5751185793183907840_n.jpg',
            'https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/19985343_465118380510668_4489859369860595712_n.jpg',
        ]

        return <div>{
            urls.map(url => {
                return <Card imgUrl={url}></Card>
            })}
        </div>
    }
}
