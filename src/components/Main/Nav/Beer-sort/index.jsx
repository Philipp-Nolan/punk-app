import React from 'react';
import style from './style.module.sass';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

function BeerSort(props) {
  const { isVisibleMenu, abvSorting, nameSorting, defaultSorting } = props;
  return (
    <div className={isVisibleMenu === true ? style.sort : style.visibleFalse}>
      <div>
        <FormLabel component="legend">ABV sorting</FormLabel>
        <RadioGroup aria-label="beersort" name="beersort1" onChange={abvSorting}>
          <FormControlLabel value="abv_ascending" control={<Radio />} label="abv_ascending" />
          <FormControlLabel value="abv_descending" control={<Radio />} label="abv_descending" />
        </RadioGroup>
      </div>
      <div>
        <FormLabel component="legend">Name sorting</FormLabel>
        <RadioGroup aria-label="beersort" name="beersort2" onChange={nameSorting}>
          <FormControlLabel value="name_ascending" control={<Radio />} label="name_ascending" />
          <FormControlLabel value="name_descending" control={<Radio />} label="name_descending" />
        </RadioGroup>
      </div>
      <Button onClick={defaultSorting} variant="outlined" color="secondary">
        undo sorting
      </Button>
    </div>
  );
}
export default BeerSort;
