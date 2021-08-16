import React from 'react';
import { useSelector } from 'react-redux'
import { Card, Typography, Space, Spin } from 'antd';


const { Text } = Typography;

const SearchResult = () => {
    const data = useSelector(state => state.data.data)
    const colors = useSelector(state => state.data.colors)
    const shapes = useSelector(state => state.data.shapes)
    const sizes = useSelector(state => state.data.sizes)
    const isLoading = useSelector(state => state.data.isLoading)

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