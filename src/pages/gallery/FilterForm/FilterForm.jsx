import { useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { DropDownBrands, FormST, LabelST } from './FilterForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAllthunk } from 'redux/cars/thunk';
import {
  selectAllBrands,
  selectFilterBrands,
  selectFilterFrom,
  selectFilterPrice,
  selectFilterTo,
  selectorFilteredBrands,
} from 'redux/cars/selectors';
import { setFilterBrand, setOnFilter } from 'redux/cars/slice';
import InputBrands from './FilterComponents/InputBrands';
import InputPrice from './FilterComponents/InputPrice';
import InputMileage from './FilterComponents/InputMileage';
import { ButtonBase } from 'CommonStyle/Button.styled';

const FilterForm = () => {
  const dispatch = useDispatch();
  const filterBrand = useSelector(selectFilterBrands);
  const filterPrice = useSelector(selectFilterPrice);
  const filterFrom = useSelector(selectFilterFrom);
  const filterTo = useSelector(selectFilterTo);

  const {
    values,
    touched,
    errors,
    setFieldValue,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      brand: filterBrand,
      price: filterPrice,
      from: filterFrom,
      to: filterTo,
    },
    onSubmit: values => {
      const data = {
        brand: values.brand,
        price: values.price,
        from: Number(values.from.split(',').join('')),
        to: Number(values.to.split(',').join('')),
      };
      if (!values.brand & !values.price & !values.from & !values.to) {
        toast.info(`Select at least one option!`);
        return;
      }
      dispatch(setOnFilter(data));
    },
  });

  return (
    <FormST onSubmit={handleSubmit}>
      <InputBrands values={values} setFieldValue={setFieldValue} />
      <InputPrice values={values} setFieldValue={setFieldValue} />
      <InputMileage values={values} setFieldValue={setFieldValue} />
      <ButtonBase type="submit">Search</ButtonBase>
      <ButtonBase
        type="button"
        onClick={() => {
          dispatch(setOnFilter(''));
          resetForm({
            values: {
              brand: '',
              price: '',
              from: '',
              to: '',
            },
          });
        }}
      >
        Clear filter
      </ButtonBase>
    </FormST>
  );
};

export default FilterForm;
