import React from 'react';
// import Button, { ButtonSize, ButtonType } from './components/Button/button'
// import Alert from './components/Alert/alert'
// import Menu from './components/Menu/menu'
// import MenuItem from './components/Menu/MenuItem'
// import SubMenu from './components/Menu/SubMenu'
import Tabs from './components/Tabs/tabs'
import TabItem from './components/Tabs/TabItem'

function App() {
  return (
    <div style={{margin: '20px'}}>
      <header className="App-header">
        <Tabs defaultIndex={2}>
          <TabItem label={
            <span>🆗Tab 2</span>
          }>this is card one</TabItem>
          <TabItem label="card2" disabled>this is card two</TabItem>
          <TabItem label="card3" className="test">this is card three</TabItem>
        </Tabs>
        {/* <Menu defaultIndex="0" onSelect={(index) => {alert(index)}}>
          <MenuItem>cool link</MenuItem>
          <MenuItem disabled>cool link2</MenuItem>
          <MenuItem>cool link3</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
        </Menu>
        <Menu defaultIndex="0" onSelect={(index) => {alert(index)}} mode="vertical" defaultOpenSubMenus={['3']}>
          <MenuItem>cool link</MenuItem>
          <MenuItem disabled>cool link2</MenuItem>
          <MenuItem>cool link3</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
        </Menu> */}
        {/* <Button>hello</Button>
        <Button disabled>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com/">Link</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com/" disabled>disable Link</Button> */}

        {/* <Alert
          description="提示信息"
          message="提示标题"
          closeable
        />
        <Alert
          description="提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息提示信息"
          message="提示标题"
          type="success"
        />
        <Alert
          description="提示信息"
          message="提示标题"
          type="warning"
        />
        <Alert
          description="提示信息"
          message="提示标题"
          type="danger"
        /> */}
      </header>
    </div>
  );
}

export default App;
