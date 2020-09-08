import React, {Component} from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
	constructor (props) {
		super(props);
		this.createTasks = this.createTasks.bind(this);
	}
	delete(key) {
		// doesn't do anything on it's own - but calls another delete function passed into this component via props
		this.props.delete(key);
	}
	createTasks (item) {
		return <li key={item.key}>{item.text}<span
					 onClick={() => this.delete(item.key)}
					  className="deleteIcon">X</span></li>
	}
	render () {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);
		return (
			<ul className="theList">
				<FlipMove duration={250} easing="ease-out">
					{listItems}
				</FlipMove>
			</ul>
		);
	}
};

export default TodoItems;
