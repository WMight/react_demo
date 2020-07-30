import React from 'react';

class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        const {handleDelete , index} = this.props;
        handleDelete(index);
        //this.props.handleDelete(this.props.index);
        //子组件如果想和父组件通信，子组件需要调用父组件传递的方法
    }
    render(){
        const { content } = this.props;//ES6结构赋值
        return (
            <div onClick={this.handleDelete}>{content}</div>//子组件通过props接收父组件传递的参数
        )
    }
}

export default TodoItem;