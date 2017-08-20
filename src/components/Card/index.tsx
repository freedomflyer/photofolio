import * as React from 'react'
import * as ReactDOM from 'react-dom'
import glamorous from 'glamorous'
import { Link } from 'react-router-dom'

export namespace Card {
    export interface Props {
        imgUrl: string;
    }

    export interface State {


    }
}

export class Card extends React.Component<Card.Props, Card.State> {
    constructor(props: Card.Props, state: Card.State) {
        super()
    }

    render() {
        const Card = glamorous.div({
            width: 355,
            height: 480,
            boxShadow: '0 20px 20px rgba(0,0,0,.08)',
            transition: 'all 180ms cubic-bezier(.02, .01, .47, 1)',
            margin: 20,
            padding: 20,
            border: '1px solid #eee',
            display: 'inline-block',
            borderRadius: 3,
            '&:hover' : {
                transform: 'translate(0, -20px)',
                cursor: 'pointer',
                boxShadow: '0 40px 40px rgba(0,0,0,.16)',
            }
        })

        const Img = glamorous.img({
            width: '100%',
        })

        const CardFooter = glamorous.div({
            height: 80,
        })

        return <Card>
            <Img src={this.props.imgUrl} alt=""></Img>
            <CardFooter>
                <Link to='/detail'>Details</Link>
            </CardFooter>
        </Card>
    }
}