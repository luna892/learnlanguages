import React from 'react'

class EmbeddedYouTube extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {embedId} = this.props

        return (
            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="Embedded YouTube"                  
                />
            </div>
        )
    }
}

export default EmbeddedYouTube;