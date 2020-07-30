import React from 'react';

class TodoItem extends React.Component {

    render(){
        return (
            <div>{this.props.content}</div>//子组件通过props接收父组件传递的参数
        )
    }
}

export default TodoItem;