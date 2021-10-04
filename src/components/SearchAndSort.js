const SearchAndSort = ({ search, setSearch, setSort }) => {
    return (
        <div className="SearchAndSort">
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    id="search"
                    type="text"
                    role="searchbox"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <select onChange={(e) => setSort(e.target.value)}>
                <option value="">Creation Date</option>
                <option value="name">Name</option>
            </select>
        </div>
    )
}

export default SearchAndSort