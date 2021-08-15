import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import { Card, Typography, Space } from 'antd';
import { getFullDataAction, getColors, getShapes, getSizes } from '../../actions/getDataAction';
import { fetchFullData, fetchColors, fetchShapes, fetchSizes } from '../../services/fetchData';

const { Text } = Typography;

const SearchResult = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const totalData = useSelector(state => state.data)
    const colors = useSelector(state => state.colors)
    const shapes = useSelector(state => state.shapes)

    const dispatch = useDispatch();


    useEffect(() => {
        const loadData = async () => {
            const data = await fetchFullData("planets");
            await dispatch(getFullDataAction(data));
            const colors = await fetchColors("colors");
            await dispatch(getColors(colors));
            const shapes = await fetchShapes("shapes");
            await dispatch(getShapes(shapes));
            const sizes = await fetchSizes("sizes");
            await dispatch(getSizes(sizes));
            setIsLoading(false);
        };
        loadData();
    }, [dispatch]);


    useEffect(() => {
        setData(totalData)
    });

    return (
        <React.Fragment>
            {
                isLoading ? (<Text>Data is loading...</Text>) : (
                    data.map(item => {
                        const color = colors.filter(color => color.id === item.color)[0]["name"]
                        const shape = shapes.filter(shape => shape.id === item.shape)[0]["name"]
                        return (
                            <Card className="resultCard" key={item.id}>
                                <Space direction="vertical">
                                    <Text strong>{item.name}</Text>
                                    <Text>{item.name} has {color} color and {shape} shape.</Text>
                                </Space>
                            </Card>
                        )
                    })
                )
            }
        </React.Fragment>
    );
};

SearchResult.propTypes = {};

export default SearchResult;