import React from 'react';
import Main from '../../components/Main';
import style from './style.module.sass';

function beersPage() {
  const link = 'https://api.punkapi.com/v2/beers?food=steak';

  return (
    <div className={style.pageBeer}>
      <Main link={link} />
    </div>
  );
}
export default beersPage;
