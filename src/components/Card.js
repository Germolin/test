import React from 'react';
import '../styles/card.css';
class Card extends React.Component {
    render() {
        const { name, bio, upVotes, downVotes, img } = this.props.card;
        const upVotesPercentagee = this.getUpvotesPercentage(upVotes, downVotes);
        return(
            <div className='col-sm-10 col-md-5 card flex-column justify-content-end text-light' style={{backgroundImage: `url(${img})`}}>
              <h3>{name}</h3>
              <p> { bio } </p>
              <div className='row votes-container'>
                  <div 
                  style={{width: upVotesPercentagee +'%', background: '#14847f'}}
                  onClick={(e) => this.props.onVote(this.props.card,'upVotes')}> 
                    <span className='vote'><img src="thumb.png"></img></span>
                    <span>
                        {`${upVotesPercentagee}%`}
                    </span>
                  </div>
                  <div 
                  style={{width: 100-upVotesPercentagee +'%', background: '#b37914'}}
                  onClick={(e) => this.props.onVote(this.props.card,'downVotes')}
                  className="d-flex justify-content-end">
                    <span>
                        {`${100-upVotesPercentagee}%`}
                    </span>
                    <span className='vote vote-down'><img src="thumb.png"></img></span>
                  </div>
              </div>
            </div>
        );
    }
    getUpvotesPercentage(upVotes, downVotes){
        if(upVotes === 0 && downVotes === 0){
            return 50;
        }
        else {
            return Math.round((upVotes/(upVotes+downVotes)) * 100);
        }
    }
}




export default Card;
//color="#14847f" blue
//color="#b37914" yellow