// Generated by CoffeeScript 1.12.7
var Ball, Crane, SIZE, balls, crane, draw, setup;

crane = null;

balls = [];

SIZE = 300;

Crane = (function() {
  function Crane() {
    this.r = 100;
    this.dir = 0;
    this.pos = new p5.Vector();
  }

  Crane.prototype.draw = function() {
    var gs;
    fc(1);
    circle(0, 0, SIZE);
    fc(0);
    circle(0, 0, 60);
    fc(1, 1, 0);
    circle(0, 0, 40);
    this.pos = new p5.Vector.fromAngle(this.dir).mult(this.r);
    sw(5);
    sc(0.5);
    line(0, 0, this.pos.x, this.pos.y);
    sw(1);
    circle(this.pos.x, this.pos.y, 10);
    gs = navigator.getGamepads();
    print(gs);
    if (gs && gs[0]) {
      this.dir += gs[0].axes[0] * 0.005;
      this.r -= gs[0].axes[1];
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.dir -= 0.003;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.dir += 0.003;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.r -= 0.5;
    }
    if (keyIsDown(UP_ARROW)) {
      this.r += 0.5;
    }
    return this.r = constrain(this.r, 70, SIZE - 10);
  };

  return Crane;

})();

Ball = (function() {
  function Ball(x, y, r) {
    this.r = r;
    this.active = true;
    this.pos = new p5.Vector(x, y);
  }

  Ball.prototype.draw = function() {
    this.update();
    fc(1, 0, 0);
    return circle(this.pos.x, this.pos.y, this.r);
  };

  Ball.prototype.update = function() {
    if (this.pos.dist(crane.pos) < this.r + 10) {
      return this.move(p5.Vector.sub(this.pos, crane.pos));
    }
  };

  Ball.prototype.move = function(v) {
    var ball, i, len, ref, results;
    v.normalize();
    this.pos.add(v);
    this.active = (60 < (ref = this.pos.dist(new p5.Vector())) && ref < SIZE);
    results = [];
    for (i = 0, len = balls.length; i < len; i++) {
      ball = balls[i];
      if (this.pos.dist(ball.pos) < this.r + ball.r && ball !== this) {
        v = p5.Vector.sub(ball.pos, this.pos);
        results.push(ball.move(v));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  return Ball;

})();

setup = function() {
  createCanvas(windowWidth, windowHeight);
  crane = new Crane();
  balls.push(new Ball(100, 100, 10));
  balls.push(new Ball(-80, 100, 15));
  balls.push(new Ball(60, -100, 20));
  return balls.push(new Ball(-40, 100, 25));
};

draw = function() {
  var ball, i, len;
  bg(0);
  translate(width / 2, height / 2);
  crane.draw();
  for (i = 0, len = balls.length; i < len; i++) {
    ball = balls[i];
    ball.draw();
  }
  return balls = (function() {
    var j, len1, results;
    results = [];
    for (j = 0, len1 = balls.length; j < len1; j++) {
      ball = balls[j];
      if (ball.active) {
        results.push(ball);
      }
    }
    return results;
  })();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsS0FBQSxHQUFROztBQUNSLEtBQUEsR0FBUTs7QUFDUixJQUFBLEdBQU87O0FBRUQ7RUFDUyxlQUFBO0lBQ2IsSUFBQyxDQUFBLENBQUQsR0FBSztJQUNMLElBQUMsQ0FBQSxHQUFELEdBQU87SUFDUCxJQUFDLENBQUEsR0FBRCxHQUFPLElBQUksRUFBRSxDQUFDLE1BQVAsQ0FBQTtFQUhNOztrQkFJZCxJQUFBLEdBQU8sU0FBQTtBQUNOLFFBQUE7SUFBQSxFQUFBLENBQUcsQ0FBSDtJQUNBLE1BQUEsQ0FBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLElBQVg7SUFDQSxFQUFBLENBQUcsQ0FBSDtJQUNBLE1BQUEsQ0FBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLEVBQVg7SUFDQSxFQUFBLENBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQO0lBQ0EsTUFBQSxDQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsRUFBWDtJQUNBLElBQUMsQ0FBQSxHQUFELEdBQU8sSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQWQsQ0FBd0IsSUFBQyxDQUFBLEdBQXpCLENBQTZCLENBQUMsSUFBOUIsQ0FBbUMsSUFBQyxDQUFBLENBQXBDO0lBQ1AsRUFBQSxDQUFHLENBQUg7SUFDQSxFQUFBLENBQUcsR0FBSDtJQUNBLElBQUEsQ0FBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLElBQUMsQ0FBQSxHQUFHLENBQUMsQ0FBZCxFQUFnQixJQUFDLENBQUEsR0FBRyxDQUFDLENBQXJCO0lBQ0EsRUFBQSxDQUFHLENBQUg7SUFDQSxNQUFBLENBQU8sSUFBQyxDQUFBLEdBQUcsQ0FBQyxDQUFaLEVBQWMsSUFBQyxDQUFBLEdBQUcsQ0FBQyxDQUFuQixFQUFxQixFQUFyQjtJQUVBLEVBQUEsR0FBSyxTQUFTLENBQUMsV0FB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QUNBLEtBQUssQ0FBQyxJQUFOLENBQVcsSUFBSSxJQUFKLENBQVMsQ0FBQyxFQUFWLEVBQWEsR0FBYixFQUFpQixFQUFqQixDQUFYO0VBQ0EsS0FBSyxDQUFDLElBQU4sQ0FBVyxJQUFJLElBQUosQ0FBUyxFQUFULEVBQVksQ0FBQyxHQUFiLEVBQWlCLEVBQWpCLENBQVg7U0FDQSxLQUFLLENBQUMsSUFBTixDQUFXLElBQUksSUFBSixDQUFTLENBQUMsRUFBVixFQUFhLEdBQWIsRUFBaUIsRUFBakIsQ0FBWDtBQU5POztBQVFSLElBQUEsR0FBTyxTQUFBO0FBQ04sTUFBQTtFQUFBLEVBQUEsQ0FBRyxDQUFIO0VBQ0EsU0FBQSxDQUFVLEtBQUEsR0FBTSxDQUFoQixFQUFtQixNQUFBLEdBQU8sQ0FBMUI7RUFDQSxLQUFLLENBQUMsSUFBTixDQUFBO0FBQ0EsT0FBQSx1Q0FBQTs7SUFDQyxJQUFJLENBQUMsSUFBTCxDQUFBO0FBREQ7U0FFQSxLQUFBOztBQUFTO1NBQUEseUNBQUE7O1VBQTRCLElBQUksQ0FBQztxQkFBakM7O0FBQUE7OztBQU5IIiwic291cmNlc0NvbnRlbnQiOlsiY3JhbmUgPSBudWxsXHJcbmJhbGxzID0gW11cclxuU0laRSA9IDMwMFxyXG5cclxuY2xhc3MgQ3JhbmVcclxuXHRjb25zdHJ1Y3RvciA6IC0+XHJcblx0XHRAciA9IDEwMFxyXG5cdFx0QGRpciA9IDBcclxuXHRcdEBwb3MgPSBuZXcgcDUuVmVjdG9yKClcclxuXHRkcmF3IDogLT5cclxuXHRcdGZjIDFcclxuXHRcdGNpcmNsZSAwLDAsU0laRVxyXG5cdFx0ZmMgMFxyXG5cdFx0Y2lyY2xlIDAsMCw2MFxyXG5cdFx0ZmMgMSwxLDBcclxuXHRcdGNpcmNsZSAwLDAsNDBcclxuXHRcdEBwb3MgPSBuZXcgcDUuVmVjdG9yLmZyb21BbmdsZShAZGlyKS5tdWx0KEByKSBcclxuXHRcdHN3IDVcclxuXHRcdHNjIDAuNVxyXG5cdFx0bGluZSAwLDAsQHBvcy54LEBwb3MueVxyXG5cdFx0c3cgMVxyXG5cdFx0Y2lyY2xlIEBwb3MueCxAcG9zLnksMTBcclxuXHJcblx0XHRncyA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpXHJcblx0XHRwcmludCBnc1xyXG5cdFx0aWYgZ3MgYW5kIGdzWzBdXHJcblx0XHRcdEBkaXIgKz0gZ3NbMF0uYXhlc1swXSAqIDAuMDA1XHJcblx0XHRcdEByIC09IGdzWzBdLmF4ZXNbMV1cclxuXHRcdFx0I3gxICs9IGdzWzBdLmF4ZXNbMl1cclxuXHRcdFx0I3kxICs9IGdzWzBdLmF4ZXNbM11cclxuXHJcblx0XHRpZiBrZXlJc0Rvd24gTEVGVF9BUlJPVyB0aGVuXHRAZGlyIC09IDAuMDAzXHJcblx0XHRpZiBrZXlJc0Rvd24gUklHSFRfQVJST1cgdGhlbiBAZGlyICs9IDAuMDAzXHJcblx0XHRpZiBrZXlJc0Rvd24gRE9XTl9BUlJPVyB0aGVuIEByIC09IDAuNVxyXG5cdFx0aWYga2V5SXNEb3duIFVQX0FSUk9XIHRoZW5cdCBAciArPSAwLjVcclxuXHRcdEByID0gY29uc3RyYWluIEByLDcwLFNJWkUtMTBcclxuXHJcbmNsYXNzIEJhbGxcclxuXHRjb25zdHJ1Y3RvciA6ICh4LHksQHIpIC0+XHJcblx0XHRAYWN0aXZlID0gdHJ1ZVxyXG5cdFx0QHBvcyA9IG5ldyBwNS5WZWN0b3IgeCx5XHJcblx0ZHJhdyA6ICgpIC0+XHJcblx0XHRAdXBkYXRlKClcclxuXHRcdGZjIDEsMCwwXHJcblx0XHRjaXJjbGUgQHBvcy54LEBwb3MueSxAclxyXG5cdHVwZGF0ZSA6IC0+XHJcblx0XHQjIG1vdmUgaW4gZGlyZWN0aW9uIG9mIGxpbmUgYmV0d2VlbiBjZW50ZXJzXHJcblx0XHQjIG1vdmUgaXQgc28gdGhleSB0b3VjaGVzXHJcblx0XHRpZiBAcG9zLmRpc3QoY3JhbmUucG9zKSA8IEByICsgMTBcclxuXHRcdFx0QG1vdmUgcDUuVmVjdG9yLnN1YiBAcG9zLCBjcmFuZS5wb3MgXHJcblx0bW92ZSA6ICh2KSAtPlx0XHRcclxuXHRcdHYubm9ybWFsaXplKClcclxuXHRcdEBwb3MuYWRkIHZcclxuXHRcdEBhY3RpdmUgPSA2MCA8IEBwb3MuZGlzdChuZXcgcDUuVmVjdG9yKCkpIDwgU0laRVxyXG5cdFx0Zm9yIGJhbGwgaW4gYmFsbHNcclxuXHRcdFx0aWYgQHBvcy5kaXN0KGJhbGwucG9zKSA8IEByICsgYmFsbC5yIGFuZCBiYWxsICE9IEBcclxuXHRcdFx0XHR2ID0gcDUuVmVjdG9yLnN1YiBiYWxsLnBvcywgQHBvcyBcclxuXHRcdFx0XHRiYWxsLm1vdmUgdlxyXG5cclxuc2V0dXAgPSAtPlxyXG5cdGNyZWF0ZUNhbnZhcyB3aW5kb3dXaWR0aCx3aW5kb3dIZWlnaHRcclxuXHRjcmFuZSA9IG5ldyBDcmFuZSgpXHJcblx0YmFsbHMucHVzaCBuZXcgQmFsbCAxMDAsMTAwLDEwXHJcblx0YmFsbHMucHVzaCBuZXcgQmFsbCAtODAsMTAwLDE1XHJcblx0YmFsbHMucHVzaCBuZXcgQmFsbCA2MCwtMTAwLDIwXHJcblx0YmFsbHMucHVzaCBuZXcgQmFsbCAtNDAsMTAwLDI1XHJcblxyXG5kcmF3ID0gLT5cclxuXHRiZyAwXHJcblx0dHJhbnNsYXRlIHdpZHRoLzIsIGhlaWdodC8yXHJcblx0Y3JhbmUuZHJhdygpXHJcblx0Zm9yIGJhbGwgaW4gYmFsbHNcclxuXHRcdGJhbGwuZHJhdygpXHJcblx0YmFsbHMgPSAoYmFsbCBmb3IgYmFsbCBpbiBiYWxscyB3aGVuIGJhbGwuYWN0aXZlKSJdfQ==
//# sourceURL=C:\Lab\2017\017-Lyftkran\coffee\sketch.coffee