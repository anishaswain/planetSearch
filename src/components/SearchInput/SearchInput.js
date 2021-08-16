import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import "./SearchInput.css"
import { Row, Col, Input } from 'antd';
import { fetchFullData } from '../../services/fetchData';
import { getFullDataAction } from '../../actions/getDataAction';
import { createUrl } from '../../utils/createUrl';
import { setSearchFilter } from '../../actions/setFilters';
import PropTypes from 'prop-types';

const { Search } = Input;

const SearchInput = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters)

  const onSearch = value => {
    dispatch(setSearchFilter(value))
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchFullData(createUrl(filters));
      await dispatch(getFullDataAction(data));
    };
    loadData();
  }, [filters]);

  return (
    <React.Fragment>
      <Row >
        <Col span={14} offset={5}>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

SearchInput.propTypes = {};

export default SearchInput;