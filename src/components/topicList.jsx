var React = require('react');
var TopicStore = require('../stores/topicStore');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      topics: ['']
    }
  },

  componentWillMount: function() {
    TopicStore.getTopics()
      .then(function(){
        //successfully fetched topics
        //topics available on TopicStore.topics
        this.setState({
          topics.TopicStore.topics
        })
      }.bind(this));
  },

  render: function() {
    return(
      <div className="list-group">
        Topic List
        {this.renderTopics()}
      </div>
    )
  },

  renderTopics: function() {
    return this.state.topics.map(function(topic){
      return (
        <li>
          {topic.name}
        </li>
      )
    })
  }
})