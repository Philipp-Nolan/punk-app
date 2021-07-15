import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import BeerList from './Beer-list';
import BeerCard from './Beer-card';
import Nav from './Nav';
import style from './style.module.sass';

function Main(props) {
  const { link } = props;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [data, setData] = useState([]);
  const [selectBeer, setSelectBeer] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [abvSort, setAbvSort] = useState('');
  const [nameSort, setNameSort] = useState('');
  const [defaulData, setDefaultData] = useState(data);

  const viewDetails = (beer) => {
    setIsVisible(true);
    setSelectBeer(beer);
  };

  const closeModalHandler = () => {
    setIsVisible(false);
  };

  const abvSorting = (event) => {
    setAbvSort(event.target.value);
    if (abvSort === 'abv_ascending') {
      data.sort((a, b) => (a.abv > b.abv ? 1 : -1));
    } else {
      data.reverse();
    }
  };

  const nameSorting = (event) => {
    setNameSort(event.target.value);
    if (nameSort === 'name_ascending') {
      data.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      data.reverse();
    }
  };

  const defaultSorting = () => {
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get(link)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setIsLoaded(false));
  }, [setData]);

  if (isLoaded === true) {
    return <LinearProgress className={style.load} />;
  }

  if (error)
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Failed to get data — <strong>Звоните фиксикам!</strong>
      </Alert>
    );
  return (
    <>
      <BeerList
        abvSort={abvSort}
        nameSort={nameSort}
        isVisible={isVisible}
        viewDetails={viewDetails}
        data={data}
      />
      <BeerCard
        closeModalHandler={closeModalHandler}
        selectBeer={selectBeer}
        isVisible={isVisible}
      />

      <Nav abvSorting={abvSorting} nameSorting={nameSorting} defaultSorting={defaultSorting} />
    </>
  );
}
export default Main;
