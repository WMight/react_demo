import React from 'react';
import TodoItem from './TodoItem'

//定义一个react组件
// function App() {
//   return (
//     <div>
//       hello world !
//     </div>
//   );
// }
//定义一个react组件必须有render()显示内容，一个App类继承react.component
//export 导出出去才能在别的中用import 导入
class TodoList extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputValue:''
    }
  }

  handleBtnClick(){
    this.setState({
      list:[...this.state.list, this.state.inputValue],  //...是展开运算符
      inputValue:''
    })
  }
  handleBtnChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  handleItemClick(index){
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({list})
  }

  render(){
    //jsx语法：在{}中可以写js表达式*只能是表达式语句会报错，也可直接用尖括号
    //jsx语法：只能return一个标签即最外层是一个div
    //原生事件是onclick小写，事件绑定是大写的C; this指这个组件
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleBtnChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <TodoItem content={item} key={index}/>//父组件通过属性形势向子组件传参
              // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
            })}
        </ul>
      </div>
    );
  }
}
export default TodoList;
