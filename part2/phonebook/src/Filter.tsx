const Filter = ({handleChangeFilter}) => (
    <>
        <h2 style={{display: 'inline-block', marginRight: '1rem', marginBottom: '1rem'}}>Filter by name:</h2>
        <label>Name<input onChange={handleChangeFilter} /></label>
    </>
);

export default Filter;