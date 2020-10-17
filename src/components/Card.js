import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className="bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5 tc">
            <img alt='robofriends' src={`https://robohash.org/${id}?size=200x200`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default Card;