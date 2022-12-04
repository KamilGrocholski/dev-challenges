import './index.css'
import './App.css'
import { UploadProvider } from './context/UploadContext'
import ImageUploadScreen from './components/screens/ImageUploadScreen'

function App() {

  return (
    <div className="App mx-auto container items-center flex flex-col justify-center min-h-screen my-auto">
      <UploadProvider>
        <ImageUploadScreen />
      </UploadProvider>
    </div>
  )
}

export default App
