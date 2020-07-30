import React from 'react';

class TodoItem extends React.Component {

    handleDelete(){
        //子组件如果想和父组件通信，子组件需要调用父组件传递的方法
        this.props.handleDelete(this.props.index);
    }
    render(){
        return (
            <div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>//子组件通过props接收父组件传递的参数
        )
    }
}

export default TodoItem;