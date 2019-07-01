import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[{name:'Grocery'},{name: 'Washing'}],
            currentItem: '',
        };
    }

    addItem=(event)=>{
        event.preventDefault();
        console.log('Item Added');  
        let finalItems = [...this.state.items,{name:this.state.currentItem}]; // [... old state, newObjectTo be added]
        this.setState({items: finalItems});
        this.setState({currentItem: ''});
    }

    deleteItem=(index)=>{
        console.log('Item Deleted');
        let itemsArray = [...this.state.items];
        itemsArray.splice(index,1);
        this.setState({items:itemsArray});
    }

    nameChanged = (event) => {
        console.log('Change event fired');
        this.setState({currentItem: event.target.value})
    }

    render(){
        const list_item = this.state.items;
        return(
            <div>
                <div className="jumbotron">
                    <h1>ToDo List Application</h1>
                </div>
                <hr/>
                <label>Enter Item Name :</label>
                <input type="text" value={this.state.currentItem} onChange={this.nameChanged}/>
                {/* <br/> */}
                <button className ="btn btn-success" onClick={this.addItem}>Add Item</button>
                {/* <button className ="btn btn-danger" onClick={this.deleteItem}> Remove Item </button> */}
                <hr/>
                { this.state.items!==null ?
                    <ul className="list-group">
                        {
                            list_item.map((listItem,index)=>{
                            return (
                                <li className="list-group-item listItem" key={index}>
                                    <h3 className="listItem">{listItem.name}</h3>  
                                    <button onClick={()=>this.deleteItem(index)} type="button" className="btn btn-default btn-lg">
                                        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span> Remove
                                    </button>
                                </li>)
                        })}
                    </ul>: null
                }
            </div>
        )
    }
}

export default Todo;