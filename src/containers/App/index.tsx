import * as React from 'react'
import {Header, ArticlePreview, CardDeck, CardDetail} from '../../components'
import glamorous from 'glamorous'
import { Switch, Route } from 'react-router-dom'


export namespace App {
    export interface Props {

    }

    export interface State {

    }
}

export class App extends React.Component<App.Props, App.State> {
    constructor() {
        super()
    }

    render() {
        const props: Header.Props = {
            text: 'text',
            border: false,
        }

        const StyledArticlePreview = glamorous(ArticlePreview)({
            backgroundColor: 'red',
        })

        return (
            <div>
                <div>Header</div>
                <Switch>
                    <Route exact path='/' component={CardDeck}/>
                    <Route path='/detail' component={CardDetail}/>
                </Switch>
                <div>Footer</div>
            </div>
        )
    }
}
