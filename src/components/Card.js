import React from 'react';
import '../styles/card.css';
class Card extends React.Component {
    render() {
        
        return(
            <div className='col-sm-4 card flex-column justify-content-end'>
              <h1>Kanye West</h1>
              <p> test ets,fmnsdlkf dfgj ksd sa;dsfdsd dkd dsd </p>
              <div className='row votes-container'>
                  <div style={styles.upVote}>hehe</div>
                  <div style={styles.downVote}></div>
              </div>
            </div>
        );
    }
}
const upVotesPercentage = 65;
const downVotesPercentage = 35;
const styles = {
    card: {

    },
    upVote: {
        width: `${upVotesPercentage}%`,
        background: '#14847f'
    },
    downVote: {
        width: `${downVotesPercentage}%`,
        background: '#b37914'
    }
}



export default Card;
//color="#14847f" blue
//color="#b37914" yellow