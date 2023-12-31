import React, { useEffect, useState } from 'react';
import { FilterPart, LoadMore, Section, ShowPart } from './Gallery.styled';
import Container from 'components/Container/Container';

import FilterForm from './FilterForm/FilterForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAllthunk, getCarByPageThunk } from 'redux/cars/thunk';
import CarList from 'components/CarList/CarList';
import {
  selectAllCars,
  selectCarsPagination,
  selectFilteredCars,
  selectOnFilter,
} from 'redux/cars/selectors';
import { clearData } from 'redux/cars/slice';
import { ButtonLoadMore } from 'components/Button/Button.styled';
import { selectorIsLoading } from 'redux/root/selectors';

const Gallery = () => {
  const dispatch = useDispatch();

  const onFilter = useSelector(selectOnFilter);
  const FilteredCars = useSelector(selectFilteredCars);
  const CarsPagination = useSelector(selectCarsPagination);
  const allCars = useSelector(selectAllCars);
  const isLoading = useSelector(selectorIsLoading);
  const [page, setPage] = useState(1);
  // const isFirstRender = useRef(false);

  useEffect(() => {
    dispatch(clearData());
    dispatch(getAllthunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCarByPageThunk(page));
  }, [dispatch, page]);

  const loadMore = () => {
    if (allCars.length / 12 > page) {
      setPage(p => p + 1);
    }
  };

  const showLoadMore = allCars.length / 12 > page && !onFilter && !isLoading;
  return (
    <Section>
      <Container>
        <FilterPart>
          <FilterForm />
        </FilterPart>
        <ShowPart>
          {onFilter && <CarList data={FilteredCars} />}
          {!onFilter && <CarList data={CarsPagination} />}
        </ShowPart>
        <LoadMore>
          {showLoadMore && (
            <ButtonLoadMore type="button" onClick={loadMore}>
              Load More
            </ButtonLoadMore>
          )}
        </LoadMore>
      </Container>
    </Section>
  );
};

export default Gallery;
