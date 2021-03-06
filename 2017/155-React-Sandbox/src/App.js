// Generated by CoffeeScript 2.0.3
/*
eslint-disable 
*/
var App, Circle, print;

import React, {
  Component
} from 'react';

print = console.log;

Circle = class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: "yellow",
      x: this.props.x,
      y: this.props.y,
      vx: 1,
      vy: 1,
      r: this.props.r
    };
    setInterval((() => {
      return this.move();
    }), 50);
  }

  move() {
    var r, vx, vy, x, y;
    ({x, y, vx, vy, r} = this.state);
    if (!((r < x && x < 200 - r))) {
      vx = -vx;
    }
    if (!((r < y && y < 300 - r))) {
      vy = -vy;
    }
    x += vx;
    y += vy;
    return this.setState({x, y, vx, vy});
  }

  render() {
    return <circle cx={this.state.x} cy={this.state.y} r={this.state.r} stroke={this.props.stroke} strokeWidth={this.props.strokeWidth} fill={this.state.fill} onMouseEnter={() => {
        return this.setState({
          fill: "red"
        });
      }} onMouseLeave={() => {
        return this.setState({
          fill: "yellow"
        });
      }} />;
  }

};

export default App = class App extends Component {
  constructor() {
    super();
    this.state = {
      x: 100,
      y: 100
    };
  }

  render() {
    return <div> 
			<svg width='200' height='300' onMouseMove={(e) => {
        return this.setState({
          x: e.clientX,
          y: e.clientY
        });
      }}>
				<Circle x={this.state.x} y={this.state.y} r={40} stroke="rgb(0,0,0)" strokeWidth="1" fill="yellow" />
			 </svg>			
		</div>;
  }

};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWU2XFxBcHAuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0FBQUEsSUFBQSxHQUFBLEVBQUEsTUFBQSxFQUFBOztBQU1BLE9BQU8sS0FBUCxFQUFBO0VBQWdCLFNBQWhCO0NBQUEsTUFBQTs7QUFDQSxLQUFBLEdBQVEsT0FBTyxDQUFDOztBQUVWLFNBQU4sTUFBQSxPQUFBLFFBQXFCLFVBQXJCO0VBQ0MsV0FBYyxDQUFDLEtBQUQsQ0FBQTtTQUNiLENBQU0sS0FBTjtJQUNBLElBQUMsQ0FBQSxLQUFELEdBQVM7TUFBQSxJQUFBLEVBQU0sUUFBTjtNQUFnQixDQUFBLEVBQUUsSUFBQyxDQUFBLEtBQUssQ0FBQyxDQUF6QjtNQUE0QixDQUFBLEVBQUUsSUFBQyxDQUFBLEtBQUssQ0FBQyxDQUFyQztNQUF3QyxFQUFBLEVBQUcsQ0FBM0M7TUFBOEMsRUFBQSxFQUFHLENBQWpEO01BQW1ELENBQUEsRUFBRSxJQUFDLENBQUEsS0FBSyxDQUFDO0lBQTVEO0lBQ1QsV0FBQSxDQUFZLENBQUMsQ0FBQSxDQUFBLEdBQUE7YUFBTSxJQUFDLENBQUEsSUFBRCxDQUFBO0lBQU4sQ0FBRCxDQUFaLEVBQTZCLEVBQTdCO0VBSGE7O0VBSWQsSUFBTyxDQUFBLENBQUE7QUFDTixRQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLENBQUEsRUFBQTtJQUFBLENBQUEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLEVBQUwsRUFBUSxFQUFSLEVBQVcsQ0FBWCxDQUFBLEdBQWdCLElBQUMsQ0FBQSxLQUFqQjtJQUNBLElBQUcsQ0FBSSxDQUFDLENBQUEsQ0FBQSxHQUFFLENBQUYsSUFBRSxDQUFGLEdBQUksR0FBQSxHQUFJLENBQVIsQ0FBRCxDQUFQO01BQXdCLEVBQUEsR0FBRyxDQUFDLEdBQTVCOztJQUNBLElBQUcsQ0FBSSxDQUFDLENBQUEsQ0FBQSxHQUFFLENBQUYsSUFBRSxDQUFGLEdBQUksR0FBQSxHQUFJLENBQVIsQ0FBRCxDQUFQO01BQXdCLEVBQUEsR0FBRyxDQUFDLEdBQTVCOztJQUNBLENBQUEsSUFBRztJQUNILENBQUEsSUFBRztXQUNILElBQUMsQ0FBQSxRQUFELENBQVUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLEVBQUwsRUFBUSxFQUFSLENBQVY7RUFOTTs7RUFRUCxNQUFTLENBQUEsQ0FBQTtXQUNQLENBQUEsT0FDQSxFQUFBLENBQUcsQ0FBQyxJQUFDLENBQUEsS0FBSyxDQUFDLENBQVIsRUFDSCxFQUFBLENBQUcsQ0FBQyxJQUFDLENBQUEsS0FBSyxDQUFDLENBQVIsRUFDSCxDQUFBLENBQUcsQ0FBQyxJQUFDLENBQUEsS0FBSyxDQUFDLENBQVIsRUFDSCxNQUFBLENBQU8sQ0FBQyxJQUFDLENBQUEsS0FBSyxDQUFDLE1BQVIsRUFDUCxXQUFBLENBQVksQ0FBQyxJQUFDLENBQUEsS0FBSyxDQUFDLFdBQVIsRUFDWixJQUFBLENBQUssQ0FBQyxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVIsRUFDTCxZQUFBLENBQWEsQ0FBQyxDQUFBLENBQUEsR0FBQTtlQUFNLElBQUMsQ0FBQSxRQUFELENBQVU7VUFBQSxJQUFBLEVBQU87UUFBUCxDQUFWO01BQU4sQ0FBRCxFQUNiLFlBQUEsQ0FBYSxDQUFDLENBQUEsQ0FBQSxHQUFBO2VBQU0sSUFBQyxDQUFBLFFBQUQsQ0FBVTtVQUFBLElBQUEsRUFBTztRQUFQLENBQVY7TUFBTixDQUFELENBUmI7RUFETzs7QUFiVjs7QUF5QkEsT0FBQSxRQUFxQixNQUFOLE1BQUEsSUFBQSxRQUFrQixVQUFsQjtFQUNkLFdBQWMsQ0FBQSxDQUFBO1NBQ2IsQ0FBQTtJQUNBLElBQUMsQ0FBQSxLQUFELEdBQVM7TUFBQyxDQUFBLEVBQUUsR0FBSDtNQUFRLENBQUEsRUFBRTtJQUFWO0VBRkk7O0VBR2QsTUFBUyxDQUFBLENBQUE7V0FDUCxDQUFBLEdBQUE7R0FDQyxDQUFBLElBQUksS0FBQSxDQUFNLE1BQU0sTUFBQSxDQUFPLE1BQU0sV0FBQSxDQUFZLENBQUMsQ0FBQyxDQUFELENBQUEsR0FBQTtlQUFNLElBQUMsQ0FBQSxRQUFELENBQVU7VUFBQSxDQUFBLEVBQUUsQ0FBQyxDQUFDLE9BQUo7VUFBYSxDQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQWpCLENBQVY7TUFBTixDQUFELENBQXpDO0lBQ0MsQ0FBQSxPQUFPLENBQUEsQ0FBRSxDQUFDLElBQUMsQ0FBQSxLQUFLLENBQUMsQ0FBUixFQUFXLENBQUEsQ0FBRSxDQUFDLElBQUMsQ0FBQSxLQUFLLENBQUMsQ0FBUixFQUFXLENBQUEsQ0FBRSxDQUFDLEVBQUQsRUFBSyxNQUFBLENBQU8sYUFBYSxXQUFBLENBQVksSUFBSSxJQUFBLENBQUssUUFBakY7SUFERCxFQUFBLEdBQUE7RUFERCxFQUFBLEdBQUE7RUFETzs7QUFKSyIsInNvdXJjZXNDb250ZW50IjpbIiMjI1xyXG5lc2xpbnQtZGlzYWJsZSBcclxuIyMjXHJcblxyXG4jIFNWR1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5wcmludCA9IGNvbnNvbGUubG9nXHJcblxyXG5jbGFzcyBDaXJjbGUgZXh0ZW5kcyBDb21wb25lbnRcclxuXHRjb25zdHJ1Y3RvciA6IChwcm9wcykgLT5cclxuXHRcdHN1cGVyIHByb3BzXHJcblx0XHRAc3RhdGUgPSBmaWxsOiBcInllbGxvd1wiLCB4OkBwcm9wcy54LCB5OkBwcm9wcy55LCB2eDoxLCB2eToxLHI6QHByb3BzLnJcclxuXHRcdHNldEludGVydmFsICgoKSA9PiBAbW92ZSgpKSwgNTBcclxuXHRtb3ZlIDogLT5cclxuXHRcdHt4LHksdngsdnkscn0gPSBAc3RhdGVcclxuXHRcdGlmIG5vdCAocjx4PDIwMC1yKSB0aGVuIHZ4PS12eFxyXG5cdFx0aWYgbm90IChyPHk8MzAwLXIpIHRoZW4gdnk9LXZ5XHJcblx0XHR4Kz12eFxyXG5cdFx0eSs9dnlcclxuXHRcdEBzZXRTdGF0ZSB7eCx5LHZ4LHZ5fVxyXG5cdFx0XHJcblx0cmVuZGVyIDogLT5cclxuXHRcdDxjaXJjbGUgXHJcblx0XHRcdGN4PXtAc3RhdGUueH0gXHJcblx0XHRcdGN5PXtAc3RhdGUueX0gXHJcblx0XHRcdHIgPXtAc3RhdGUucn0gXHJcblx0XHRcdHN0cm9rZT17QHByb3BzLnN0cm9rZX0gXHJcblx0XHRcdHN0cm9rZVdpZHRoPXtAcHJvcHMuc3Ryb2tlV2lkdGh9IFxyXG5cdFx0XHRmaWxsPXtAc3RhdGUuZmlsbH0gXHJcblx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gQHNldFN0YXRlIGZpbGwgOiBcInJlZFwifSBcclxuXHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBAc2V0U3RhdGUgZmlsbCA6IFwieWVsbG93XCJ9IFxyXG5cdFx0Lz5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCBcclxuXHRjb25zdHJ1Y3RvciA6IC0+XHJcblx0XHRzdXBlcigpXHJcblx0XHRAc3RhdGUgPSB7eDoxMDAsIHk6MTAwfVxyXG5cdHJlbmRlciA6IC0+XHJcblx0XHQ8ZGl2PiBcclxuXHRcdFx0PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzMwMCcgb25Nb3VzZU1vdmU9eyhlKT0+IEBzZXRTdGF0ZSB4OmUuY2xpZW50WCwgeTplLmNsaWVudFl9PlxyXG5cdFx0XHRcdDxDaXJjbGUgeD17QHN0YXRlLnh9IHk9e0BzdGF0ZS55fSByPXs0MH0gc3Ryb2tlPVwicmdiKDAsMCwwKVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJ5ZWxsb3dcIiAgLz5cclxuXHRcdFx0IDwvc3ZnPlx0XHRcdFxyXG5cdFx0PC9kaXY+XHJcbiJdfQ==
//# sourceURL=C:\Lab\2017\155-React-Sandbox\coffee6\App.coffee