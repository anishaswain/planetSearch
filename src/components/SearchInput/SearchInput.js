import React from 'react';
import PropTypes from 'prop-types';
import "./SearchInput.css"
import { Row, Col, Input } from 'antd';

const { Search } = Input;

const SearchInput = () => {
  return (
    <React.Fragment>
      <Row >
        <Col span={14} offset={5}>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

SearchInput.propTypes = {};

export default SearchInput;