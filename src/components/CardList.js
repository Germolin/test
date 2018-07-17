import React from 'react';
import Card from './Card';

class CardList extends React.Component {
    render() {
        return(
            <div className='col-sm-12 d-flex justify-content-center flex-wrap'>
                {this.renderCards()}
            </div>
        )
    }

    renderCards(){
        return (
            this.props.cards.map(card => <Card card={card} onVote={this.props.onVote} key={card.name}/>)
        )
    }

}

export default CardList;