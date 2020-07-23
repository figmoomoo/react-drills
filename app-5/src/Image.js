import React, {Component} from 'react'

class Image extends Component {
    render(){
        return(
            <div className="Image">
                <img src={this.props.url}/>
            </div>
        )
    }
}

export default Image;