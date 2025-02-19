import piggy from '../porco.png'
import React from 'react'

class Nav extends React.Component {

	render(){
		return (
			<div className="navWrapper">
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
						<img src={piggy} className="App-logo" alt="piggy"/>
					</a>
					<button onClick={this.props.filterGreased}>{this.props.greasedText}</button>
					<button onClick={this.props.sortAllByName}>Sort By Name</button>
					<button onClick={this.props.sortAllByWeight}>Sort By Weight</button>
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
			</div>
		)
	}
}

export default Nav
