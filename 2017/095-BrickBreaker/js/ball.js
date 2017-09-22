// Generated by CoffeeScript 1.11.1
var Ball;

Ball = (function() {
  function Ball() {
    this.x = width / 2;
    this.y = height / 2;
    this.r = 30;
    this.vx = 4;
    this.vy = 4;
  }

  Ball.prototype.update = function() {
    this.x += this.vx;
    return this.y += this.vy;
  };

  Ball.prototype.display = function() {
    return ellipse(this.x, this.y, this.r * 2);
  };

  Ball.prototype.checkEdges = function() {
    if (this.x > width - this.r) {
      this.vx *= -1;
    }
    if (this.x < this.r) {
      this.vx *= -1;
    }
    if (this.y < this.r && ball.vy < 0) {
      return this.vy *= -1;
    }
  };

  Ball.prototype.meets = function(p) {
    var ref, ref1;
    return (p.y - this.r < (ref = this.y) && ref < p.y) && (p.x - this.r < (ref1 = this.x) && ref1 < p.x + p.w + this.r);
  };

  Ball.prototype.hits = function(brick) {
    return dist(this.x, this.y, brick.x, brick.y) < brick.r + this.r;
  };

  return Ball;

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFsbC5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXMiOlsiY29mZmVlXFxiYWxsLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQTs7QUFBTTtFQUNTLGNBQUE7SUFDYixJQUFDLENBQUEsQ0FBRCxHQUFLLEtBQUEsR0FBUTtJQUNiLElBQUMsQ0FBQSxDQUFELEdBQUssTUFBQSxHQUFTO0lBRWQsSUFBQyxDQUFBLENBQUQsR0FBSztJQUNMLElBQUMsQ0FBQSxFQUFELEdBQU07SUFDTixJQUFDLENBQUEsRUFBRCxHQUFNO0VBTk87O2lCQVFkLE1BQUEsR0FBUyxTQUFBO0lBQ1IsSUFBQyxDQUFBLENBQUQsSUFBTSxJQUFDLENBQUE7V0FDUCxJQUFDLENBQUEsQ0FBRCxJQUFNLElBQUMsQ0FBQTtFQUZDOztpQkFJVCxPQUFBLEdBQVUsU0FBQTtXQUFHLE9BQUEsQ0FBUSxJQUFDLENBQUEsQ0FBVCxFQUFZLElBQUMsQ0FBQSxDQUFiLEVBQWdCLElBQUMsQ0FBQSxDQUFELEdBQUssQ0FBckI7RUFBSDs7aUJBRVYsVUFBQSxHQUFhLFNBQUE7SUFDWixJQUFHLElBQUMsQ0FBQSxDQUFELEdBQUssS0FBQSxHQUFRLElBQUMsQ0FBQSxDQUFqQjtNQUF3QixJQUFDLENBQUEsRUFBRCxJQUFPLENBQUMsRUFBaEM7O0lBQ0EsSUFBRyxJQUFDLENBQUEsQ0FBRCxHQUFLLElBQUMsQ0FBQSxDQUFUO01BQWdCLElBQUMsQ0FBQSxFQUFELElBQU8sQ0FBQyxFQUF4Qjs7SUFDQSxJQUFHLElBQUMsQ0FBQSxDQUFELEdBQUssSUFBQyxDQUFBLENBQU4sSUFBWSxJQUFJLENBQUMsRUFBTCxHQUFVLENBQXpCO2FBQWdDLElBQUMsQ0FBQSxFQUFELElBQU8sQ0FBQyxFQUF4Qzs7RUFIWTs7aUJBS2IsS0FBQSxHQUFRLFNBQUMsQ0FBRDtBQUFPLFFBQUE7V0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFGLEdBQU0sSUFBQyxDQUFBLENBQVAsVUFBVyxJQUFDLENBQUEsRUFBWixPQUFBLEdBQWdCLENBQUMsQ0FBQyxDQUFsQixDQUFBLElBQXdCLENBQUEsQ0FBQyxDQUFDLENBQUYsR0FBTSxJQUFDLENBQUEsQ0FBUCxXQUFXLElBQUMsQ0FBQSxFQUFaLFFBQUEsR0FBZ0IsQ0FBQyxDQUFDLENBQUYsR0FBTSxDQUFDLENBQUMsQ0FBUixHQUFZLElBQUMsQ0FBQSxDQUE3QjtFQUEvQjs7aUJBQ1IsSUFBQSxHQUFPLFNBQUMsS0FBRDtXQUFXLElBQUEsQ0FBSyxJQUFDLENBQUEsQ0FBTixFQUFTLElBQUMsQ0FBQSxDQUFWLEVBQWEsS0FBSyxDQUFDLENBQW5CLEVBQXNCLEtBQUssQ0FBQyxDQUE1QixDQUFBLEdBQWlDLEtBQUssQ0FBQyxDQUFOLEdBQVUsSUFBQyxDQUFBO0VBQXZEIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFsbFxuXHRjb25zdHJ1Y3RvciA6IC0+XG5cdFx0QHggPSB3aWR0aCAvIDJcblx0XHRAeSA9IGhlaWdodCAvIDJcblxuXHRcdEByID0gMzBcblx0XHRAdnggPSA0XG5cdFx0QHZ5ID0gNFxuXG5cdHVwZGF0ZSA6IC0+XG5cdFx0QHggKz0gQHZ4XG5cdFx0QHkgKz0gQHZ5XG5cblx0ZGlzcGxheSA6IC0+IGVsbGlwc2UgQHgsIEB5LCBAciAqIDJcblxuXHRjaGVja0VkZ2VzIDogLT5cblx0XHRpZiBAeCA+IHdpZHRoIC0gQHIgdGhlbiBAdnggKj0gLTFcblx0XHRpZiBAeCA8IEByIHRoZW4gQHZ4ICo9IC0xXG5cdFx0aWYgQHkgPCBAciBhbmQgYmFsbC52eSA8IDAgdGhlbiBAdnkgKj0gLTFcblxuXHRtZWV0cyA6IChwKSAtPiBwLnkgLSBAciA8IEB5IDwgcC55IGFuZCBwLnggLSBAciA8IEB4IDwgcC54ICsgcC53ICsgQHJcblx0aGl0cyA6IChicmljaykgLT4gZGlzdChAeCwgQHksIGJyaWNrLngsIGJyaWNrLnkpIDwgYnJpY2suciArIEByXG4iXX0=
//# sourceURL=C:\Lab\2017\095-BR~1\coffee\ball.coffee