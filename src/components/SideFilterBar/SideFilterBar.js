import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Checkbox, Space } from 'antd';
import './SideFilterBar.css'

const { Title } = Typography;

const SideFilterBar = () => {
    return (
        <React.Fragment>
            <div className="filterCard">
                <Title level={5}>Color</Title>
                <Checkbox>Red</Checkbox>
                <Checkbox>Green</Checkbox>
                <Checkbox>Blue</Checkbox>
            </div>
            <div className="filterCard">
                <Title level={5}>Shape</Title>
                <Checkbox>Small</Checkbox>
                <Checkbox>Medium</Checkbox>
                <Checkbox>Large</Checkbox>
            </div>
            <div className="filterCard">
                <Title level={5}>Size</Title>
                <Checkbox>Round</Checkbox>
                <Checkbox>Oval</Checkbox>
            </div>
        </React.Fragment>
    );
};

SideFilterBar.propTypes = {};

export default SideFilterBar;