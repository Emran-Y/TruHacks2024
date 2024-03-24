import React, { useState } from 'react';
import { Input, Button,Space, Card, Row, Col, Avatar, Menu, Divider, Modal, DatePicker, Select } from 'antd';
import { SearchOutlined, HeartOutlined, EyeOutlined, DownloadOutlined, RightOutlined, BulbOutlined, TagOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { RangePicker } = DatePicker;
const { Option } = Select

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [activeMenuItem, setActiveMenuItem] = useState('trending');
  const [showAllTrending, setShowAllTrending] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = () => {
    // Dummy data for search results
    const dummyResults = [
      {
        id: 1,
        title: "Book Title 1",
        author: "Author Name 1",
        readers: 1000,
        theme: "Theme 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        downloadLink: "#"
      },
      {
        id: 2,
        title: "Book Title 2",
        author: "Author Name 2",
        readers: 500,
        theme: "Theme 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        downloadLink: "#"
      },
      // Add more dummy data as needed
    ];
    setSearchResults(dummyResults);
    setFilteredResults(dummyResults);
  };

  const handleMenuItemClick = (e) => {
    setActiveMenuItem(e.key);
    // You can handle different menu item clicks here
  };

  const handleShowAllTrending = () => {
    setShowAllTrending(true);
  };

  const handleShowAllCategories = () => {
    setShowAllCategories(true);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const trendingBooks = [
    "The Great Gatsby",
    "To Kill a Mockingbird",
    "Harry Potter and the Sorcerer's Stone",
    "Pride and Prejudice",
    "1984",
    "The Catcher in the Rye",
    "Animal Farm",
    "Lord of the Flies",
    "The Grapes of Wrath",
    "Brave New World"
  ].slice(0, showAllTrending ? undefined : 5);

  const categories = [
    "Mystery",
    "Romance",
    "Science Fiction",
    "Thriller",
    "Fantasy",
    "Horror",
    "Historical Fiction",
    "Non-fiction",
    "Biography",
    "Self-help"
  ].slice(0, showAllCategories ? undefined : 5);

  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: '1', marginRight: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
  <Card style={{ borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
    <div style={{ padding: '20px' }}>
      <Space>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search for a book, author, genre..."
          style={{ width: '300px' }}
        />
        <RangePicker style={{ width: '250px' }} />
        <Select defaultValue="all" style={{ width: '120px' }}>
          <Option value="all">All Genres</Option>
          {categories.map((category, index) => (
            <Option key={index} value={category}>{category}</Option>
          ))}
        </Select>
        <Button type="primary">Search</Button>
      </Space>
    </div>
  </Card>
</div>
        <Button type="primary"  className="bg-blue-500 ml-5" onClick={handleSearch}>Search</Button>

        <Button type="link" onClick={handleOpenModal} style={{ fontSize: '24px' }}>
  <EyeOutlined />
</Button>

        <Divider orientation="left" style={{ color: '#1890ff', marginTop: '20px' }}>Recommendations</Divider>
        {/* Beautiful small cards for suggestions */}
        <Card size="small" style={{ width: '100%', marginBottom: '20px' }}>
          <Meta
            avatar={<Avatar icon={<BulbOutlined />} />}
            title="Suggestion Title 1"
            description="Description of Suggestion 1"
          />
        </Card>
        <Card size="small" style={{ width: '100%', marginBottom: '20px' }}>
          <Meta
            avatar={<Avatar icon={<BulbOutlined />} />}
            title="Suggestion Title 2"
            description="Description of Suggestion 2"
          />
        </Card>

        <Divider orientation="left" style={{ color: '#1890ff' }}>Search Results</Divider>
        <div style={{ marginTop: '20px' }}>
          <Row gutter={[16, 16]}>
            {filteredResults.map(result => (
              <Col span={8} key={result.id}>
                <Card
                  size="small"
                  hoverable
                  style={{ width: '100%', marginBottom: '20px', height: '200px' }}
                  cover={<img alt="example" src="https://via.placeholder.com/240x320" style={{ height: '120px' }} />}
                  actions={[
                    <HeartOutlined key="favorite" />,
                    <a href={result.downloadLink}><DownloadOutlined key="download" /></a>
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://via.placeholder.com/40x40" />}
                    title={result.title}
                    description={result.author}
                  />
                  <p>Number of Readers: {result.readers}</p>
                  <p>{result.theme}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Divider type="vertical" style={{ height: '80vh' }} />
      <div style={{ flex: '0 0 200px', paddingLeft: '20px' }}>
        <Menu
          mode="vertical"
          defaultSelectedKeys={['trending']}
          selectedKeys={[activeMenuItem]}
          onClick={handleMenuItemClick}
        >
          <Menu.Item key="trending" icon={<RightOutlined />}>
            <strong>Trending</strong>
          </Menu.Item>
          {trendingBooks.map((book, index) => (
            <Menu.Item key={`trending${index}`} icon={<RightOutlined />}>
              {book}
            </Menu.Item>
          ))}
          {trendingBooks.length === 5 && (
            <Menu.Item key="showMoreTrending">
              <Button type="link" onClick={handleShowAllTrending}>Show More</Button>
            </Menu.Item>
          )}
          <Divider />
          <Menu.Item key="categories" icon={<TagOutlined />}>
            <strong>Categories</strong>
          </Menu.Item>
          {categories.map((category, index) => (
            <Menu.Item key={`categories${index}`} icon={<TagOutlined />}>
              {category}
            </Menu.Item>
          ))}
          {categories.length === 5 && (
            <Menu.Item key="showMoreCategories">
              <Button type="link" onClick={handleShowAllCategories}>Show More</Button>
            </Menu.Item>
          )}
        </Menu>
      </div>
      <Modal
        title="Recently Viewed"
        visible={modalVisible}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
      >
        <p>Dummy Recently Viewed Data 1</p>
        <p>Dummy Recently Viewed Data 2</p>
        {/* Add more dummy recently viewed data as needed */}
      </Modal>
      <div style={{ position: 'fixed', bottom: '50px', right: '50px'
}}>

</div>
</div>
);
};

export default SearchPage;
