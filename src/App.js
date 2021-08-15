import './App.css';
import { Row, Col, Card } from 'antd';
import SearchInput from './components/SearchInput/SearchInput';
import SideFilterBar from './components/SideFilterBar/SideFilterBar';
import SearchResult from './components/SearchResult/SearchResult';

function App() {
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
