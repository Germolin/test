import React from 'react';
import Card from './Card';

class Banner extends React.Component {
    render(){
        return (
            <div className='col-sm-12' style={{backgroundImage: 'url("pope.png")', height: '400px', backgroundSize: 'cover', marginTop: '55px'}}>
                {this.renderCards()}
            </div>
        )
    }
    renderCards(){
        return (
            this.props.card.map(card => {
            return(<Card card={card} onVote={this.props.onVote} key={card.name}/>)
        })
        )
    }
}

export default Banner;