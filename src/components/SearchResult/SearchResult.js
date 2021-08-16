import React from 'react';
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { Card, Typography, Space, Spin } from 'antd';


const { Text } = Typography;

const SearchResult = () => {
    const data = useSelector(state => state.data)
    const colors = useSelector(state => state.colors)
    const shapes = useSelector(state => state.shapes)
    const sizes = useSelector(state => state.sizes)
    const isLoading = useSelector(state => state.isLoading)

    return (
        <React.Fragment>
            {
                isLoading ? (<Spin />) : (
                    data.map(item => {
                        const color = colors.filter(color => color.id === item.color)[0]["name"]
                        const shape = shapes.filter(shape => shape.id === item.shape)[0]["name"]
                        const size = sizes.filter(size => size.id === item.size)[0]["name"]
                        return (
                            <Card className="resultCard" key={item.id}>
                                <Space direction="vertical">
                                    <Text strong>{item.name}</Text>
                                    <Text>{item.name} has {color} color and {shape} shape and {size} size.</Text>
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