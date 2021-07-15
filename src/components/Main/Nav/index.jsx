import React, { useState } from 'react';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import MenuIcon from '@material-ui/icons/Menu';
import style from './style.module.sass';
import { BrowserRouter as BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import BeerSort from './Beer-sort';

function Nav(props) {
  const { abvSorting, nameSorting, defaultSorting } = props;
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const showSortHandler = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };
  return (
    <div className={style.nav}>
      <ul>
        <li>
          <NavLink to="/pizzabeers" activeStyle={{ color: 'orange' }}>
            <LocalPizzaIcon color="action" />
            Beers that pair with pizza
          </NavLink>
        </li>
        <li>
          <NavLink to="/steackbeers" activeStyle={{ color: 'orange' }}>
            <LocalDiningIcon color="action" />
            Beers that pair with steak
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeStyle={{ color: 'orange' }}>
            <AllInclusiveIcon color="action" />
            All beers
          </NavLink>
        </li>
        <li className={style.menu}>
          <MenuIcon onClick={showSortHandler} />
        </li>
      </ul>
      <BeerSort
        abvSorting={abvSorting}
        nameSorting={nameSorting}
        defaultSorting={defaultSorting}
        isVisibleMenu={isVisibleMenu}
      />
    </div>
  );
}

export default Nav;
