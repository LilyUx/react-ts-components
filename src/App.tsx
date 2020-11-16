import React from 'react';
// import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import Button, { ButtonSize, ButtonType } from './components/Button/button'
// import Alert from './components/Alert/alert'
// import Menu from './components/Menu/menu'
// import MenuItem from './components/Menu/MenuItem'
// import SubMenu from './components/Menu/SubMenu'
// import Tabs from './components/Tabs/tabs'
// import TabItem from './components/Tabs/TabItem'
// import Icon from './components/Icon/icon'
// import Input from './components/Input/input'
import Upload, { UploadFile } from './components/Upload/upload'
library.add(fas)

// const App: React.FC = () => {
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(e);
//     const files = e.target.files
//     if (files) {
//       const uploadedFile = files[0]
//       console.log(uploadedFile);
//       const formData = new FormData()
//       formData.append(uploadedFile.name, uploadedFile)
//       axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       }).then(response => {
//         console.log(response)
//       })
//     }
//   }

//   return (
//     <div style={{marginTop: '200px', marginLeft: '100px'}}>
//       <input type="file" name="myFile" onChange={handleFileChange}/>
//     </div>
//   )

  // const [title, setTitle] = useState('')
  // const postData = {
  //   title: 'my title',
  //   body: 'hello man'
  // }
  // useEffect(() => {
  //   axios.post('http://jsonplaceholder.typicode.com/posts', postData, {
  //     headers: {
  //       'X-Requested-With': 'XMLHttpRequest'
  //     },
  //     responseType: 'json'
  //   })
  //     .then(response => {
  //       console.log(response)
  //       setTitle(response.data.title)
  //     })
  // })

  // return (
  //   <div style={{margin: '20px'}}>
  //     <header className="App-header">
  //       <h1>{title}</h1>
  //     </header>
  //   </div>
  // )
// }

// const checkFileSize = (file: File) => {
//   if (Math.round(file.size / 1024) > 50) {
//     alert('file too big')
//     return false;
//   }
//   return true;
// }

// const filePromise = (file: File) => {
//   const newFile = new File([file], 'new_name.docx', {type: file.type})
//   return Promise.resolve(newFile)
// }

const defaultFileList: UploadFile[] = [
  { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
  { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
  { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
]

function App() {
  return (
    <div style={{margin: '20px'}}>
      <header className="App-header">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          onChange={() => {alert('changed')}}
          defaultFileList={defaultFileList}
          name="fileName"
          data={{'key': 'value'}}
          accept=".txt"
          multiple
          drag
          // beforeUpload={filePromise}
          // onProgress={() => {alert('progress')}}
          // onSuccess={() => {alert('success')}}
          // onError={() => {alert('error')}}
        />
        {/* <Input size='lg'/> */}
        {/* <Icon icon="coffee" theme='danger' size='10x'/> */}
        {/* <Tabs defaultIndex={2}>
          <TabItem label={
            <span>🆗Tab 2</span>
          }>this is card one</TabItem>
          <TabItem label="card2" disabled>this is card two</TabItem>
          <TabItem label="card3" className="test">this is card three</TabItem>
        </Tabs> */}
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
