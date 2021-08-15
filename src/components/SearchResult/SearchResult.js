import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Space } from 'antd';

const { Text } = Typography;

const SearchResult = () => {
    return (
        <React.Fragment>
            <Card className="resultCard">
                <Space direction="vertical">
                    <Text strong>Earth</Text>
                    <Text>Some line about earth</Text>
                </Space>
            </Card>
            <Card className="resultCard">
                <Space direction="vertical">
                    <Text strong>Lorem</Text>
                    <Text>Lorem ipsum text</Text>
                </Space>
            </Card>
        </React.Fragment>
    );
};

SearchResult.propTypes = {};

export default SearchResult;