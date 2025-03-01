import React from 'react';
import SearchItems from '../containers/SearchItems';
import Select from './utils/Select';
import Input from './utils/Input';
import Button from './utils/Button';
import S from './Search.module.css';

function Search(props) {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    props.fetchItems();
  };

  const handleSectionChange = id => {
    props.setSectionId(id);

    if (props.searchTerm){
      props.fetchItems()
    }
  }

  return (
    <>
      <div className={S.searchPanel}>
        <Select
          options={props.sections.map(section => ({value: section.id, label: section.name}))}
          onChange={handleSectionChange}
          value={props.id.toString()}
        />
        <div className={S.searchWrapper}>
          <form className={S.search} onSubmit={handleSearchSubmit} data-cy="search-form">
            <Input
              onChange={(e) => props.setSearchTerm(e.target.value)}
              value={props.searchTerm}
              placeholder='Rechercher...'
              sufixed={true}
            />
            <Button type='submit' prefixed={true}>Rechercher</Button>
          </form>
        </div>
      </div>
      <SearchItems />
    </>
  );
}

export default Search;
