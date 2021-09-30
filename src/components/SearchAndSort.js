const SearchAndSort = ({ search, setSearch }) => {
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
        </div>
    )
}

export default SearchAndSort
