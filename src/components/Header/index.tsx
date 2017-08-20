import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './style.css'

export namespace Header {
    export interface Props {
        text: string
        border: boolean
    }

    export interface State {

    }
}

export class Header extends React.Component<Header.Props, Header.State> {
    constructor(props?: Header.Props, context?: any) {
        super(props, context)

    }

    render() {

        const style = {
            width: '100%',
        }

        return (
            <div>
                this is the header
            </div>
        )
    }
}
