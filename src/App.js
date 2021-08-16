import './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Card } from 'antd';
import SearchInput from './components/SearchInput/SearchInput';
import SideFilterBar from './components/SideFilterBar/SideFilterBar';
import SearchResult from './components/SearchResult/SearchResult';
import { getFullDataAction, getColors, getShapes, getSizes } from './actions/getDataAction';
import { loadingAction } from './actions/loadingAction';
import { fetchFullData, fetchColors, fetchShapes, fetchSizes } from './services/fetchData';
import { createUrl } from './utils/createUrl';

function App() {

  const dispatch = useDispatch();
 
  useEffect(() => {
    const loadData = async () => {
        const data = await fetchFullData(createUrl({}));
        await dispatch(getFullDataAction(data));
        const colors = await fetchColors("colors");
        await dispatch(getColors(colors));
        const shapes = await fetchShapes("shapes");
        await dispatch(getShapes(shapes));
        const sizes = await fetchSizes("sizes");
        await dispatch(getSizes(sizes));
        await dispatch(loadingAction())
    };
    loadData();
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Card className="mainCard">
        <div className="search">
          <SearchInput />
        </div>
        <div className="content">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={{ xs: 24, sm: 24, md: 4, lg: 4 }} offset={5} className="sideBar">
              <SideFilterBar />
            </Col>
            <Col span={11} className="result">
              <SearchResult />
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}

export default App;
