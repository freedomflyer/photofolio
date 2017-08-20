import * as React from 'react'
import * as ReactDOM from 'react-dom'
import glamorous from 'glamorous'

export namespace ArticlePreview {
    export interface Props {

    }

    export interface State {


    }
}

export class ArticlePreview extends React.Component<ArticlePreview.Props, ArticlePreview.State> {
    constructor(props: ArticlePreview.Props, state: ArticlePreview.State) {
        super()
    }


    render() {
        const ArticlePreview = glamorous.article({
            padding: 5,
            display: 'inline-block',
        })

        return (
            <ArticlePreview>
                <h1>This is an article</h1>
                <p>This is the article body</p>
            </ArticlePreview>
        )
    }
}