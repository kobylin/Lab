// Generated by CoffeeScript 2.0.3
var Action, Button, RADIUS, State, WIDTH, buttonLeft, buttonRight, buttons, draw, mousePressed, mouseReleased, released, setup, state;

RADIUS = null;

WIDTH = null;

released = true;

Button = class Button {
  constructor(i1, j, text1) {
    this.i = i1;
    this.j = j;
    this.text = text1;
    this.x = WIDTH / 2 + WIDTH * this.i;
    this.y = RADIUS + 2 * RADIUS * this.j;
  }

  draw() {
    fc(1);
    circle(this.x, this.y, RADIUS);
    fc(0);
    return text(this.text, this.x, this.y);
  }

  mousePressed(mx, my) {
    if (25 > dist(mx, my, this.x, this.y)) {
      state.digits[this.i] = int(this.text / [10, 1, 10, 1, 10, 1][this.i]);
      return state.memory[this.i] = int(this.text / [10, 1, 10, 1, 10, 1][this.i]);
    }
  }

};

Action = class Action {
  constructor(x1, y1, w, h, text1, f) {
    this.x = x1;
    this.y = y1;
    this.w = w;
    this.h = h;
    this.text = text1;
    this.f = f;
    this.bg = [1, 1, 1];
    this.disabled = false;
  }

  draw() {
    fc(this.bg[0], this.bg[1], this.bg[2]);
    rect(this.x, this.y, this.w, this.h);
    if (this.disabled) {
      fc(0.5);
    } else {
      fc(0);
    }
    return text(this.text, this.x, this.y);
  }

  mousePressed(mx, my) {
    if (!this.disabled && (this.x - this.w / 2 < mx && mx < this.x + this.w / 2) && (this.y - this.h / 2 < my && my < this.y + this.h / 2)) {
      return this.f();
    }
  }

};

State = class State {
  constructor() {
    this.digits = [
      0,
      0,
      0,
      0,
      0,
      0 // hh mm ss
    ];
    this.memory = [0, 0, 0, 0, 0, 0];
    this.runState = 0; // 0=start 1=pause 2=resume		
  }

  done() {
    var i, j, len, ref;
    if (!_.isEqual(this.digits, this.memory)) {
      ref = range(6);
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        this.digits[i] = this.memory[i];
      }
    } else {
      this.digits = [
        0,
        0,
        0,
        0,
        0,
        0 // hh mm ss
      ];
      this.memory = [0, 0, 0, 0, 0, 0];
    }
    this.runState = 0;
    return this.fix({});
  }

  run() {
    var i, j, len, ref, results;
    this.runState = [1, 2, 1][this.runState];
    if (this.runState === 1) {
      this.start = int(millis() / 1000);
      this.secs = 0;
      ref = range(6);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        results.push(this.secs += [36000, 3600, 600, 60, 10, 1][i] * this.digits[i]);
      }
      return results;
    }
  }

  draw() {
    var i, j, k, len, len1, n, ref, ref1, results, s, t, x, y;
    if (this.runState === 1) {
      s = this.secs - (int(millis() / 1000) - this.start);
      if (s === 0) {
        this.runState = 2;
      }
      ref = range(6);
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        n = [36000, 3600, 600, 60, 10, 1][i];
        this.digits[i] = int(s / n);
        s %= n;
      }
    }
    this.fix();
    ref1 = range(3);
    results = [];
    for (k = 0, len1 = ref1.length; k < len1; k++) {
      i = ref1[k];
      t = 10 * this.digits[2 * i] + this.digits[2 * i + 1];
      t = t.toString();
      if (t.length === 1) {
        t = "0" + t;
      }
      x = WIDTH / 2 + 2 * WIDTH * i;
      y = height - 5 * RADIUS;
      results.push(text(t, x, y));
    }
    return results;
  }

  fix() {
    if (this.runState === 2 && _.isEqual(this.digits, [0, 0, 0, 0, 0, 0])) {
      this.runState = 0;
    }
    buttonLeft.disabled = this.runState === 1;
    buttonRight.disabled = _.isEqual(this.digits, [0, 0, 0, 0, 0, 0]);
    buttonRight.text = ['Start', 'Pause', 'Resume'][this.runState];
    return buttonRight.bg = [[0, 1, 0], [1, 0, 0], [0, 1, 0]][this.runState];
  }

};

buttons = [];

state = new State;

buttonLeft = null;

buttonRight = null;

setup = function() {
  var i, j, k, l, len, len1, len2, len3, len4, len5, m, o, p, ref, ref1, ref2, ref3, ref4, ref5, results;
  createCanvas(windowWidth, windowHeight);
  RADIUS = height / 20;
  WIDTH = width / 6;
  buttonLeft = new Action(WIDTH * 2.5, height - RADIUS, WIDTH, RADIUS, 'Done', function() {
    return state.done();
  });
  buttonRight = new Action(WIDTH * 4.5, height - RADIUS, WIDTH, RADIUS, 'Start', function() {
    return state.run();
  });
  buttons.push(buttonLeft);
  buttons.push(buttonRight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  ref = range(3);
  // hh
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    buttons.push(new Button(0, i, i * 10));
  }
  ref1 = range(10);
  for (k = 0, len1 = ref1.length; k < len1; k++) {
    i = ref1[k];
    buttons.push(new Button(1, i, i));
  }
  ref2 = range(6);
  // mm
  for (l = 0, len2 = ref2.length; l < len2; l++) {
    i = ref2[l];
    buttons.push(new Button(2, i, i * 10));
  }
  ref3 = range(10);
  for (m = 0, len3 = ref3.length; m < len3; m++) {
    i = ref3[m];
    buttons.push(new Button(3, i, i));
  }
  ref4 = range(6);
  // ss
  for (o = 0, len4 = ref4.length; o < len4; o++) {
    i = ref4[o];
    buttons.push(new Button(4, i, i * 10));
  }
  ref5 = range(10);
  results = [];
  for (p = 0, len5 = ref5.length; p < len5; p++) {
    i = ref5[p];
    results.push(buttons.push(new Button(5, i, i)));
  }
  return results;
};

draw = function() {
  var button, j, len;
  bg(0.5);
  textSize(RADIUS);
  for (j = 0, len = buttons.length; j < len; j++) {
    button = buttons[j];
    button.draw();
  }
  textSize(2 * RADIUS);
  return state.draw();
};

mouseReleased = function() {
  released = true;
  return false;
};

mousePressed = function() {
  var button, j, len;
  if (!released) {
    return;
  }
  released = false;
  for (j = 0, len = buttons.length; j < len; j++) {
    button = buttons[j];
    button.mousePressed(mouseX, mouseY);
  }
  print(state.digits);
  return false;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsTUFBQSxFQUFBLE1BQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxFQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsWUFBQSxFQUFBLGFBQUEsRUFBQSxRQUFBLEVBQUEsS0FBQSxFQUFBOztBQUFBLE1BQUEsR0FBUzs7QUFDVCxLQUFBLEdBQVE7O0FBQ1IsUUFBQSxHQUFXOztBQUVMLFNBQU4sTUFBQSxPQUFBO0VBQ0MsV0FBYyxHQUFBLEdBQUEsT0FBQSxDQUFBO0lBQUMsSUFBQyxDQUFBO0lBQUUsSUFBQyxDQUFBO0lBQUUsSUFBQyxDQUFBO0lBQ3JCLElBQUMsQ0FBQSxDQUFELEdBQUssS0FBQSxHQUFNLENBQU4sR0FBVSxLQUFBLEdBQU0sSUFBQyxDQUFBO0lBQ3RCLElBQUMsQ0FBQSxDQUFELEdBQUssTUFBQSxHQUFTLENBQUEsR0FBRSxNQUFGLEdBQVMsSUFBQyxDQUFBO0VBRlg7O0VBR2QsSUFBTyxDQUFBLENBQUE7SUFDTixFQUFBLENBQUcsQ0FBSDtJQUNBLE1BQUEsQ0FBTyxJQUFDLENBQUEsQ0FBUixFQUFVLElBQUMsQ0FBQSxDQUFYLEVBQWEsTUFBYjtJQUNBLEVBQUEsQ0FBRyxDQUFIO1dBQ0EsSUFBQSxDQUFLLElBQUMsQ0FBQSxJQUFOLEVBQVcsSUFBQyxDQUFBLENBQVosRUFBYyxJQUFDLENBQUEsQ0FBZjtFQUpNOztFQUtQLFlBQWUsQ0FBQyxFQUFELEVBQUksRUFBSixDQUFBO0lBQ2QsSUFBRyxFQUFBLEdBQUssSUFBQSxDQUFLLEVBQUwsRUFBUSxFQUFSLEVBQVcsSUFBQyxDQUFBLENBQVosRUFBYyxJQUFDLENBQUEsQ0FBZixDQUFSO01BQ0MsS0FBSyxDQUFDLE1BQU8sQ0FBQSxJQUFDLENBQUEsQ0FBRCxDQUFiLEdB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QUFDQTs7RUFBQSxLQUFBLHdDQUFBOztJQUFBLE9BQU8sQ0FBQyxJQUFSLENBQWEsSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFBLEdBQUUsRUFBakIsQ0FBYjtFQUFBO0FBQ0E7QUFBQTtFQUFBLEtBQUEsd0NBQUE7O2lCQUFBLE9BQU8sQ0FBQyxJQUFSLENBQWEsSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLENBQWI7RUFBQSxDQUFBOztBQWxCTzs7QUFvQlIsSUFBQSxHQUFPLFFBQUEsQ0FBQSxDQUFBO0FBQ04sTUFBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBO0VBQUEsRUFBQSxDQUFHLEdBQUg7RUFDQSxRQUFBLENBQVMsTUFBVDtFQUNBLEtBQUEseUNBQUE7O0lBQ0MsTUFBTSxDQUFDLElBQVAsQ0FBQTtFQUREO0VBRUEsUUFBQSxDQUFTLENBQUEsR0FBRSxNQUFYO1NBQ0EsS0FBSyxDQUFDLElBQU4sQ0FBQTtBQU5NOztBQVFQLGFBQUEsR0FBZ0IsUUFBQSxDQUFBLENBQUE7RUFDZixRQUFBLEdBQVc7U0FDWDtBQUZlOztBQUloQixZQUFBLEdBQWUsUUFBQSxDQUFBLENBQUE7QUFDZCxNQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUE7RUFBQSxJQUFHLENBQUksUUFBUDtBQUFxQixXQUFyQjs7RUFDQSxRQUFBLEdBQVc7RUFDWCxLQUFBLHlDQUFBOztJQUNDLE1BQU0sQ0FBQyxZQUFQLENBQW9CLE1BQXBCLEVBQTJCLE1BQTNCO0VBREQ7RUFFQSxLQUFBLENBQU0sS0FBSyxDQUFDLE1BQVo7U0FDQTtBQU5jIiwic291cmNlc0NvbnRlbnQiOlsiUkFESVVTID0gbnVsbFxyXG5XSURUSCA9IG51bGxcclxucmVsZWFzZWQgPSB0cnVlIFxyXG5cclxuY2xhc3MgQnV0dG9uXHJcblx0Y29uc3RydWN0b3IgOiAoQGksQGosQHRleHQpIC0+XHJcblx0XHRAeCA9IFdJRFRILzIgKyBXSURUSCpAaVxyXG5cdFx0QHkgPSBSQURJVVMgKyAyKlJBRElVUypAalxyXG5cdGRyYXcgOiAtPlxyXG5cdFx0ZmMgMVxyXG5cdFx0Y2lyY2xlIEB4LEB5LFJBRElVU1xyXG5cdFx0ZmMgMFxyXG5cdFx0dGV4dCBAdGV4dCxAeCxAeVxyXG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cclxuXHRcdGlmIDI1ID4gZGlzdCBteCxteSxAeCxAeSBcclxuXHRcdFx0c3RhdGUuZGlnaXRzW0BpXSA9IGludCBAdGV4dCAvIFsxMCwxLDEwLDEsMTAsMV1bQGldXHJcblx0XHRcdHN0YXRlLm1lbW9yeVtAaV0gPSBpbnQgQHRleHQgLyBbMTAsMSwxMCwxLDEwLDFdW0BpXVxyXG5cclxuY2xhc3MgQWN0aW9uXHJcblx0Y29uc3RydWN0b3IgOiAoQHgsQHksQHcsQGgsQHRleHQsQGYpIC0+XHJcblx0XHRAYmcgPSBbMSwxLDFdXHJcblx0XHRAZGlzYWJsZWQgPSBmYWxzZSBcclxuXHRkcmF3IDogLT5cclxuXHRcdGZjIEBiZ1swXSxAYmdbMV0sQGJnWzJdXHJcblx0XHRyZWN0IEB4LEB5LEB3LEBoXHJcblx0XHRpZiBAZGlzYWJsZWQgdGhlbiBmYyAwLjUgZWxzZSBmYyAwXHJcblx0XHR0ZXh0IEB0ZXh0LEB4LEB5XHJcblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxyXG5cdFx0aWYgbm90IEBkaXNhYmxlZCBhbmQgQHgtQHcvMiA8IG14IDwgQHgrQHcvMiBhbmQgQHktQGgvMiA8IG15IDwgQHkrQGgvMiB0aGVuIEBmKClcclxuXHJcbmNsYXNzIFN0YXRlXHJcblx0Y29uc3RydWN0b3IgOiAtPlxyXG5cdFx0QGRpZ2l0cyA9IFswLDAsMCwwLDAsMF0gIyBoaCBtbSBzc1xyXG5cdFx0QG1lbW9yeSA9IFswLDAsMCwwLDAsMF1cclxuXHRcdEBydW5TdGF0ZSA9IDAgIyAwPXN0YXJ0IDE9cGF1c2UgMj1yZXN1bWVcdFx0XHJcblxyXG5cdGRvbmUgOiAtPiBcclxuXHRcdGlmIG5vdCBfLmlzRXF1YWwgQGRpZ2l0cyxAbWVtb3J5XHJcblx0XHRcdGZvciBpIGluIHJhbmdlIDYgXHJcblx0XHRcdFx0QGRpZ2l0c1tpXSA9IEBtZW1vcnlbaV1cclxuXHRcdGVsc2VcclxuXHRcdFx0QGRpZ2l0cyA9IFswLDAsMCwwLDAsMF0gIyBoaCBtbSBzc1xyXG5cdFx0XHRAbWVtb3J5ID0gWzAsMCwwLDAsMCwwXVxyXG5cdFx0QHJ1blN0YXRlPTBcclxuXHRcdEBmaXgge31cclxuXHJcblx0cnVuIDogLT4gXHJcblx0XHRAcnVuU3RhdGUgPSBbMSwyLDFdW0BydW5TdGF0ZV1cclxuXHRcdGlmIEBydW5TdGF0ZSA9PSAxXHJcblx0XHRcdEBzdGFydCA9IGludCBtaWxsaXMoKS8xMDAwXHJcblx0XHRcdEBzZWNzID0gMFxyXG5cdFx0XHRmb3IgaSBpbiByYW5nZSA2XHJcblx0XHRcdFx0QHNlY3MgKz0gWzM2MDAwLDM2MDAsNjAwLDYwLDEwLDFdW2ldICogQGRpZ2l0c1tpXVxyXG5cclxuXHRkcmF3IDogLT5cclxuXHRcdGlmIEBydW5TdGF0ZT09MVxyXG5cdFx0XHRzID0gQHNlY3MgLSAoaW50KG1pbGxpcygpLzEwMDApIC0gQHN0YXJ0KVxyXG5cdFx0XHRpZiBzPT0wIHRoZW4gQHJ1blN0YXRlPTJcclxuXHRcdFx0Zm9yIGkgaW4gcmFuZ2UgNlxyXG5cdFx0XHRcdG4gPSBbMzYwMDAsMzYwMCw2MDAsNjAsMTAsMV1baV1cclxuXHRcdFx0XHRAZGlnaXRzW2ldID0gaW50IHMgLyBuXHJcblx0XHRcdFx0cyAlPSBuXHJcblx0XHRAZml4KClcclxuXHJcblx0XHRmb3IgaSBpbiByYW5nZSAzXHJcblx0XHRcdHQgPSAxMCAqIEBkaWdpdHNbMippXSArIEBkaWdpdHNbMippKzFdXHJcblx0XHRcdHQgPSB0LnRvU3RyaW5nKClcclxuXHRcdFx0aWYgdC5sZW5ndGg9PTEgdGhlbiB0ID0gXCIwXCIgKyB0XHJcblx0XHRcdHggPSBXSURUSC8yICsgMipXSURUSCppXHJcblx0XHRcdHkgPSBoZWlnaHQtNSpSQURJVVNcclxuXHRcdFx0dGV4dCB0LHgseVxyXG5cclxuXHRmaXggOiAtPiBcclxuXHRcdGlmIEBydW5TdGF0ZT09MiBhbmQgXy5pc0VxdWFsIEBkaWdpdHMsIFswLDAsMCwwLDAsMF1cclxuXHRcdFx0QHJ1blN0YXRlPTBcclxuXHRcdGJ1dHRvbkxlZnQuZGlzYWJsZWQgPSBAcnVuU3RhdGU9PTFcclxuXHRcdGJ1dHRvblJpZ2h0LmRpc2FibGVkID0gXy5pc0VxdWFsIEBkaWdpdHMsIFswLDAsMCwwLDAsMF1cclxuXHRcdGJ1dHRvblJpZ2h0LnRleHQgPSBbJ1N0YXJ0JywnUGF1c2UnLCdSZXN1bWUnXVtAcnVuU3RhdGVdXHJcblx0XHRidXR0b25SaWdodC5iZyA9IFtbMCwxLDBdLFsxLDAsMF0sWzAsMSwwXV1bQHJ1blN0YXRlXVxyXG5cclxuYnV0dG9ucyA9IFtdXHJcbnN0YXRlID0gbmV3IFN0YXRlXHJcbmJ1dHRvbkxlZnQgID0gbnVsbFxyXG5idXR0b25SaWdodCA9IG51bGxcclxuXHJcbnNldHVwID0gLT5cclxuXHRjcmVhdGVDYW52YXMgd2luZG93V2lkdGgsd2luZG93SGVpZ2h0XHJcblx0UkFESVVTID0gaGVpZ2h0LzIwXHJcblx0V0lEVEggPSB3aWR0aC82XHJcblxyXG5cdGJ1dHRvbkxlZnQgID0gbmV3IEFjdGlvbiBXSURUSCoyLjUsaGVpZ2h0LVJBRElVUyxXSURUSCxSQURJVVMsJ0RvbmUnLCAtPiBzdGF0ZS5kb25lKClcclxuXHRidXR0b25SaWdodCA9IG5ldyBBY3Rpb24gV0lEVEgqNC41LGhlaWdodC1SQURJVVMsV0lEVEgsUkFESVVTLCdTdGFydCcsIC0+IHN0YXRlLnJ1bigpXHJcblx0YnV0dG9ucy5wdXNoIGJ1dHRvbkxlZnRcclxuXHRidXR0b25zLnB1c2ggYnV0dG9uUmlnaHRcclxuXHJcblx0dGV4dEFsaWduIENFTlRFUixDRU5URVJcclxuXHRyZWN0TW9kZSBDRU5URVJcclxuXHJcblx0YnV0dG9ucy5wdXNoIG5ldyBCdXR0b24gMCxpLGkqMTAgZm9yIGkgaW4gcmFuZ2UgMyAjIGhoXHJcblx0YnV0dG9ucy5wdXNoIG5ldyBCdXR0b24gMSxpLGkgICAgZm9yIGkgaW4gcmFuZ2UgMTBcclxuXHRidXR0b25zLnB1c2ggbmV3IEJ1dHRvbiAyLGksaSoxMCBmb3IgaSBpbiByYW5nZSA2ICMgbW1cclxuXHRidXR0b25zLnB1c2ggbmV3IEJ1dHRvbiAzLGksaSAgICBmb3IgaSBpbiByYW5nZSAxMFxyXG5cdGJ1dHRvbnMucHVzaCBuZXcgQnV0dG9uIDQsaSxpKjEwIGZvciBpIGluIHJhbmdlIDYgIyBzc1xyXG5cdGJ1dHRvbnMucHVzaCBuZXcgQnV0dG9uIDUsaSxpICAgIGZvciBpIGluIHJhbmdlIDEwXHJcblxyXG5kcmF3ID0gLT5cclxuXHRiZyAwLjVcclxuXHR0ZXh0U2l6ZSBSQURJVVNcclxuXHRmb3IgYnV0dG9uIGluIGJ1dHRvbnNcclxuXHRcdGJ1dHRvbi5kcmF3KClcclxuXHR0ZXh0U2l6ZSAyKlJBRElVU1xyXG5cdHN0YXRlLmRyYXcoKVx0XHJcblxyXG5tb3VzZVJlbGVhc2VkID0gLT5cclxuXHRyZWxlYXNlZCA9IHRydWVcclxuXHRmYWxzZVxyXG5cclxubW91c2VQcmVzc2VkID0gLT5cclxuXHRpZiBub3QgcmVsZWFzZWQgdGhlbiByZXR1cm5cclxuXHRyZWxlYXNlZCA9IGZhbHNlIFxyXG5cdGZvciBidXR0b24gaW4gYnV0dG9uc1xyXG5cdFx0YnV0dG9uLm1vdXNlUHJlc3NlZCBtb3VzZVgsbW91c2VZXHJcblx0cHJpbnQgc3RhdGUuZGlnaXRzXHJcblx0ZmFsc2VcclxuIl19
//# sourceURL=C:\Lab\2017\143-Timer\coffee\sketch.coffee