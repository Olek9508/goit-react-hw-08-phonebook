import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/contacts/FilterSlice';
import { selectFilterValue } from 'redux/contacts/Selectors';
import { FilterBox, Label, Input } from './Filter.styled';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const filterInputHandler = event => {
    const inputValue = event.target.value;
    dispatch(setFilterValue(inputValue));
  };

  return (
    <section>
      <FilterBox>
        <Label>
          Find contact by name: <br/>
          <Input
            type="text"
            name="filter"
            value={filter}
            onChange={filterInputHandler}
            title="Search field"
            required
          />
        </Label>
      </FilterBox>
    </section>
  );
};

