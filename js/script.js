var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        if (nextState.counter % 2 == 0 ){
        return false;
        }
        return true;
      },

    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 20
        };
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        if (nextState.counter % 2 !== 0 ){
        return false;
        }
        return true;
      },

    render: function() {
        return React.createElement('div', {onClick: this.decrement},
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = (
    <div>
      <h1>{Counter}</h1>
      <h1>{Counter2}</h1>
    </div>
)
ReactDOM.render(element, document.getElementById('app'));

