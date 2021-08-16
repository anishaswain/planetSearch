import React, { useState, useEffect } from "react";
import "./SideFilterBar.css";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Checkbox, Spin } from "antd";
import { fetchFullData } from "../../services/fetchData";
import { getFullDataAction } from "../../actions/getDataAction";
import {
  setColorFilter,
  setShapeFilter,
  setSizeFilter,
} from "../../actions/setFilters";
import { createUrl } from "../../utils/createUrl";

const { Title } = Typography;

const SideFilterBar = () => {
  const dispatch = useDispatch();

  const colors = useSelector((state) => state.data.colors);
  const shapes = useSelector((state) => state.data.shapes);
  const sizes = useSelector((state) => state.data.sizes);
  const isLoading = useSelector((state) => state.data.isLoading);
  const filters = useSelector((state) => state.filters);

  const [colorFilters, setColorFilters] = useState([]);
  const [shapeFilters, setShapeFilters] = useState([]);
  const [sizeFilters, setSizeFilters] = useState([]);

  const handleFilterChange = (setState, data) => {
    setState((prev) => {
      return prev.includes(data)
        ? prev.filter((res) => res !== data)
        : [...prev, data];
    });
  };

  useEffect(() => {
    dispatch(setColorFilter(colorFilters));
  }, [dispatch, colorFilters]);

  useEffect(() => {
    dispatch(setShapeFilter(shapeFilters));
  }, [dispatch, shapeFilters]);

  useEffect(() => {
    dispatch(setSizeFilter(sizeFilters));
  }, [dispatch, sizeFilters]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchFullData(createUrl(filters));
      await dispatch(getFullDataAction(data));
    };
    loadData();
  }, [dispatch, filters]);

  return (
    <React.Fragment>
      {isLoading ? (
        <Spin />
      ) : (
        <React.Fragment>
          <div className="filterCard">
            <Title level={5}>Color</Title>
            {colors.map((item) => (
              <Checkbox
                onChange={() => handleFilterChange(setColorFilters, item.id)}
                key={item.id}
              >
                {item.name}
              </Checkbox>
            ))}
          </div>
          <div className="filterCard">
            <Title level={5}>Shape</Title>
            {shapes.map((item) => (
              <Checkbox
                onChange={() => handleFilterChange(setShapeFilters, item.id)}
                key={item.id}
              >
                {item.name}
              </Checkbox>
            ))}
          </div>
          <div className="filterCard">
            <Title level={5}>Size</Title>
            {sizes.map((item) => (
              <Checkbox
                onChange={() => handleFilterChange(setSizeFilters, item.id)}
                key={item.id}
              >
                {item.name}
              </Checkbox>
            ))}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default SideFilterBar;
