import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			items: []
		};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	addItem(e){
		var itemArray = this.state.items;
		if (this._inputElement.value !== "") {
			itemArray.unshift({
				text: this._inputElement.value,
				key: Date.now()
			});
			this.setState({
				items:itemArray
			});
			this._inputElement.value = "";// reset input field
		}
		console.log(itemArray);
		e.preventDefault();// stop page from reloading on form submit
	}
	deleteItem (key) {
		var filteredItems = this.state.items.filter(function (item) {
			return (item.key !== key);// create new array of all items except the one being removed.
		});
		// Replace existing array/state
		this.setState({
			items:filteredItems
		});
	}
	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement = a}
								placeholder="Enter a task here"></input>
						<button type="submit">Add task</button>
					</form>
				</div>
				<TodoItems entries={this.state.items}
							delete={this.deleteItem} />
			</div>
		);
	}
}

/* next functional parts of this app:
1. handle adding items
2. display items
3. styling UI
4. handle removing items
5. animate items as they are added and removed
 */

export default TodoList;
