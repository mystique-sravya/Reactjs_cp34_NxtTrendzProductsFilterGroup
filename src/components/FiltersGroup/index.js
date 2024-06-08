import {IoIosSearch} from 'react-icons/io'
import './index.css'

const FiltersGroup = props => {
  // Filter

  const renderRatingProducts = () => {
    const {changeRating, activeRatingId, ratingsList} = props
    const {ratingId} = ratingsList
    const onClickRatingProducts = () => {
      changeRating(ratingId)
    }
    const isActiveRating = activeRatingId === ratingId
    const ratingClassName = isActiveRating ? `and-up active-rating` : `and-up`
    return (
      <>
        <h1 className="rating-heading">Rating</h1>
        <ul className="ratings-list">
          {ratingsList.map(rating => (
            <li
              className="rating-item"
              key={rating.ratingId}
              onClick={onClickRatingProducts}
            >
              <img
                src={rating.imageUrl}
                alt={`rating ${rating.ratingId}`}
                className="rating-img"
              />
              <p className={ratingClassName}>& up</p>
            </li>
          ))}
        </ul>
      </>
    )
  }

  //   category

  const renderProductsCategory = () => {
    const {categoryOptions, changeCategory, activeCategoryId} = props
    const {categoryId} = categoryOptions
    const isActive = activeCategoryId === categoryId
    const onClickChangeCategory = () => {
      changeCategory(categoryId)
    }
    const categoryClassName = isActive
      ? `category-name active-category-name`
      : `category-name`
    return (
      <>
        <h1 className="category-heading">Category</h1>
        <ul className="categories-list">
          {categoryOptions.map(category => (
            <li
              key={category.categoryId}
              className={categoryClassName}
              onClick={onClickChangeCategory}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </>
    )
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    const onEnterSearchInput = event => {
      const {enteredSearchInput} = props
      if (event.key === 'Enter') {
        enteredSearchInput()
      }
    }

    const onChangeSearchInput = event => {
      const {changeSearchInput} = props
      changeSearchInput(event.target.value)
    }
    return (
      <div className="search-input-container">
        <input
          type="search"
          value={searchInput}
          className="search-input"
          onChange={onChangeSearchInput}
          placeholder="Search"
          onKeyDown={onEnterSearchInput}
        />
        <IoIosSearch className="search-icon" />
      </div>
    )
  }
  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductsCategory()}
      {renderRatingProducts()}
      <div>
        <button
          type="button"
          className="clear-filters-btn"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
