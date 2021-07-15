import React from 'react';
import style from './style.module.sass';
import Button from '@material-ui/core/Button';

function BeerList(props) {
  const { data, viewDetails, isVisible } = props;

  const beers = data.map(function (beer) {
    return (
      <div className={isVisible === false ? style.card : style.visibleFalse} key={beer.id}>
        <h1> {beer.name}</h1>
        <img src={beer.image_url}></img>
        <p>{beer.description.slice(0, 30)}</p>
        <Button onClick={() => viewDetails(beer)} color="primary" className={style.margin}>
          More details
        </Button>
      </div>
    );
  });

  return <>{beers}</>;
}
export default BeerList;
