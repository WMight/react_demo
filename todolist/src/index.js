import React from 'react';//引入react库后面才知道大写字母是组件
import ReactDOM from 'react-dom';//挂载组件到页面
import TodoList from './TodoList';//App是最外层组件（大写字母开头）
import './style.css';
//组件渲染到html中root标签里去
ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

