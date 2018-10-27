import  React  from  'react';


const  DisplayQuote = ({ quote }) => {
    return (
        <div  className="DisplayQuote">
            <img  src={quote.image}  alt="picture"  />
            <ul>
                <li>character : {quote.character}</li>
                <li>quote : {quote.quote} </li>
                <li>direction: {quote.characterDirection} </li>
            </ul>
        </div>
    );
};

export  default  DisplayQuote;