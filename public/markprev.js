var React = require ('react');
var ReactDom = require ('react-dom');
var Container = React.createClass({
    
   render: function() {
    return (
      <div className="container">
            <h1>Markdown Previewer</h1>
            <MarkdownPane />
            <TextEntryForm />
      </div>
    );
   }
});

var MarkdownPane = React.createClass ({
    render: function() {
                
        return (
                <div className="markdownPane">
                  This is where the markdown ends up.
                </div>
        );
    }
});

var TextEntryForm = React.createClass ({
    getInitialState: function() {
        return {text: ''};
    },

    handleTextChange: function(e) {
        this.setState({text: e.target.value});
    },

    render:function() {
        return (
                <form className='textEntryForm'>
                <input
                  type='text'
            placeholder='Enter your markdown here...'
            value={this.state.text}
            onChange={this.handleTextChange}
                />
            </form>
        );
    }
});


ReactDOM.render(
        <Container />,
  document.getElementById('content')
);

