import React from 'react';
import Card from './Card';

class CardList extends React.Component {
    render() {
        return(
            <div className='col-sm-9'>
                {this.renderCards()}
            </div>
        )
        
    }

    onVote(){}

    renderCards(){
        return (
            this.props.cards.map(card => <Card card={card} onVote={this.props.onVote} key={card.name}/>)
        )
    }

}

export default CardList;