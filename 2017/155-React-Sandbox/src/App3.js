// Generated by CoffeeScript 2.0.3
  /*
  eslint-disable 
  */
var App, Button,
  indexOf = [].indexOf;

import React, {
  Component
} from 'react';

Button = class Button extends Component {
  render() {
    return <button style={{
        width: 50
      }} onClick={() => {
        return this.props.father.calculate(this.props.cmd);
      }}>{this.props.cmd}</button>;
  }

};

export default App = class App extends Component {
  constructor() {
    super();
    this.state = {
      t: '0',
      z: '1',
      y: '2',
      x: '3',
      entering: false
    };
  }

  render() {
    return <div>
			<div>{this.state.t}</div>
			<div>{this.state.z}</div>
			<div>{this.state.y}</div>
			<div>{this.state.x}</div>
			<div><Button father={this} cmd='clr' /> <Button father={this} cmd='chs' /> <Button father={this} cmd='%' /> <Button father={this} cmd='÷' /> </div>
			<div><Button father={this} cmd='7' />   <Button father={this} cmd='8' />   <Button father={this} cmd='9' /> <Button father={this} cmd='x' /> </div>
			<div><Button father={this} cmd='4' />   <Button father={this} cmd='5' />   <Button father={this} cmd='6' /> <Button father={this} cmd='-' /> </div>
			<div><Button father={this} cmd='1' />   <Button father={this} cmd='2' />   <Button father={this} cmd='3' /> <Button father={this} cmd='+' /> </div>
			<div><Button father={this} cmd='0' />   <Button father={this} cmd='.' />   <Button father={this} cmd='enter' /> </div>
		</div>;
  }

  calculate(cmd) {
    var x, y;
    if (cmd === 'clr') {
      this.setState({
        x: '0',
        y: '0',
        z: '0',
        t: '0',
        entering: false
      });
    }
    if (cmd === 'enter') {
      this.setState({
        x: this.state.x,
        y: this.state.x,
        z: this.state.y,
        t: this.state.z,
        entering: false
      });
    }
    if (cmd === 'chs') {
      this.setState({
        x: -this.state.x,
        entering: false
      });
    }
    if (indexOf.call("+-x÷%", cmd) >= 0) {
      x = parseFloat(this.state.x);
      y = parseFloat(this.state.y);
      if (cmd === '+') {
        x = y + x;
      }
      if (cmd === '-') {
        x = y - x;
      }
      if (cmd === 'x') {
        x = y * x;
      }
      if (cmd === '÷') {
        x = y / x;
      }
      if (cmd === '%') {
        x = y % x;
      }
      this.setState({
        x: x.toString(),
        y: this.state.z,
        z: this.state.t,
        entering: false
      });
    }
    if (indexOf.call("0123456789.", cmd) >= 0) {
      if (this.state.entering) {
        if (indexOf.call('0123456789', cmd) >= 0 || !this.state.x.includes('.')) {
          return this.setState({
            x: this.state.x + cmd
          });
        }
      } else {
        return this.setState({
          x: cmd,
          y: this.state.x,
          z: this.state.y,
          t: this.state.z,
          entering: true
        });
      }
    }
  }

};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwMy5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXMiOlsiY29mZmVlXFxBcHAzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztBQUFBLElBQUEsR0FBQSxFQUFBLE1BQUE7RUFBQTs7QUFNQSxPQUFPLEtBQVAsRUFBQTtFQUFnQixTQUFoQjtDQUFBLE1BQUE7O0FBRU0sU0FBTixNQUFBLE9BQUEsUUFBcUIsVUFBckI7RUFDQyxNQUFTLENBQUEsQ0FBQTtXQUFJLENBQUEsT0FBTyxLQUFBLENBQU0sQ0FBQztRQUFDLEtBQUEsRUFBTTtNQUFQLENBQUQsRUFBYSxPQUFBLENBQVUsQ0FBQyxDQUFBLENBQUEsR0FBQTtlQUFNLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQWQsQ0FBd0IsSUFBQyxDQUFBLEtBQUssQ0FBQyxHQUEvQjtNQUFOLENBQUQsQ0FBcEMsQ0FBOEUsQ0FBRSxJQUFDLENBQUEsS0FBSyxDQUFDLEdBQVQsQ0FBOUUsRUFBQSxNQUFBO0VBQUo7O0FBRFY7O0FBR0EsT0FBQSxRQUFxQixNQUFOLE1BQUEsSUFBQSxRQUFrQixVQUFsQjtFQUVkLFdBQWMsQ0FBQSxDQUFBO1NBQ2IsQ0FBQTtJQUNBLElBQUMsQ0FBQSxLQUFELEdBQVM7TUFBQyxDQUFBLEVBQUUsR0FBSDtNQUFRLENBQUEsRUFBRSxHQUFWO01BQWUsQ0FBQSxFQUFFLEdBQWpCO01BQXNCLENBQUEsRUFBRSxHQUF4QjtNQUE2QixRQUFBLEVBQVM7SUFBdEM7RUFGSTs7RUFJZCxNQUFTLENBQUEsQ0FBQTtXQUNQLENBQUEsR0FBQTtHQUNDLENBQUEsR0FBQSxDQUFHLENBQUUsSUFBQyxDQUFBLEtBQUssQ0FBQyxDQUFULENBQUgsRUFBQSxHQUFBO0dBQ0EsQ0FBQSxHQUFBLENBQUcsQ0FBRSxJQUFDLENBQUEsS0FBSyxDQUFDLENBQVQsQ0FBSCxFQUFBLEdBQUE7R0FDQSxDQUFBLEdBQUEsQ0FBRyxDQUFFLElBQUMsQ0FBQSxLQUFLLENBQUMsQ0FBVCxDQUFILEVBQUEsR0FBQTtHQUNBLENBQUEsR0FBQSxDQUFHLENBQUUsSUFBQyxDQUFBLEtBQUssQ0FBQyxDQUFULENBQUgsRUFBQSxHQUFBO0dBQ0EsQ0FBQSxHQUFBLENBQUssQ0FBQSxPQUFPLE1BQUEsQ0FBTyxDQUFDLElBQUQsRUFBSSxHQUFBLENBQUksS0FBdEIsSUFBZ0MsQ0FBQSxPQUFPLE1BQUEsQ0FBTyxDQUFDLElBQUQsRUFBSSxHQUFBLENBQUksS0FBdEIsSUFBZ0MsQ0FBQSxPQUFPLE1BQUEsQ0FBTyxDQUFDLElBQUQsRUFBSSxHQUFBLENBQUksR0FBdEIsSUFBOEIsQ0FBQSxPQUFPLE1BQUEsQ0FBTyxDQUFDLElBQUQsRUFBSSxHQUFBLENBQUksR0FBdEIsSUFBbkcsRUFBQSxHQUFBO0dBQ0EsQ0FBQSxHQUFBLENBQUssQ0FBQSxPQUFPLE1BQUEsQ0FBTyxDQUFDLElBQUQsRUFBSSxHQUFBLENBQUksR0FBdEIsTUFBZ0MsQ0FBQSxPQUFPLE1BQUEsQ0FBTyxDQUFDLElBQUQsRUFBSSxHQUFBLENBQUksR0FBdEIsTUFBZ0MsQ0FBQSxPQUFPLE1BQUEsQ0FBTyxDQUFDLElBQUQsRUFBSSxHQUFBLENBQUksR0FBdEIsSUFBOEIsQ0FBQSxPQUFPLE1BQUEsQ0FBTyxDQUFDLElBQUQsRUFBSSxHQUFBLENBQUksR0FBdEIsSUFBbkcsRUFBQSxHQUFBO0dBQ0EsQ0FBQSxHQUFBLENBQUssQ0FBQSxPQUFPLE1BQUEsQ0FBTyxDQUFDLElBQUQsRUFBSSxHQUFBLENBQUksR0FBdEIsTUFBZ0MsQ0FBQSxPQUFPLE1BQUEsQ0FBTyxDQUFDLElBQUQsRUFBSSxHQUFBLENBQUksR0FBdEIsTUFBZ0MsQ0FBQSxPQUFPLE1BQUEsQ0FBTyxDQUFDLElBQUQsRUFBSSxHQUFBLENBQUksR0FBdEIsSUFBOEIsQ0FBQSxPQUFPLE1BQUEsQ0FBTyxDQUFDLElBQUQsRUFBSSxHQUFBLENBQUksR0FBdEIsSUFBbkcsRUFBQSxHQUFBO0dBQ0EsQ0FBQSxHQUFBLENBQUssQ0FBQSxPQUFPLE1BQUEsQ0FBTyxD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QWxCLENBQTlCO2lCQUNDLElBQUMsQ0FBQSxRQUFELENBQVU7WUFBQyxDQUFBLEVBQUcsSUFBQyxDQUFBLEtBQUssQ0FBQyxDQUFQLEdBQVc7VUFBZixDQUFWLEVBREQ7U0FERDtPQUFBLE1BQUE7ZUFHSyxJQUFDLENBQUEsUUFBRCxDQUFVO1VBQUMsQ0FBQSxFQUFHLEdBQUo7VUFBUyxDQUFBLEVBQUUsSUFBQyxDQUFBLEtBQUssQ0FBQyxDQUFsQjtVQUFxQixDQUFBLEVBQUUsSUFBQyxDQUFBLEtBQUssQ0FBQyxDQUE5QjtVQUFpQyxDQUFBLEVBQUUsSUFBQyxDQUFBLEtBQUssQ0FBQyxDQUExQztVQUE2QyxRQUFBLEVBQVM7UUFBdEQsQ0FBVixFQUhMO09BREQ7O0VBZFc7O0FBbkJFIiwic291cmNlc0NvbnRlbnQiOlsiIyMjXHJcbmVzbGludC1kaXNhYmxlIFxyXG4jIyNcclxuXHJcbiMgQ2FsY3VsYXRvciBSUE5cclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCBcclxuXHRyZW5kZXIgOiAtPiA8YnV0dG9uIHN0eWxlPXt7d2lkdGg6NTB9fSBvbkNsaWNrID0geygpID0+IEBwcm9wcy5mYXRoZXIuY2FsY3VsYXRlIEBwcm9wcy5jbWR9PntAcHJvcHMuY21kfTwvYnV0dG9uPlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IFxyXG5cclxuXHRjb25zdHJ1Y3RvciA6IC0+XHJcblx0XHRzdXBlcigpXHJcblx0XHRAc3RhdGUgPSB7dDonMCcsIHo6JzEnLCB5OicyJywgeDonMycsIGVudGVyaW5nOmZhbHNlfVxyXG5cclxuXHRyZW5kZXIgOiAtPlxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdj57QHN0YXRlLnR9PC9kaXY+XHJcblx0XHRcdDxkaXY+e0BzdGF0ZS56fTwvZGl2PlxyXG5cdFx0XHQ8ZGl2PntAc3RhdGUueX08L2Rpdj5cclxuXHRcdFx0PGRpdj57QHN0YXRlLnh9PC9kaXY+XHJcblx0XHRcdDxkaXY+PEJ1dHRvbiBmYXRoZXI9e0B9IGNtZD0nY2xyJyAvPiA8QnV0dG9uIGZhdGhlcj17QH0gY21kPSdjaHMnIC8+IDxCdXR0b24gZmF0aGVyPXtAfSBjbWQ9JyUnIC8+IDxCdXR0b24gZmF0aGVyPXtAfSBjbWQ9J8O3JyAvPiA8L2Rpdj5cclxuXHRcdFx0PGRpdj48QnV0dG9uIGZhdGhlcj17QH0gY21kPSc3JyAvPiAgIDxCdXR0b24gZmF0aGVyPXtAfSBjbWQ9JzgnIC8+ICAgPEJ1dHRvbiBmYXRoZXI9e0B9IGNtZD0nOScgLz4gPEJ1dHRvbiBmYXRoZXI9e0B9IGNtZD0neCcgLz4gPC9kaXY+XHJcblx0XHRcdDxkaXY+PEJ1dHRvbiBmYXRoZXI9e0B9IGNtZD0nNCcgLz4gICA8QnV0dG9uIGZhdGhlcj17QH0gY21kPSc1JyAvPiAgIDxCdXR0b24gZmF0aGVyPXtAfSBjbWQ9JzYnIC8+IDxCdXR0b24gZmF0aGVyPXtAfSBjbWQ9Jy0nIC8+IDwvZGl2PlxyXG5cdFx0XHQ8ZGl2PjxCdXR0b24gZmF0aGVyPXtAfSBjbWQ9JzEnIC8+ICAgPEJ1dHRvbiBmYXRoZXI9e0B9IGNtZD0nMicgLz4gICA8QnV0dG9uIGZhdGhlcj17QH0gY21kPSczJyAvPiA8QnV0dG9uIGZhdGhlcj17QH0gY21kPScrJyAvPiA8L2Rpdj5cclxuXHRcdFx0PGRpdj48QnV0dG9uIGZhdGhlcj17QH0gY21kPScwJyAvPiAgIDxCdXR0b24gZmF0aGVyPXtAfSBjbWQ9Jy4nIC8+ICAgPEJ1dHRvbiBmYXRoZXI9e0B9IGNtZD0nZW50ZXInIC8+IDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdGNhbGN1bGF0ZSA6IChjbWQpIC0+IFxyXG5cdFx0aWYgY21kID09ICdjbHInICAgdGhlbiBAc2V0U3RhdGUge3g6JzAnLCB5OicwJywgejonMCcsIHQ6JzAnLCBlbnRlcmluZzpmYWxzZX1cclxuXHRcdGlmIGNtZCA9PSAnZW50ZXInIHRoZW4gQHNldFN0YXRlIHt4OkBzdGF0ZS54LCB5OkBzdGF0ZS54LCB6OkBzdGF0ZS55LCB0OkBzdGF0ZS56LCBlbnRlcmluZzpmYWxzZX1cclxuXHRcdGlmIGNtZCA9PSAnY2hzJyAgIHRoZW4gQHNldFN0YXRlIHt4IDogLUBzdGF0ZS54LCBlbnRlcmluZzpmYWxzZX1cclxuXHRcdGlmIGNtZCBpbiBcIisteMO3JVwiXHJcblx0XHRcdHggPSBwYXJzZUZsb2F0IEBzdGF0ZS54XHJcblx0XHRcdHkgPSBwYXJzZUZsb2F0IEBzdGF0ZS55XHJcblx0XHRcdGlmIGNtZCA9PSAnKycgdGhlbiB4ID0geSt4XHJcblx0XHRcdGlmIGNtZCA9PSAnLScgdGhlbiB4ID0geS14XHJcblx0XHRcdGlmIGNtZCA9PSAneCcgdGhlbiB4ID0geSp4XHJcblx0XHRcdGlmIGNtZCA9PSAnw7cnIHRoZW4geCA9IHkveFxyXG5cdFx0XHRpZiBjbWQgPT0gJyUnIHRoZW4geCA9IHkleFxyXG5cdFx0XHRAc2V0U3RhdGUge3g6IHgudG9TdHJpbmcoKSwgeTpAc3RhdGUueiwgejpAc3RhdGUudCwgZW50ZXJpbmc6ZmFsc2V9XHJcblxyXG5cdFx0aWYgY21kIGluIFwiMDEyMzQ1Njc4OS5cIlxyXG5cdFx0XHRpZiBAc3RhdGUuZW50ZXJpbmdcclxuXHRcdFx0XHRpZiBjbWQgaW4gJzAxMjM0NTY3ODknIG9yIG5vdCBAc3RhdGUueC5pbmNsdWRlcyAnLidcclxuXHRcdFx0XHRcdEBzZXRTdGF0ZSB7eDogQHN0YXRlLnggKyBjbWR9XHJcblx0XHRcdGVsc2UgQHNldFN0YXRlIHt4OiBjbWQsIHk6QHN0YXRlLngsIHo6QHN0YXRlLnksIHQ6QHN0YXRlLnosIGVudGVyaW5nOnRydWV9XHJcbiJdfQ==
//# sourceURL=C:\Lab\2017\155-React-Sandbox\coffee\App3.coffee