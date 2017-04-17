var React = require('react');
var ReactDOM = require('react-dom');


var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      {this.props.children}
    </h1>
  }
});

var Child1 = React.createClass({
  render: function() {
    return (
      <h1>"I'm child1"
      {this.props.children}
      </h1>
    )
  }
})

var Child2 = React.createClass({
  render: function() {
    return <h1>"I'm the other child2"</h1>
  }
})



ReactDOM.render(routes, document.querySelector('.container'));
