// Generated by CoffeeScript 1.11.1
var counter, createMatrix, draw, m1, m2, setup, vinkel;

counter = 0;

m1 = [];

m2 = [];

vinkel = 0;

setup = function() {
  createCanvas(600, 600);
  return m1 = createMatrix();
};

createMatrix = function() {
  var d, k, l, len, len1, m, ref, ref1, row, x, y;
  m = [];
  d = 25;
  ref = range(0, width, d);
  for (k = 0, len = ref.length; k < len; k++) {
    x = ref[k];
    row = [];
    ref1 = range(0, height, d);
    for (l = 0, len1 = ref1.length; l < len1; l++) {
      y = ref1[l];
      row.push(random(1) < 0.5 ? 1 : 0);
    }
    m.push(row);
  }
  return m;
};

draw = function() {
  var d, fall, i, j, k, l, len, len1, ref, ref1, v;
  d = 10;
  if (counter === 0) {
    m2 = m1;
    m1 = createMatrix();
    vinkel = -45;
  }
  if (counter < 90) {
    bg(1);
    ref = range(m1.length);
    for (k = 0, len = ref.length; k < len; k++) {
      i = ref[k];
      ref1 = range(m1[i].length);
      for (l = 0, len1 = ref1.length; l < len1; l++) {
        j = ref1[l];
        push();
        translate(50 + i * 20, 50 + j * 20);
        fall = m1[i][j] + 2 * m2[i][j];
        print(fall);
        if (fall === 0) {
          v = 45;
        }
        if (fall === 1) {
          v = -vinkel;
        }
        if (fall === 2) {
          v = vinkel;
        }
        if (fall === 3) {
          v = -45;
        }
        rd(v);
        line(-13.5, 0, 13.5, 0);
        pop();
      }
    }
    vinkel += 1;
  }
  counter++;
  if (counter === 360) {
    return counter = 0;
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQUE7O0FBQUEsT0FBQSxHQUFVOztBQUNWLEVBQUEsR0FBSzs7QUFDTCxFQUFBLEdBQUs7O0FBQ0wsTUFBQSxHQUFTOztBQUVULEtBQUEsR0FBUSxTQUFBO0VBQ1AsWUFBQSxDQUFhLEdBQWIsRUFBaUIsR0FBakI7U0FDQSxFQUFBLEdBQUssWUFBQSxDQUFBO0FBRkU7O0FBSVIsWUFBQSxHQUFlLFNBQUE7QUFDZCxNQUFBO0VBQUEsQ0FBQSxHQUFJO0VBQ0osQ0FBQSxHQUFJO0FBQ0o7QUFBQSxPQUFBLHFDQUFBOztJQUNDLEdBQUEsR0FBTTtBQUNOO0FBQUEsU0FBQSx3Q0FBQTs7TUFDQyxHQUFHLENBQUMsSUFBSixDQUFZLE1BQUEsQ0FBTyxDQUFQLENBQUEsR0FBWSxHQUFmLEdBQXdCLENBQXhCLEdBQStCLENBQXhDO0FBREQ7SUFFQSxDQUFDLENBQUMsSUFBRixDQUFPLEdBQVA7QUFKRDtTQUtBO0FBUmM7O0FBVWYsSUFBQSxHQUFPLFNBQUE7QUFDTixNQUFBO0VBQUEsQ0FBQSxHQUFJO0VBQ0osSUFBRyxPQUFBLEtBQVcsQ0FBZDtJQUNDLEVBQUEsR0FBSztJQUNMLEVBQUEsR0FBSyxZQUFBLENBQUE7SUFDTCxNQUFBLEdBQVMsQ0FBQyxHQUhYOztFQUlBLElBQUcsT0FBQSxHQUFVLEVBQWI7SUFDQyxFQUFBLENBQUcsQ0FBSDtBQUNBO0FBQUEsU0FBQSxxQ0FBQTs7QUFDQztBQUFBLFdBQUEsd0NBQUE7O1FBQ0MsSUFBQSxDQUFBO1FBQ0EsU0FBQSxDQUFVLEVBQUEsR0FBRyxDQUFBLEdBQUUsRUFBZixFQUFrQixFQUFBLEdBQUcsQ0FBQSxHQUFFLEVBQXZCO1FBQ0EsSUFBQSxHQUFPLEVBQUcsQ0FBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLENBQU4sR0FBVyxDQUFBLEdBQUksRUFBRyxDQUFBLENBQUEsQ0FBRyxDQUFBLENBQUE7UUFDNUIsS0FBQSxDQUFNLElBQU47UUFDQSxJQUFHLElBQUEsS0FBUSxDQUFYO1VBQWtCLENBQUEsR0FBSSxHQUF0Qjs7UUFDQSxJQUFHLElBQUEsS0FBUSxDQUFYO1VBQWtCLENBQUEsR0FBSSxDQUFDLE9BQXZCOztRQUNBLElBQUcsSUFBQSxLQUFRLENBQVg7VUFBa0IsQ0FBQSxHQUFJLE9BQXRCOztRQUNBLElBQUcsSUFBQSxLQUFRLENBQVg7VUFBa0IsQ0FBQSxHQUFJLENBQUMsR0FBdkI7O1FBQ0EsRUFBQSxDQUFHLENBQUg7UUFDQSxJQUFBLENBQUssQ0FBQyxJQUFOLEVBQVcsQ0FBWCxFQUFhLElBQWIsRUFBa0IsQ0FBbEI7UUFDQSxHQUFBLENBQUE7QUFYRDtBQUREO0lBYUEsTUFBQSxJQUFVLEVBZlg7O0VBZ0JBLE9BQUE7RUFDQSxJQUFHLE9BQUEsS0FBVyxHQUFkO1dBQ0MsT0FBQSxHQUFVLEVBRFg7O0FBdkJNIiwic291cmNlc0NvbnRlbnQiOlsiIyBodHRwczovLzEwcHJpbnQub3JnXHJcblxyXG5jb3VudGVyID0gMFxyXG5tMSA9IFtdXHJcbm0yID0gW11cclxudmlua2VsID0gMFxyXG5cclxuc2V0dXAgPSAtPlxyXG5cdGNyZWF0ZUNhbnZhcyA2MDAsNjAwXHJcblx0bTEgPSBjcmVhdGVNYXRyaXgoKVxyXG5cclxuY3JlYXRlTWF0cml4ID0gLT5cclxuXHRtID0gW11cclxuXHRkID0gMjVcclxuXHRmb3IgeCBpbiByYW5nZSAwLHdpZHRoLGRcclxuXHRcdHJvdyA9IFtdXHJcblx0XHRmb3IgeSBpbiByYW5nZSAwLGhlaWdodCxkXHJcblx0XHRcdHJvdy5wdXNoIGlmIHJhbmRvbSgxKSA8IDAuNSB0aGVuIDEgZWxzZSAwXHJcblx0XHRtLnB1c2ggcm93XHJcblx0bVxyXG5cclxuZHJhdyA9IC0+XHJcblx0ZCA9IDEwXHJcblx0aWYgY291bnRlciA9PSAwXHJcblx0XHRtMiA9IG0xXHJcblx0XHRtMSA9IGNyZWF0ZU1hdHJpeCgpXHJcblx0XHR2aW5rZWwgPSAtNDVcclxuXHRpZiBjb3VudGVyIDwgOTBcclxuXHRcdGJnIDFcclxuXHRcdGZvciBpIGluIHJhbmdlIG0xLmxlbmd0aFxyXG5cdFx0XHRmb3IgaiBpbiByYW5nZSBtMVtpXS5sZW5ndGhcclxuXHRcdFx0XHRwdXNoKClcclxuXHRcdFx0XHR0cmFuc2xhdGUgNTAraSoyMCw1MCtqKjIwXHJcblx0XHRcdFx0ZmFsbCA9IG0xW2ldW2pdICsgMiAqIG0yW2ldW2pdXHJcblx0XHRcdFx0cHJpbnQgZmFsbFxyXG5cdFx0XHRcdGlmIGZhbGwgPT0gMCB0aGVuIHYgPSA0NVxyXG5cdFx0XHRcdGlmIGZhbGwgPT0gMSB0aGVuIHYgPSAtdmlua2VsXHJcblx0XHRcdFx0aWYgZmFsbCA9PSAyIHRoZW4gdiA9IHZpbmtlbFxyXG5cdFx0XHRcdGlmIGZhbGwgPT0gMyB0aGVuIHYgPSAtNDVcclxuXHRcdFx0XHRyZCB2XHJcblx0XHRcdFx0bGluZSAtMTMuNSwwLDEzLjUsMFxyXG5cdFx0XHRcdHBvcCgpXHJcblx0XHR2aW5rZWwgKz0gMVxyXG5cdGNvdW50ZXIrK1xyXG5cdGlmIGNvdW50ZXIgPT0gMzYwXHJcblx0XHRjb3VudGVyID0gMCJdfQ==
//# sourceURL=C:\Lab\2017\097-10print\coffee\sketch.coffee