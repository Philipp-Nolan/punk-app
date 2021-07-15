import React from 'react';
import style from './style.module.sass';
import Button from '@material-ui/core/Button';

function BeerCard(props) {
  const { isVisible, selectBeer, closeModalHandler } = props;

  return (
    <div className={isVisible === true ? style.modal : style.visibleFalse}>
      <div className={style.window}>
        <div className={style.wrapper}>
          <img src={selectBeer.image_url}></img>
        </div>
        <div className={style.container}>
          <ul>
            <li>
              <b> Name: </b> {selectBeer.name}
            </li>
            <li>
              <b> Tagline: </b> {selectBeer.tagline}
            </li>
            <li>
              <b> ABV: </b>
              {selectBeer.abv}
            </li>
            <li className={style.scroll}>
              <b>Description: </b>
              {selectBeer.description}
            </li>
            <li>
              <b>Food Pairing: </b>
              {selectBeer.food_pairing}
            </li>
          </ul>
        </div>
        <Button onClick={() => closeModalHandler()} color="secondary" className={style.margin}>
          Х
        </Button>
      </div>
    </div>
  );
}
export default BeerCard;
