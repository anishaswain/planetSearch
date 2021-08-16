import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import { Typography, Checkbox, Spin } from 'antd';
import './SideFilterBar.css'
import { fetchFullData } from '../../services/fetchData';
import { getFullDataAction } from '../../actions/getDataAction';
import { createUrl } from '../../utils/createUrl';

const { Title } = Typography;

const SideFilterBar = () => {
    const dispatch = useDispatch();
    
    const colors = useSelector(state => state.colors)
    const shapes = useSelector(state => state.shapes)
    const sizes = useSelector(state => state.sizes)
    const isLoading = useSelector(state => state.isLoading)

    const [colorFilters, setColorFilters] = useState([])
    const [shapeFilters, setShapeFilters] = useState([])
    const [sizeFilters, setSizeFilters] = useState([])

    const handleFilterChange = (type, setState, data) => {
        setState(prev => {
            return prev.includes(data) ? prev.filter(res => res !== data) : [...prev, data]
        })
    }

    useEffect(() => {
        const loadData = async () => {
            const filters = {colorFilter:colorFilters, sizeFilter:sizeFilters, shapeFilter:shapeFilters} 
            const data = await fetchFullData(createUrl(filters));
            await dispatch(getFullDataAction(data));
        };
        loadData();
      }, [colorFilters,shapeFilters,sizeFilters]);

    console.log(isLoading,colors)
    return (
        <React.Fragment>
            {
                isLoading ? (<Spin />) : (
                    <>
                        <div className="filterCard">
                            <Title level={5}>Color</Title>
                            {
                                colors.map(item => (
                                    <Checkbox onChange={() => handleFilterChange("color", setColorFilters, item.id)} key={item.id}>{item.name}</Checkbox>
                                ))
                            }
                        </div>
                        <div className="filterCard">
                            <Title level={5}>Shape</Title>
                            {
                                shapes.map(item => (
                                    <Checkbox onChange={() => handleFilterChange("shape", setShapeFilters, item.id)} key={item.id}>{item.name}</Checkbox>
                                ))
                            }
                        </div>
                        <div className="filterCard">
                            <Title level={5}>Size</Title>
                            {
                                sizes.map(item => (
                                    <Checkbox onChange={() => handleFilterChange("size", setSizeFilters, item.id)} key={item.id}>{item.name}</Checkbox>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </React.Fragment>
    );
};

SideFilterBar.propTypes = {};

export default SideFilterBar;