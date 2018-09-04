import React from 'react'

class Main extends React.Component<any, any> {

    constructor (props: any) {
        super(props)
        this.state = {}
    }

    componentDidMount () {
        this.getVideos()
    }

    async getVideos () {
        const data = await fetch('http://localhost:8000/scratchpad').then((r:any) => r.json())
        this.setState({data})
    }

    componentDidCatch (e: Error) {
        this.setState({error: e})
    }

    render () {
        const {data=null, error} = this.state
        if (error) {
            return <div>Error</div>
        }
        return <div style={{whiteSpace: 'pre'}}>Hello!: <br/>{JSON.stringify(data, null, 2)}</div>
    }
}

export default Main