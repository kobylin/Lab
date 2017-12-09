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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwNi5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXMiOlsiY29mZmVlXFxBcHA2LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztBQUFBLElBQUEsR0FBQSxFQUFBLE1BQUEsRUFBQTs7QUFNQSxPQUFPLEtBQVAsRUFBQTtFQUFnQixTQUFoQjtDQUFBLE1BQUE7O0FBQ0EsS0FBQSxHQUFRLE9BQU8sQ0FBQzs7QUFFVixTQUFOLE1BQUEsT0FBQSxRQUFxQixVQUFyQjtFQUNDLFdBQWMsQ0FBQyxLQUFELENBQUE7U0FDYixDQUFNLEtBQU47SUFDQSxJQUFDLENBQUEsS0FBRCxHQUFTO01BQUEsSUFBQSxFQUFNLFFBQU47TUFBZ0IsQ0FBQSxFQUFFLElBQUMsQ0FBQSxLQUFLLENBQUMsQ0FBekI7TUFBNEIsQ0FBQSxFQUFFLElBQUMsQ0FBQSxLQUFLLENBQUMsQ0FBckM7TUFBd0MsRUFBQSxFQUFHLENBQTNDO01BQThDLEVBQUEsRUFBRyxDQUFqRDtNQUFtRCxDQUFBLEVBQUUsSUFBQyxDQUFBLEtBQUssQ0FBQztJQUE1RDtJQUNULFdBQUEsQ0FBWSxDQUFDLENBQUEsQ0FBQSxHQUFBO2FBQU0sSUFBQyxDQUFBLElBQUQsQ0FBQTtJQUFOLENBQUQsQ0FBWixFQUE2QixFQUE3QjtFQUhhOztFQUlkLElBQU8sQ0FBQSxDQUFBO0FBQ04sUUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxDQUFBLEVBQUE7SUFBQSxDQUFBLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxFQUFMLEVBQVEsRUFBUixFQUFXLENBQVgsQ0FBQSxHQUFnQixJQUFDLENBQUEsS0FBakI7SUFDQSxJQUFHLENBQUksQ0FBQyxDQUFBLENBQUEsR0FBRSxDQUFGLElBQUUsQ0FBRixHQUFJLEdBQUEsR0FBSSxDQUFSLENBQUQsQ0FBUDtNQUF3QixFQUFBLEdBQUcsQ0FBQyxHQUE1Qjs7SUFDQSxJQUFHLENBQUksQ0FBQyxDQUFBLENBQUEsR0FBRSxDQUFGLElBQUUsQ0FBRixHQUFJLEdBQUEsR0FBSSxDQUFSLENBQUQsQ0FBUDtNQUF3QixFQUFBLEdBQUcsQ0FBQyxHQUE1Qjs7SUFDQSxDQUFBLElBQUc7SUFDSCxDQUFBLElBQUc7V0FDSCxJQUFDLENBQUEsUUFBRCxDQUFVLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxFQUFMLEVBQVEsRUFBUixDQUFWO0VBTk07O0VBUVAsTUFBUyxDQUFBLENBQUE7V0FDUCxDQUFBLE9BQ0EsRUFBQSxDQUFHLENBQUMsSUFBQyxDQUFBLEtBQUssQ0FBQyxDQUFSLEVBQ0gsRUFBQSxDQUFHLENBQUMsSUFBQyxDQUFBLEtBQUssQ0FBQyxDQUFSLEVBQ0gsQ0FBQSxDQUFHLENBQUMsSUFBQyxDQUFBLEtBQUssQ0FBQyxDQUFSLEVBQ0gsTUFBQSxDQUFPLENBQUMsSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFSLEVBQ1AsV0FBQSxDQUFZLENBQUMsSUFBQyxDQUFBLEtBQUssQ0FBQyxXQUFSLEVBQ1osSUFBQSxDQUFLLENBQUMsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFSLEVBQ0wsWUFBQSxDQUFhLENBQUMsQ0FBQSxDQUFBLEdBQUE7ZUFBTSxJQUFDLENBQUEsUUFBRCxDQUFVO1VBQUEsSUFBQSxFQUFPO1FBQVAsQ0FBVjtNQUFOLENBQUQsRUFDYixZQUFBLENBQWEsQ0FBQyxDQUFBLENBQUEsR0FBQTtlQUFNLElBQUMsQ0FBQSxRQUFELENBQVU7VUFBQSxJQUFBLEVBQU87UUFBUCxDQUFWO01BQU4sQ0FBRCxDQVJiO0VBRE87O0FBYlY7O0FBeUJBLE9BQUEsUUFBcUIsTUFBTixNQUFBLElBQUEsUUFBa0IsVUFBbEI7RUFDZCxXQUFjLENBQUEsQ0FBQTtTQUNiLENBQUE7SUFDQSxJQUFDLENBQUEsS0FBRCxHQUFTO01BQUMsQ0FBQSxFQUFFLEdBQUg7TUFBUSxDQUFBLEVBQUU7SUFBVjtFQUZJOztFQUdkLE1BQVMsQ0FBQSxDQUFBO1dBQ1AsQ0FBQSxHQUFBO0dBQ0MsQ0FBQSxJQUFJLEtBQUEsQ0FBTSxNQUFNLE1BQUEsQ0FBTyxNQUFNLFdBQUEsQ0FBWSxDQUFDLENBQUMsQ0FBRCxDQUFBLEdBQUE7ZUFBTSxJQUFDLENBQUEsUUFBRCxDQUFVO1VBQUEsQ0FBQSxFQUFFLENBQUMsQ0FBQyxPQUFKO1VBQWEsQ0FBQSxFQUFFLENBQUMsQ0FBQztRQUFqQixDQUFWO01BQU4sQ0FBRCxDQUF6QztJQUNDLENBQUEsT0FBTyxDQUFBLENBQUUsQ0FBQyxJQUFDLENBQUEsS0FBSyxDQUFDLENBQVIsRUFBVyxDQUFBLENBQUUsQ0FBQyxJQUFDLENBQUEsS0FBSyxDQUFDLENBQVIsRUFBVyxDQUFBLENBQUUsQ0FBQyxFQUFELEVBQUssTUFBQSxDQUFPLGFBQWEsV0FBQSxDQUFZLElBQUksSUFBQSxDQUFLLFFBQWpGO0lBREQsRUFBQSxHQUFBO0VBREQsRUFBQSxHQUFBO0VBRE87O0FBSksiLCJzb3VyY2VzQ29udGVudCI6WyIjIyNcclxuZXNsaW50LWRpc2FibGUgXHJcbiMjI1xyXG5cclxuIyBTVkdcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxucHJpbnQgPSBjb25zb2xlLmxvZ1xyXG5cclxuY2xhc3MgQ2lyY2xlIGV4dGVuZHMgQ29tcG9uZW50XHJcblx0Y29uc3RydWN0b3IgOiAocHJvcHMpIC0+XHJcblx0XHRzdXBlciBwcm9wc1xyXG5cdFx0QHN0YXRlID0gZmlsbDogXCJ5ZWxsb3dcIiwgeDpAcHJvcHMueCwgeTpAcHJvcHMueSwgdng6MSwgdnk6MSxyOkBwcm9wcy5yXHJcblx0XHRzZXRJbnRlcnZhbCAoKCkgPT4gQG1vdmUoKSksIDUwXHJcblx0bW92ZSA6IC0+XHJcblx0XHR7eCx5LHZ4LHZ5LHJ9ID0gQHN0YXRlXHJcblx0XHRpZiBub3QgKHI8eDwyMDAtcikgdGhlbiB2eD0tdnhcclxuXHRcdGlmIG5vdCAocjx5PDMwMC1yKSB0aGVuIHZ5PS12eVxyXG5cdFx0eCs9dnhcclxuXHRcdHkrPXZ5XHJcblx0XHRAc2V0U3RhdGUge3gseSx2eCx2eX1cclxuXHRcdFxyXG5cdHJlbmRlciA6IC0+XHJcblx0XHQ8Y2lyY2xlIFxyXG5cdFx0XHRjeD17QHN0YXRlLnh9IFxyXG5cdFx0XHRjeT17QHN0YXRlLnl9IFxyXG5cdFx0XHRyID17QHN0YXRlLnJ9IFxyXG5cdFx0XHRzdHJva2U9e0Bwcm9wcy5zdHJva2V9IFxyXG5cdFx0XHRzdHJva2VXaWR0aD17QHByb3BzLnN0cm9rZVdpZHRofSBcclxuXHRcdFx0ZmlsbD17QHN0YXRlLmZpbGx9IFxyXG5cdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IEBzZXRTdGF0ZSBmaWxsIDogXCJyZWRcIn0gXHJcblx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4gQHNldFN0YXRlIGZpbGwgOiBcInllbGxvd1wifSBcclxuXHRcdC8+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQgXHJcblx0Y29uc3RydWN0b3IgOiAtPlxyXG5cdFx0c3VwZXIoKVxyXG5cdFx0QHN0YXRlID0ge3g6MTAwLCB5OjEwMH1cclxuXHRyZW5kZXIgOiAtPlxyXG5cdFx0PGRpdj4gXHJcblx0XHRcdDxzdmcgd2lkdGg9JzIwMCcgaGVpZ2h0PSczMDAnIG9uTW91c2VNb3ZlPXsoZSk9PiBAc2V0U3RhdGUgeDplLmNsaWVudFgsIHk6ZS5jbGllbnRZfT5cclxuXHRcdFx0XHQ8Q2lyY2xlIHg9e0BzdGF0ZS54fSB5PXtAc3RhdGUueX0gcj17NDB9IHN0cm9rZT1cInJnYigwLDAsMClcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwieWVsbG93XCIgIC8+XHJcblx0XHRcdCA8L3N2Zz5cdFx0XHRcclxuXHRcdDwvZGl2PlxyXG4iXX0=
//# sourceURL=C:\Lab\2017\155-React-Sandbox\coffee\App6.coffee