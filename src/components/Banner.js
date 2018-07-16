import React from 'react';
import Card from './Card';
class Banner extends React.Component {
    render(){
        const { card } = this.props;
        console.log(card)
        return (
            <div className='col-sm-12' style={{backgroundImage: 'url("pope.png")', height: '400px', backgroundSize: 'cover'}}>
                {this.renderCards()}
            </div>
        )
    }
    renderCards(){
        return (
            this.props.card.map(card => {
                card.img = null;
            return(<Card card={card} onVote={this.props.onVote} key={card.name}/>)
        })
        )
    }
}

export default Banner;