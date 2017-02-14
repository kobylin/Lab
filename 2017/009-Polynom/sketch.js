// Generated by CoffeeScript 1.11.1
var Polynom, f, g, p1, p2, p3;

Polynom = (function() {
  function Polynom(lst1) {
    this.lst = lst1;
  }

  Polynom.prototype.add = function(other) {
    var h, i, j, k, len, len1, ref, ref1, value;
    h = [];
    ref = this.lst;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      value = ref[i];
      h[i] = (h[i] || 0) + value;
    }
    ref1 = other.lst;
    for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
      value = ref1[i];
      h[i] = (h[i] || 0) + value;
    }
    return new Polynom(h);
  };

  Polynom.prototype.mul = function(other) {
    var h, i, i1, i2, j, k, len, len1, ref, ref1, value1, value2;
    h = (function() {
      var j, len, ref, results;
      ref = range(this.lst.length + other.lst.length - 1);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        results.push(0);
      }
      return results;
    }).call(this);
    ref = this.lst;
    for (i1 = j = 0, len = ref.length; j < len; i1 = ++j) {
      value1 = ref[i1];
      ref1 = other.lst;
      for (i2 = k = 0, len1 = ref1.length; k < len1; i2 = ++k) {
        value2 = ref1[i2];
        i = i1 + i2;
        h[i] = (h[i] || 0) + value1 * value2;
      }
    }
    return new Polynom(h);
  };

  Polynom.prototype.power = function(n) {
    var i, j, len, ref, res;
    res = new Polynom([1]);
    ref = range(n);
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      res = res.mul(this);
    }
    return res;
  };

  Polynom.prototype.compose = function(other) {
    var i, j, len, ref, res, value;
    res = new Polynom([]);
    ref = this.lst;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      value = ref[i];
      res = res.add((new Polynom([value])).mul(other.power(i)));
    }
    return res;
  };

  Polynom.prototype.value = function(x) {
    var i, j, len, ref, res, value;
    res = 0;
    ref = this.lst;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      value = ref[i];
      res += value * Math.pow(x, i);
    }
    return res;
  };

  Polynom.prototype.diff = function() {
    var i, j, len, lst, ref, value;
    lst = [];
    ref = this.lst;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      value = ref[i];
      if (i !== 0) {
        lst[i - 1] = i * value;
      }
    }
    return new Polynom(lst);
  };

  Polynom.prototype.integ = function() {
    var i, j, len, lst, ref, value;
    lst = [0];
    ref = this.lst;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      value = ref[i];
      i += 1;
      lst[i] = value / i;
    }
    return new Polynom(lst);
  };

  Polynom.prototype.to_s = function() {
    var arr, i, item, j, len, ref;
    arr = [];
    ref = this.lst;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      item = ref[i];
      if (item === 0) {
        continue;
      }
      if (item === 1) {
        if (i === 0) {
          arr.push("1");
        } else if (i === 1) {
          arr.push("x");
        } else {
          arr.push("x^" + i);
        }
      } else {
        if (i === 0) {
          arr.push("" + item);
        } else if (i === 1) {
          arr.push(item + "*x");
        } else {
          arr.push(item + "*x^" + i);
        }
      }
    }
    arr.reverse();
    return arr.join("+");
  };

  return Polynom;

})();

p1 = new Polynom([5, 4, 3]);

p2 = new Polynom([4, 3]);

p3 = new Polynom([0, 0, 1]);

assert(p1.lst, [5, 4, 3]);

assert(p1.to_s(), "3*x^2+4*x+5");

assert(p1.add(p2).to_s(), "3*x^2+7*x+9");

assert(p1.mul(p2).to_s(), "9*x^3+24*x^2+31*x+20");

assert(p1.value(2), 25);

assert(p1.diff().lst, [4, 6]);

assert(p1.integ().lst, [0, 5, 2, 1]);

assert(p3.to_s(), "x^2");

assert(p3.integ().to_s(), "0.3333333333333333*x^3");

assert(p3.integ().value(3), 9);

assert(p1.power(2).lst, [25, 40, 46, 24, 9]);

assert(p2.power(3).lst, [64, 144, 108, 27]);

f = new Polynom([3, 2]);

g = new Polynom([5, 0, -1]);

assert(f.compose(f).lst, [9, 4]);

assert(f.compose(g).lst, [13, 0, -2]);

assert(g.compose(f).lst, [-4, -12, -4]);

assert(g.compose(g).lst, [-20, 0, 10, 0, -1]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2tldGNoLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQTs7QUFBTTtFQUNTLGlCQUFDLElBQUQ7SUFBQyxJQUFDLENBQUEsTUFBRDtFQUFEOztvQkFFZCxHQUFBLEdBQU0sU0FBQyxLQUFEO0FBQ0wsUUFBQTtJQUFBLENBQUEsR0FBSTtBQUNKO0FBQUEsU0FBQSw2Q0FBQTs7TUFBQSxDQUFFLENBQUEsQ0FBQSxDQUFGLEdBQU8sQ0FBQyxDQUFFLENBQUEsQ0FBQSxDQUFGLElBQVEsQ0FBVCxDQUFBLEdBQWM7QUFBckI7QUFDQTtBQUFBLFNBQUEsZ0RBQUE7O01BQUEsQ0FBRSxDQUFBLENBQUEsQ0FBRixHQUFPLENBQUMsQ0FBRSxDQUFBLENBQUEsQ0FBRixJQUFRLENBQVQsQ0FBQSxHQUFjO0FBQXJCO1dBQ0ksSUFBQSxPQUFBLENBQVEsQ0FBUjtFQUpDOztvQkFNTixHQUFBLEdBQU0sU0FBQyxLQUFEO0FBQ0wsUUFBQTtJQUFBLENBQUE7O0FBQUs7QUFBQTtXQUFBLHFDQUFBOztxQkFBQTtBQUFBOzs7QUFDTDtBQUFBLFNBQUEsK0NBQUE7O0FBQ0M7QUFBQSxXQUFBLGtEQUFBOztRQUNDLENBQUEsR0FBSSxFQUFBLEdBQUc7UUFDUCxDQUFFLENBQUEsQ0FBQSxDQUFGLEdBQU8sQ0FBQyxDQUFFLENBQUEsQ0FBQSxDQUFGLElBQVEsQ0FBVCxDQUFBLEdBQWMsTUFBQSxHQUFTO0FBRi9CO0FBREQ7V0FJSSxJQUFBLE9BQUEsQ0FBUSxDQUFSO0VBTkM7O29CQVFOLEtBQUEsR0FBUSxTQUFDLENBQUQ7QUFDUCxRQUFBO0lBQUEsR0FBQSxHQUFVLElBQUEsT0FBQSxDQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ1Y7QUFBQSxTQUFBLHFDQUFBOztNQUFBLEdBQUEsR0FBTSxHQUFHLENBQUMsR0FBSixDQUFRLElBQVI7QUFBTjtXQUNBO0VBSE87O29CQUtSLE9BQUEsR0FBVSxT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QUMsQ0FBQyxPQUFGLENBQVUsQ0FBVixDQUFZLENBQUMsR0FBcEIsRUFBeUIsQ0FBQyxFQUFELEVBQUksQ0FBSixFQUFNLENBQUMsQ0FBUCxDQUF6Qjs7QUFDQSxNQUFBLENBQU8sQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFWLENBQVksQ0FBQyxHQUFwQixFQUF5QixDQUFDLENBQUMsQ0FBRixFQUFJLENBQUMsRUFBTCxFQUFRLENBQUMsQ0FBVCxDQUF6Qjs7QUFDQSxNQUFBLENBQU8sQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFWLENBQVksQ0FBQyxHQUFwQixFQUF5QixDQUFDLENBQUMsRUFBRixFQUFLLENBQUwsRUFBTyxFQUFQLEVBQVUsQ0FBVixFQUFZLENBQUMsQ0FBYixDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBvbHlub21cclxuXHRjb25zdHJ1Y3RvciA6IChAbHN0KSAtPlxyXG5cclxuXHRhZGQgOiAob3RoZXIpIC0+XHJcblx0XHRoID0gW11cclxuXHRcdGhbaV0gPSAoaFtpXSBvciAwKSArIHZhbHVlIGZvciB2YWx1ZSxpIGluIEBsc3RcclxuXHRcdGhbaV0gPSAoaFtpXSBvciAwKSArIHZhbHVlIGZvciB2YWx1ZSxpIGluIG90aGVyLmxzdFxyXG5cdFx0bmV3IFBvbHlub20gaFxyXG5cclxuXHRtdWwgOiAob3RoZXIpIC0+XHJcblx0XHRoID0gKDAgZm9yIGkgaW4gcmFuZ2UgQGxzdC5sZW5ndGggKyBvdGhlci5sc3QubGVuZ3RoIC0gMSlcclxuXHRcdGZvciB2YWx1ZTEsaTEgaW4gQGxzdFxyXG5cdFx0XHRmb3IgdmFsdWUyLGkyIGluIG90aGVyLmxzdFxyXG5cdFx0XHRcdGkgPSBpMStpMlxyXG5cdFx0XHRcdGhbaV0gPSAoaFtpXSBvciAwKSArIHZhbHVlMSAqIHZhbHVlMlxyXG5cdFx0bmV3IFBvbHlub20gaFxyXG5cclxuXHRwb3dlciA6IChuKSAtPlxyXG5cdFx0cmVzID0gbmV3IFBvbHlub20gWzFdXHJcblx0XHRyZXMgPSByZXMubXVsIEAgZm9yIGkgaW4gcmFuZ2UgblxyXG5cdFx0cmVzXHJcblxyXG5cdGNvbXBvc2UgOiAob3RoZXIpXHQtPlxyXG5cdFx0cmVzID0gbmV3IFBvbHlub20gW11cclxuXHRcdGZvciB2YWx1ZSxpIGluIEBsc3RcclxuXHRcdFx0cmVzID0gcmVzLmFkZCAobmV3IFBvbHlub20gW3ZhbHVlXSkubXVsIG90aGVyLnBvd2VyIGlcclxuXHRcdHJlc1xyXG5cclxuXHR2YWx1ZSA6ICh4KSAtPlxyXG5cdFx0cmVzID0gMFxyXG5cdFx0cmVzICs9IHZhbHVlICogeCAqKiBpIGZvciB2YWx1ZSxpIGluIEBsc3RcclxuXHRcdHJlc1xyXG5cclxuXHRkaWZmIDogLT5cclxuXHRcdGxzdCA9IFtdXHJcblx0XHRmb3IgdmFsdWUsaSBpbiBAbHN0XHJcblx0XHRcdGlmIGkgIT0gMCB0aGVuIGxzdFtpLTFdID0gaSp2YWx1ZVxyXG5cdFx0bmV3IFBvbHlub20gbHN0XHJcblxyXG5cdGludGVnIDogLT5cclxuXHRcdGxzdCA9IFswXVxyXG5cdFx0Zm9yIHZhbHVlLGkgaW4gQGxzdFxyXG5cdFx0XHRpICs9IDFcclxuXHRcdFx0bHN0W2ldID0gdmFsdWUvaVxyXG5cdFx0bmV3IFBvbHlub20gbHN0XHJcblxyXG5cdHRvX3MgOiAtPlxyXG5cdFx0YXJyID0gW11cclxuXHRcdGZvciBpdGVtLGkgaW4gQGxzdFxyXG5cdFx0XHRpZiBpdGVtID09IDAgdGhlbiBjb250aW51ZVxyXG5cdFx0XHRpZiBpdGVtID09IDEgXHJcblx0XHRcdFx0aWYgaT09MCB0aGVuIGFyci5wdXNoIFwiMVwiXHJcblx0XHRcdFx0ZWxzZSBpZiBpPT0xIHRoZW4gYXJyLnB1c2ggXCJ4XCJcclxuXHRcdFx0XHRlbHNlIGFyci5wdXNoIFwieF4je2l9XCJcclxuXHRcdFx0ZWxzZVx0XHRcdFx0XHJcblx0XHRcdFx0aWYgaT09MCB0aGVuIGFyci5wdXNoIFwiI3tpdGVtfVwiXHJcblx0XHRcdFx0ZWxzZSBpZiBpPT0xIHRoZW4gYXJyLnB1c2ggXCIje2l0ZW19KnhcIlxyXG5cdFx0XHRcdGVsc2UgYXJyLnB1c2ggXCIje2l0ZW19KnheI3tpfVwiXHJcblx0XHRhcnIucmV2ZXJzZSgpXHJcblx0XHRhcnIuam9pbiBcIitcIlxyXG5cclxucDEgPSBuZXcgUG9seW5vbSBbNSw0LDNdXHJcbnAyID0gbmV3IFBvbHlub20gWzQsM11cclxucDMgPSBuZXcgUG9seW5vbSBbMCwwLDFdXHJcblxyXG5hc3NlcnQgcDEubHN0LCBbNSw0LDNdXHJcbmFzc2VydCBwMS50b19zKCksIFwiMyp4XjIrNCp4KzVcIlxyXG5hc3NlcnQgcDEuYWRkKHAyKS50b19zKCksIFwiMyp4XjIrNyp4KzlcIlxyXG5hc3NlcnQgcDEubXVsKHAyKS50b19zKCksIFwiOSp4XjMrMjQqeF4yKzMxKngrMjBcIlxyXG5hc3NlcnQgcDEudmFsdWUoMiksIDI1XHJcbmFzc2VydCBwMS5kaWZmKCkubHN0LCBbNCw2XSBcclxuYXNzZXJ0IHAxLmludGVnKCkubHN0LCBbMCw1LDIsMV0gXHJcbmFzc2VydCBwMy50b19zKCksIFwieF4yXCJcclxuYXNzZXJ0IHAzLmludGVnKCkudG9fcygpLCBcIjAuMzMzMzMzMzMzMzMzMzMzMyp4XjNcIlxyXG5hc3NlcnQgcDMuaW50ZWcoKS52YWx1ZSgzKSwgOVxyXG5hc3NlcnQgcDEucG93ZXIoMikubHN0LCBbMjUsNDAsNDYsMjQsOV0gXHJcbmFzc2VydCBwMi5wb3dlcigzKS5sc3QsIFs2NCwxNDQsMTA4LDI3XSBcclxuXHJcbmYgPSBuZXcgUG9seW5vbSBbMywyXVxyXG5nID0gbmV3IFBvbHlub20gWzUsMCwtMV1cclxuYXNzZXJ0IGYuY29tcG9zZShmKS5sc3QsIFs5LDRdXHJcbmFzc2VydCBmLmNvbXBvc2UoZykubHN0LCBbMTMsMCwtMl1cclxuYXNzZXJ0IGcuY29tcG9zZShmKS5sc3QsIFstNCwtMTIsLTRdXHJcbmFzc2VydCBnLmNvbXBvc2UoZykubHN0LCBbLTIwLDAsMTAsMCwtMV0iXX0=
//# sourceURL=C:\Lab\2017\009-Polynom\sketch.coffee