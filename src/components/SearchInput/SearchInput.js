import React, { useEffect } from "react";
import "./SearchInput.css";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Input } from "antd";
import { fetchFullData } from "../../services/fetchData";
import { getFullDataAction } from "../../actions/getDataAction";
import { createUrl } from "../../utils/createUrl";
import { setSearchFilter } from "../../actions/setFilters";

const { Search } = Input;

const SearchInput = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const onSearch = (value) => {
    dispatch(setSearchFilter(value));
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchFullData(createUrl(filters));
      await dispatch(getFullDataAction(data));
    };
    loadData();
  }, [dispatch, filters]);

  return (
    <React.Fragment>
      <Row>
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

export default SearchInput;
