// Generated by CoffeeScript 2.0.3
  /*
  eslint-disable 
  */
var App, Button, button, createProblem, handleError, handleExecute, handleScan, millis, myState, print, released, save, sketch,
  indexOf = [].indexOf;

import React, {
  Component
} from 'react';

import QrReader from 'react-qr-reader';

import _ from 'lodash';

import P5Wrapper from 'react-p5-wrapper';

print = console.log;

millis = function() {
  return Date.now();
};

button = null;

released = true;

myState = {
  delay: 500,
  result: 'scan', // INIT 1
  A: "",
  B: "",
  C: "",
  D: "",
  INIT: 'init',
  from: 0,
  to: 0,
  hist: [],
  level: 0,
  bg: '#808080',
  total: 0
};

handleError = function(err) {
  return console.error(err);
};

handleScan = function(result) {
  var goal;
  if (!result) {
    return;
  }
  goal = myState.from === myState.to;
  if (goal && result.indexOf('INIT') !== 0) {
    return;
  }
  myState.result = result;
  myState.bg = '#FFFF00';
  return button.title = result.split(' ')[0];
};

handleExecute = function() {
  var arr, command, commands, from, level, newFrom, op, to;
  myState.result = myState.result.replace("  ", " ");
  arr = myState.result.split(' ');
  op = arr[0];
  command = myState[op];
  newFrom === 0;
  if (command === '+2') {
    newFrom = save(myState.from + 2);
  }
  if (command === '*2') {
    newFrom = save(myState.from * 2);
  }
  if (command === '/2' && myState.from % 2 === 0) {
    newFrom = save(myState.from / 2);
  }
  if (command === 'undo' && myState.hist.length > 0) {
    myState.from = myState.hist.pop();
  }
  if (command === 'init') {
    commands = '+2 *2 /2 undo'.split(' ');
    commands = _.shuffle(commands);
    level = parseInt(arr[1]);
    [from, to] = createProblem(level);
    myState = {
      A: commands[0],
      B: commands[1],
      C: commands[2],
      D: commands[3],
      INIT: 'init',
      from: from,
      to: to,
      hist: [],
      start: millis(),
      operations: 0,
      total: 0,
      result: 'scan',
      sida: 0,
      level: level
    };
  }
  button.title = 'scan';
  return myState.bg = newFrom === myState.to ? '#00FF00' : '#FFFFFF';
};

save = function(value) {
  myState.hist.push(myState.from);
  myState.from = value;
  myState.operations++;
  myState.total = ((millis() - myState.start) / 1000 + 10 * myState.operations).toFixed(3);
  return value;
};

createProblem = function(level) {
  var a, b, item, j, k, l, len, len1, lst, lst2, n, ref, save1, tree;
  n = Math.floor(Math.pow(2, 4 + level / 3)); // nodes
  a = Math.floor(_.random(1, n / 2));
  lst = [a];
  tree = [a];
  lst2 = [];
  save1 = function(item) {
    if (Math.floor(item) === item && item <= n) {
      if (indexOf.call(tree, item) < 0) {
        lst2.push(item);
        return tree.push(item);
      }
    }
  };
  ref = _.range(level);
  for (k = 0, len = ref.length; k < len; k++) {
    j = ref[k];
    lst2 = [];
    for (l = 0, len1 = lst.length; l < len1; l++) {
      item = lst[l];
      save1(item + 2);
      save1(item * 2);
      if (item % 2 === 0) {
        save1(item / 2);
      }
    }
    lst = lst2;
  }
  b = _.sample(lst);
  return [a, b];
};

Button = class Button {
  constructor(p1, x1, y, r, title, f) {
    this.p = p1;
    this.x = x1;
    this.y = y;
    this.r = r;
    this.title = title;
    this.f = f;
  }

  draw() {
    this.p.fill(255);
    this.p.ellipse(this.x, this.y, this.r);
    this.p.fill(0);
    return this.p.text(this.title, this.x, this.y);
  }

  mousePressed(mx, my) {
    if (this.p.dist(this.x, this.y, mx, my) < this.r) {
      return this.f();
    }
  }

};

export default App = class App extends Component {
  render() {
    var h, sida, w;
    w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    sida = w < h ? w / 2 : h / 2;
    myState.previewStyle = {
      height: sida,
      width: sida
    };
    return <div style={{
        backgroundColor: '#808080'
      }}> 
			<table style={{
        width: w
      }}> 
				<tbody style={{
        width: w
      }}>
				<tr>
					<td style={{
        width: (w - sida) / 2
      }}></td>
					<td>
						<QrReader delay={myState.delay} style={myState.previewStyle} onError={handleError} onScan={handleScan} />
					</td>
				</tr>
				</tbody>
			</table>
			<P5Wrapper sketch={sketch} />
		</div>;
  }

};

sketch = function(p) {
  p.setup = function() {
    p.createCanvas(p.windowWidth - 5, p.windowHeight / 2 - 5);
    p.textAlign(p.CENTER, p.CENTER);
    return button = new Button(p, 0.5 * p.width, 0.2 * p.height, 0.3 * p.height, "scan", handleExecute);
  };
  p.draw = function() {
    var i, k, littera, op, s, x;
    s = myState;
    p.background(s.bg);
    op = s.result.split(' ')[0];
    if (op !== 'scan') {
      button.title = s[op];
    }
    p.rectMode(p.CENTER);
    p.textSize(0.1 * p.height);
    button.draw(p);
    p.fill(0);
    for (i = k = 0; k <= 3; i = ++k) {
      littera = 'A B C D'.split(' ')[i];
      x = p.lerp(0.2 * p.width, 0.4 * p.width, i);
      p.text(littera, x, 0.45 * p.height);
      p.text(s[littera], x, 0.6 * p.height);
    }
    p.textSize(0.25 * p.height);
    p.text(s.from, 0.2 * p.width, 0.2 * p.height);
    p.text(s.to, 0.8 * p.width, 0.2 * p.height);
    p.textSize(0.08 * p.height);
    p.textAlign(p.RIGHT, p.CENTER);
    p.text(s.hist.join(' '), 0.95 * p.width, 0.75 * p.height);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(s.level - s.hist.length, 0.2 * p.width, 0.9 * p.height);
    return p.text(s.total, 0.8 * p.width, 0.9 * p.height);
  };
  p.mouseReleased = function() { // to make Android work 
    released = true;
    return false;
  };
  return p.mousePressed = function() {
    if (!released) { // to make Android work 
      return;
    }
    released = false;
    button.mousePressed(p.mouseX, p.mouseY);
    return false;
  };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXEFwcC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7QUFBQSxJQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLGFBQUEsRUFBQSxXQUFBLEVBQUEsYUFBQSxFQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxRQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUE7RUFBQTs7QUFJQSxPQUFPLEtBQVAsRUFBQTtFQUFnQixTQUFoQjtDQUFBLE1BQUE7O0FBQ0EsT0FBTyxRQUFQLE1BQUE7O0FBQ0EsT0FBTyxDQUFQLE1BQUE7O0FBQ0EsT0FBTyxTQUFQLE1BQUE7O0FBRUEsS0FBQSxHQUFRLE9BQU8sQ0FBQzs7QUFFaEIsTUFBQSxHQUFTLFFBQUEsQ0FBQSxDQUFBO1NBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBQTtBQUFIOztBQUNULE1BQUEsR0FBUzs7QUFDVCxRQUFBLEdBQVc7O0FBQ1gsT0FBQSxHQUNDO0VBQUEsS0FBQSxFQUFPLEdBQVA7RUFDQSxNQUFBLEVBQVEsTUFEUjtFQUVBLENBQUEsRUFBTyxFQUZQO0VBR0EsQ0FBQSxFQUFPLEVBSFA7RUFJQSxDQUFBLEVBQU8sRUFKUDtFQUtBLENBQUEsRUFBTyxFQUxQO0VBTUEsSUFBQSxFQUFPLE1BTlA7RUFPQSxJQUFBLEVBQU8sQ0FQUDtFQVFBLEVBQUEsRUFBTyxDQVJQO0VBU0EsSUFBQSxFQUFPLEVBVFA7RUFVQSxLQUFBLEVBQVEsQ0FWUjtFQVdBLEVBQUEsRUFBTyxTQVhQO0VBWUEsS0FBQSxFQUFRO0FBWlI7O0FBY0QsV0FBQSxHQUFjLFFBQUEsQ0FBQyxHQUFELENBQUE7U0FBUSxPQUFPLENBQUMsS0FBUixDQUFjLEdBQWQ7QUFBUjs7QUFDZCxVQUFBLEdBQWEsUUFBQSxDQUFDLE1BQUQsQ0FBQTtBQUNaLE1BQUE7RUFBQSxJQUFHLENBQUksTUFBUDtBQUFtQixXQUFu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QyxDQUFDLElBQUYsQ0FBTyxDQUFDLENBQUMsS0FBRixHQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBdEIsRUFBNkIsR0FBQSxHQUFJLENBQUMsQ0FBQyxLQUFuQyxFQUF5QyxHQUFBLEdBQUksQ0FBQyxDQUFDLE1BQS9DO1dBQ0EsQ0FBQyxDQUFDLElBQUYsQ0FBTyxDQUFDLENBQUMsS0FBVCxFQUFlLEdBQUEsR0FBSSxDQUFDLENBQUMsS0FBckIsRUFBMkIsR0FBQSxHQUFJLENBQUMsQ0FBQyxNQUFqQztFQTNCUTtFQTZCVCxDQUFDLENBQUMsYUFBRixHQUFrQixRQUFBLENBQUEsQ0FBQSxFQUFBO0lBQ2pCLFFBQUEsR0FBVztXQUNYO0VBRmlCO1NBSWxCLENBQUMsQ0FBQyxZQUFGLEdBQWlCLFFBQUEsQ0FBQSxDQUFBO0lBQ2hCLElBQUcsQ0FBQyxRQUFKO0FBQWtCLGFBQWxCOztJQUNBLFFBQUEsR0FBVztJQUNYLE1BQU0sQ0FBQyxZQUFQLENBQW9CLENBQUMsQ0FBQyxNQUF0QixFQUE2QixDQUFDLENBQUMsTUFBL0I7V0FDQTtFQUpnQjtBQXhDVCIsInNvdXJjZXNDb250ZW50IjpbIiMjI1xyXG5lc2xpbnQtZGlzYWJsZSBcclxuIyMjXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBRclJlYWRlciBmcm9tICdyZWFjdC1xci1yZWFkZXInXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IFA1V3JhcHBlciBmcm9tICdyZWFjdC1wNS13cmFwcGVyJ1xyXG5cclxucHJpbnQgPSBjb25zb2xlLmxvZyBcclxuXHJcbm1pbGxpcyA9IC0+IERhdGUubm93KClcclxuYnV0dG9uID0gbnVsbFxyXG5yZWxlYXNlZCA9IHRydWUgXHJcbm15U3RhdGUgPSBcclxuXHRkZWxheTogNTAwXHJcblx0cmVzdWx0OiAnc2NhbicgIyBJTklUIDFcclxuXHRBICAgIDogXCJcIlxyXG5cdEIgICAgOiBcIlwiXHJcblx0QyAgICA6IFwiXCJcclxuXHREICAgIDogXCJcIlxyXG5cdElOSVQgOiAnaW5pdCdcclxuXHRmcm9tIDogMFxyXG5cdHRvICAgOiAwXHJcblx0aGlzdCA6IFtdICAgXHJcblx0bGV2ZWwgOiAwXHJcblx0YmcgICA6ICcjODA4MDgwJyBcclxuXHR0b3RhbCA6IDBcclxuXHJcbmhhbmRsZUVycm9yID0gKGVyciktPiBjb25zb2xlLmVycm9yIGVyclxyXG5oYW5kbGVTY2FuID0gKHJlc3VsdCkgLT4gXHJcblx0aWYgbm90IHJlc3VsdCB0aGVuIHJldHVybiAgXHJcblx0Z29hbCA9IG15U3RhdGUuZnJvbSA9PSBteVN0YXRlLnRvXHJcblx0aWYgZ29hbCBhbmQgcmVzdWx0LmluZGV4T2YoJ0lOSVQnKSAhPSAwIHRoZW4gcmV0dXJuIFxyXG5cdG15U3RhdGUucmVzdWx0ID0gcmVzdWx0XHJcblx0bXlTdGF0ZS5iZyA9ICcjRkZGRjAwJ1xyXG5cdGJ1dHRvbi50aXRsZSA9IHJlc3VsdC5zcGxpdCgnICcpWzBdXHJcblxyXG5oYW5kbGVFeGVjdXRlID0gLT5cclxuXHRteVN0YXRlLnJlc3VsdCA9IG15U3RhdGUucmVzdWx0LnJlcGxhY2UgXCIgIFwiLFwiIFwiXHJcblx0YXJyID0gbXlTdGF0ZS5yZXN1bHQuc3BsaXQgJyAnXHJcblx0b3AgPSBhcnJbMF1cclxuXHRjb21tYW5kID0gbXlTdGF0ZVtvcF1cclxuXHRuZXdGcm9tID09IDBcclxuXHRpZiBjb21tYW5kID09JysyJyB0aGVuIG5ld0Zyb20gPSBzYXZlIG15U3RhdGUuZnJvbSsyXHJcblx0aWYgY29tbWFuZCA9PScqMicgdGhlbiBuZXdGcm9tID0gc2F2ZSBteVN0YXRlLmZyb20qMlxyXG5cdGlmIGNvbW1hbmQgPT0nLzInIGFuZCBteVN0YXRlLmZyb20gJSAyID09IDAgdGhlbiBuZXdGcm9tID0gc2F2ZSBteVN0YXRlLmZyb20vMiBcclxuXHRpZiBjb21tYW5kID09J3VuZG8nIGFuZCBteVN0YXRlLmhpc3QubGVuZ3RoID4gMCB0aGVuIG15U3RhdGUuZnJvbSA9IG15U3RhdGUuaGlzdC5wb3AoKVxyXG5cdGlmIGNvbW1hbmQgPT0naW5pdCcgXHJcblx0XHRjb21tYW5kcyA9ICcrMiAqMiAvMiB1bmRvJy5zcGxpdCAnICdcclxuXHRcdGNvbW1hbmRzID0gXy5zaHVmZmxlIGNvbW1hbmRzXHJcblx0XHRsZXZlbCA9IHBhcnNlSW50IGFyclsxXVxyXG5cdFx0W2Zyb20sdG9dID0gY3JlYXRlUHJvYmxlbSBsZXZlbFxyXG5cdFx0bXlTdGF0ZSA9XHJcblx0XHRcdEEgOiBjb21tYW5kc1swXSBcclxuXHRcdFx0QiA6IGNvbW1hbmRzWzFdIFxyXG5cdFx0XHRDIDogY29tbWFuZHNbMl0gXHJcblx0XHRcdEQgOiBjb21tYW5kc1szXSBcclxuXHRcdFx0SU5JVCA6ICdpbml0J1xyXG5cdFx0XHRmcm9tIDogZnJvbVxyXG5cdFx0XHR0byA6IHRvXHJcblx0XHRcdGhpc3QgOiBbXVxyXG5cdFx0XHRzdGFydCA6IG1pbGxpcygpXHJcblx0XHRcdG9wZXJhdGlvbnMgOiAwXHJcblx0XHRcdHRvdGFsIDogMFxyXG5cdFx0XHRyZXN1bHQgOiAnc2NhbidcclxuXHRcdFx0c2lkYSA6IDBcclxuXHRcdFx0bGV2ZWwgOiBsZXZlbFxyXG5cdGJ1dHRvbi50aXRsZSA9ICdzY2FuJ1xyXG5cdG15U3RhdGUuYmcgPSBpZiBuZXdGcm9tID09IG15U3RhdGUudG8gdGhlbiAnIzAwRkYwMCcgZWxzZSAnI0ZGRkZGRidcclxuXHJcbnNhdmUgPSAodmFsdWUpIC0+XHJcblx0bXlTdGF0ZS5oaXN0LnB1c2ggbXlTdGF0ZS5mcm9tXHJcblx0bXlTdGF0ZS5mcm9tID0gdmFsdWVcclxuXHRteVN0YXRlLm9wZXJhdGlvbnMrK1xyXG5cdG15U3RhdGUudG90YWwgPSAoKG1pbGxpcygpLW15U3RhdGUuc3RhcnQpLzEwMDAgKyAxMCAqIG15U3RhdGUub3BlcmF0aW9ucykudG9GaXhlZCgzKVxyXG5cdHZhbHVlXHJcblxyXG5jcmVhdGVQcm9ibGVtID0gKGxldmVsKSAtPlxyXG5cdG4gPSBNYXRoLmZsb29yIE1hdGgucG93IDIsIDQrbGV2ZWwvMyAjIG5vZGVzXHJcblx0YSA9IE1hdGguZmxvb3IgXy5yYW5kb20gMSxuLzJcclxuXHRsc3QgPSBbYV1cclxuXHR0cmVlID0gW2FdXHJcblx0bHN0MiA9IFtdXHJcblx0c2F2ZTEgPSAoaXRlbSkgLT5cclxuXHRcdGlmIE1hdGguZmxvb3IoaXRlbSkgPT0gaXRlbSBhbmQgaXRlbSA8PSBuXHJcblx0XHRcdGlmIGl0ZW0gbm90IGluIHRyZWVcclxuXHRcdFx0XHRsc3QyLnB1c2ggaXRlbVxyXG5cdFx0XHRcdHRyZWUucHVzaCBpdGVtXHJcblx0Zm9yIGogaW4gXy5yYW5nZSBsZXZlbFxyXG5cdFx0bHN0MiA9IFtdXHJcblx0XHRmb3IgaXRlbSBpbiBsc3RcclxuXHRcdFx0c2F2ZTEgaXRlbSsyIFxyXG5cdFx0XHRzYXZlMSBpdGVtKjJcclxuXHRcdFx0aWYgaXRlbSUyPT0wIHRoZW4gc2F2ZTEgaXRlbS8yXHJcblx0XHRsc3QgPSBsc3QyXHJcblx0YiA9IF8uc2FtcGxlIGxzdCBcclxuXHRbYSxiXVxyXG5cclxuY2xhc3MgQnV0dG9uIFxyXG5cdGNvbnN0cnVjdG9yIDogKEBwLEB4LEB5LEByLEB0aXRsZSxAZikgLT5cclxuXHRkcmF3IDogLT5cclxuXHRcdEBwLmZpbGwgMjU1XHJcblx0XHRAcC5lbGxpcHNlIEB4LEB5LEByXHJcblx0XHRAcC5maWxsIDBcclxuXHRcdEBwLnRleHQgQHRpdGxlLEB4LEB5XHJcblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPiBpZiBAcC5kaXN0KEB4LEB5LG14LG15KSA8IEByIHRoZW4gQGYoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IFxyXG5cdHJlbmRlciA6IC0+XHJcblx0XHR3ID0gTWF0aC5tYXggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwXHJcblx0XHRoID0gTWF0aC5tYXggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDBcclxuXHRcdHNpZGEgPSBpZiB3PGggdGhlbiB3LzIgZWxzZSBoLzJcclxuXHRcdG15U3RhdGUucHJldmlld1N0eWxlID0gXHJcblx0XHRcdGhlaWdodDogc2lkYVxyXG5cdFx0XHR3aWR0aDogc2lkYVxyXG5cclxuXHRcdDxkaXYgc3R5bGUgPSB7e2JhY2tncm91bmRDb2xvcjonIzgwODA4MCd9fT4gXHJcblx0XHRcdDx0YWJsZSBzdHlsZSA9IHt3aWR0aCA6IHd9ID4gXHJcblx0XHRcdFx0PHRib2R5IHN0eWxlID0ge3dpZHRoIDogd30+XHJcblx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0PHRkIHN0eWxlID0ge3dpZHRoIDogKHctc2lkYSkvMn0+PC90ZD5cclxuXHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0PFFyUmVhZGVyXHJcblx0XHRcdFx0XHRcdFx0ZGVsYXkgPSB7bXlTdGF0ZS5kZWxheX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZSA9IHtteVN0YXRlLnByZXZpZXdTdHlsZX1cclxuXHRcdFx0XHRcdFx0XHRvbkVycm9yID0ge2hhbmRsZUVycm9yfVxyXG5cdFx0XHRcdFx0XHRcdG9uU2NhbiA9IHtoYW5kbGVTY2FufVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdDwvdGFibGU+XHJcblx0XHRcdDxQNVdyYXBwZXIgc2tldGNoPXtza2V0Y2h9IC8+XHJcblx0XHQ8L2Rpdj5cclxuXHJcbnNrZXRjaCA9IChwKSAtPlxyXG5cclxuXHRwLnNldHVwID0gLT4gXHJcblx0XHRwLmNyZWF0ZUNhbnZhcyBwLndpbmRvd1dpZHRoLTUsIHAud2luZG93SGVpZ2h0LzItNVxyXG5cdFx0cC50ZXh0QWxpZ24gcC5DRU5URVIscC5DRU5URVJcclxuXHRcdGJ1dHRvbiA9IG5ldyBCdXR0b24gcCwwLjUqcC53aWR0aCwwLjIqcC5oZWlnaHQsMC4zKnAuaGVpZ2h0LFwic2NhblwiLCBoYW5kbGVFeGVjdXRlXHJcblxyXG5cdHAuZHJhdyA9IC0+XHJcblx0XHRzID0gbXlTdGF0ZVxyXG5cdFx0cC5iYWNrZ3JvdW5kIHMuYmdcclxuXHRcdG9wID0gcy5yZXN1bHQuc3BsaXQoJyAnKVswXVxyXG5cdFx0aWYgb3AgIT0gJ3NjYW4nXHJcblx0XHRcdGJ1dHRvbi50aXRsZSA9IHNbb3BdXHJcblxyXG5cdFx0cC5yZWN0TW9kZSBwLkNFTlRFUlxyXG5cdFx0cC50ZXh0U2l6ZSAwLjEqcC5oZWlnaHRcclxuXHRcdGJ1dHRvbi5kcmF3IHBcclxuXHRcdHAuZmlsbCAwXHJcblx0XHRmb3IgaSBpbiBbMC4uM11cclxuXHRcdFx0bGl0dGVyYSA9ICdBIEIgQyBEJy5zcGxpdCgnICcpW2ldXHJcblx0XHRcdHggPSBwLmxlcnAgMC4yKnAud2lkdGgsMC40KnAud2lkdGgsaVxyXG5cdFx0XHRwLnRleHQgbGl0dGVyYSx4LDAuNDUqcC5oZWlnaHRcclxuXHRcdFx0cC50ZXh0IHNbbGl0dGVyYV0seCwwLjYqcC5oZWlnaHRcclxuXHJcblx0XHRwLnRleHRTaXplIDAuMjUqcC5oZWlnaHQgXHJcblx0XHRwLnRleHQgcy5mcm9tLDAuMipwLndpZHRoLDAuMipwLmhlaWdodFxyXG5cdFx0cC50ZXh0IHMudG8sICAwLjgqcC53aWR0aCwwLjIqcC5oZWlnaHRcclxuXHJcblx0XHRwLnRleHRTaXplIDAuMDgqcC5oZWlnaHRcclxuXHRcdHAudGV4dEFsaWduIHAuUklHSFQscC5DRU5URVJcclxuXHRcdHAudGV4dCBzLmhpc3Quam9pbignICcpLDAuOTUqcC53aWR0aCwwLjc1KnAuaGVpZ2h0XHJcblxyXG5cdFx0cC50ZXh0QWxpZ24gcC5DRU5URVIscC5DRU5URVJcclxuXHRcdHAudGV4dCBzLmxldmVsLXMuaGlzdC5sZW5ndGgsMC4yKnAud2lkdGgsMC45KnAuaGVpZ2h0XHJcblx0XHRwLnRleHQgcy50b3RhbCwwLjgqcC53aWR0aCwwLjkqcC5oZWlnaHRcclxuXHJcblx0cC5tb3VzZVJlbGVhc2VkID0gLT4gIyB0byBtYWtlIEFuZHJvaWQgd29yayBcclxuXHRcdHJlbGVhc2VkID0gdHJ1ZSBcclxuXHRcdGZhbHNlXHJcblxyXG5cdHAubW91c2VQcmVzc2VkID0gLT5cclxuXHRcdGlmICFyZWxlYXNlZCB0aGVuIHJldHVybiAjIHRvIG1ha2UgQW5kcm9pZCB3b3JrIFxyXG5cdFx0cmVsZWFzZWQgPSBmYWxzZVxyXG5cdFx0YnV0dG9uLm1vdXNlUHJlc3NlZCBwLm1vdXNlWCxwLm1vdXNlWVxyXG5cdFx0ZmFsc2UgIl19
//# sourceURL=C:\Lab\2017\151-react-qr-shortcut\coffee\App.coffee