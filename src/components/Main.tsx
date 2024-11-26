import {
  Routes, Route
} from 'react-router-dom';
import { MainProps } from "../types";
import Home from "./Home";
import Chapter from './Chapter';

function Main({ title, chapters }: MainProps): JSX.Element {
  return (
    <div id="main">
      <div className="header">
        <h1>{title}</h1>
        <h2>by Sir Arthur Conan Doyle</h2>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home chapters={chapters}/>} />
          <Route path="/chapters/:name" element={<Chapter />} />
        </Routes>
      </div>
    </div>
  )
}

export default Main;
