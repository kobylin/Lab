// Generated by CoffeeScript 1.12.7
var draw, drawStar, drawStars, setup,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

setup = function() {
  return createCanvas(800, 160);
};

draw = function() {
  bg(0.5);
  return drawStars(int((mouseX + 40) / 80) / 2);
};

drawStars = function(rate) {
  var gold, i, j, len, lst, ref, results;
  gold = 2 * rate;
  lst = range(10);
  ref = range(5);
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    if (gold <= 0) {
      lst = [];
    }
    if (gold === 1) {
      lst = [5, 6, 7, 8, 9];
    }
    gold -= 2;
    results.push(drawStar(80 + i * 160, 88, 80, 29, lst));
  }
  return results;
};

drawStar = function(x0, y0, r1, r2, fill) {
  var antal, i, j, len, ref, results, v, x1, x2, x3, y1, y2, y3;
  antal = 0;
  ref = range(5);
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    v = i * 72 - 54;
    x1 = int(x0 + r1 * cos(radians(v + 36)));
    y1 = int(y0 + r1 * sin(radians(v + 36)));
    x2 = int(x0 + r2 * cos(radians(v)));
    y2 = int(y0 + r2 * sin(radians(v)));
    x3 = int(x0 + r1 * cos(radians(v - 36)));
    y3 = int(y0 + r1 * sin(radians(v - 36)));
    if (indexOf.call(fill, antal) >= 0) {
      fc(1, 1, antal % 2);
    } else {
      fc(0);
    }
    triangle(x0, y0, x3, y3, x2, y2);
    antal++;
    if (indexOf.call(fill, antal) >= 0) {
      fc(1, 1, antal % 2);
    } else {
      fc(0);
    }
    triangle(x0, y0, x1, y1, x2, y2);
    results.push(antal++);
  }
  return results;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsZ0NBQUE7RUFBQTs7QUFBQSxLQUFBLEdBQVEsU0FBQTtTQUNQLFlBQUEsQ0FBYSxHQUFiLEVBQWlCLEdBQWpCO0FBRE87O0FBR1IsSUFBQSxHQUFPLFNBQUE7RUFDTixFQUFBLENBQUcsR0FBSDtTQUNBLFNBQUEsQ0FBVSxHQUFBLENBQUksQ0FBQyxNQUFBLEdBQU8sRUFBUixDQUFBLEdBQVksRUFBaEIsQ0FBQSxHQUFzQixDQUFoQztBQUZNOztBQUlQLFNBQUEsR0FBWSxTQUFDLElBQUQ7QUFDWCxNQUFBO0VBQUEsSUFBQSxHQUFPLENBQUEsR0FBSTtFQUNYLEdBQUEsR0FBTSxLQUFBLENBQU0sRUFBTjtBQUNOO0FBQUE7T0FBQSxxQ0FBQTs7SUFDQyxJQUFHLElBQUEsSUFBUSxDQUFYO01BQWtCLEdBQUEsR0FBTSxHQUF4Qjs7SUFDQSxJQUFHLElBQUEsS0FBUSxDQUFYO01BQWtCLEdBQUEsR0FBTSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQXhCOztJQUNBLElBQUEsSUFBUTtpQkFDUixRQUFBLENBQVUsRUFBQSxHQUFHLENBQUEsR0FBRSxHQUFmLEVBQW1CLEVBQW5CLEVBQXNCLEVBQXRCLEVBQXlCLEVBQXpCLEVBQTRCLEdBQTVCO0FBSkQ7O0FBSFc7O0FBU1osUUFBQSxHQUFXLFNBQUMsRUFBRCxFQUFJLEVBQUosRUFBTyxFQUFQLEVBQVUsRUFBVixFQUFhLElBQWI7QUFDVixNQUFBO0VBQUEsS0FBQSxHQUFRO0FBQ1I7QUFBQTtPQUFBLHFDQUFBOztJQUNDLENBQUEsR0FBSSxDQUFBLEdBQUUsRUFBRixHQUFLO0lBQ1QsRUFBQSxHQUFLLEdBQUEsQ0FBSSxFQUFBLEdBQUcsRUFBQSxHQUFHLEdBQUEsQ0FBSSxPQUFBLENBQVEsQ0FBQSxHQUFFLEVBQVYsQ0FBSixDQUFWO0lBQ0wsRUFBQSxHQUFLLEdBQUEsQ0FBSSxFQUFBLEdBQUcsRUFBQSxHQUFHLEdBQUEsQ0FBSSxPQUFBLENBQVEsQ0FBQSxHQUFFLEVBQVYsQ0FBSixDQUFWO0lBQ0wsRUFBQSxHQUFLLEdBQUEsQ0FBSSxFQUFBLEdBQUcsRUFBQSxHQUFHLEdBQUEsQ0FBSSxPQUFBLENBQVEsQ0FBUixDQUFKLENBQVY7SUFDTCxFQUFBLEdBQUssR0FBQSxDQUFJLEVBQUEsR0FBRyxFQUFBLEdBQUcsR0FBQSxDQUFJLE9BQUEsQ0FBUSxDQUFSLENBQUosQ0FBVjtJQUNMLEVBQUEsR0FBSyxHQUFBLENBQUksRUFBQSxHQUFHLEVBQUEsR0FBRyxHQUFBLENBQUksT0FBQSxDQUFRLENBQUEsR0FBRSxFQUFWLENBQUosQ0FBVjtJQUNMLEVBQUEsR0FBSyxHQUFBLENBQUksRUFBQSxHQUFHLEVBQUEsR0FBRyxHQUFBLENBQUksT0FBQSxDQUFRLENBQUEsR0FBRSxFQUFWLENBQUosQ0FBVjtJQUNMLElBQUcsYUFBUyxJQUFULEVBQUEsS0FBQSxNQUFIO01BQXNCLEVBQUEsQ0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLEtBQUEsR0FBTSxDQUFiLEVBQXRCO0tBQUEsTUFBQTtNQUEwQyxFQUFBLENBQUcsQ0FBSCxFQUExQzs7SUFDQSxRQUFBLENBQVMsRUFBVCxFQUFZLEVBQVosRUFBZSxFQUFmLEVBQWtCLEVBQWxCLEVBQXFCLEVBQXJCLEVBQXdCLEVBQXhCO0lBQ0EsS0FBQTtJQUNBLElBQUcsYUFBUyxJQUFULEVBQUEsS0FBQSxNQUFIO01BQXNCLEVBQUEsQ0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLEtBQUEsR0FBTSxDQUFiLEVBQXRCO0tBQUEsTUFBQTtNQUEwQyxFQUFBLENBQUcsQ0FBSCxFQUExQzs7SUFDQSxRQUFBLENBQVMsRUFBVCxFQUFZLEVBQVosRUFBZSxFQUFmLEVBQWtCLEVBQWxCLEVBQXFCLEVBQXJCLEVBQXdCLEVBQXhCO2lCQUNBLEtBQUE7QUFiRDs7QUFGVSIsInNvdXJjZXNDb250ZW50IjpbInNldHVwID0gLT5cclxuXHRjcmVhdGVDYW52YXMgODAwLDE2MFxyXG5cclxuZHJhdyA9IC0+XHJcblx0YmcgMC41XHJcblx0ZHJhd1N0YXJzIGludCgobW91c2VYKzQwKS84MCkgLyAyXHJcblxyXG5kcmF3U3RhcnMgPSAocmF0ZSkgLT5cclxuXHRnb2xkID0gMiAqIHJhdGVcclxuXHRsc3QgPSByYW5nZSAxMFxyXG5cdGZvciBpIGluIHJhbmdlIDVcclxuXHRcdGlmIGdvbGQgPD0gMCB0aGVuIGxzdCA9IFtdXHJcblx0XHRpZiBnb2xkID09IDEgdGhlbiBsc3QgPSBbNSw2LDcsOCw5XVxyXG5cdFx0Z29sZCAtPSAyXHJcblx0XHRkcmF3U3RhciAgODAraSoxNjAsODgsODAsMjksbHN0XHJcblxyXG5kcmF3U3RhciA9ICh4MCx5MCxyMSxyMixmaWxsKSAtPlxyXG5cdGFudGFsID0gMFxyXG5cdGZvciBpIGluIHJhbmdlIDVcclxuXHRcdHYgPSBpKjcyLTU0XHJcblx0XHR4MSA9IGludCB4MCtyMSpjb3MgcmFkaWFucyB2KzM2XHJcblx0XHR5MSA9IGludCB5MCtyMSpzaW4gcmFkaWFucyB2KzM2XHJcblx0XHR4MiA9IGludCB4MCtyMipjb3MgcmFkaWFucyB2XHJcblx0XHR5MiA9IGludCB5MCtyMipzaW4gcmFkaWFucyB2XHJcblx0XHR4MyA9IGludCB4MCtyMSpjb3MgcmFkaWFucyB2LTM2XHJcblx0XHR5MyA9IGludCB5MCtyMSpzaW4gcmFkaWFucyB2LTM2XHJcblx0XHRpZiBhbnRhbCBpbiBmaWxsIHRoZW4gZmMgMSwxLGFudGFsJTIgZWxzZSBmYyAwXHJcblx0XHR0cmlhbmdsZSB4MCx5MCx4Myx5Myx4Mix5MiBcclxuXHRcdGFudGFsKytcclxuXHRcdGlmIGFudGFsIGluIGZpbGwgdGhlbiBmYyAxLDEsYW50YWwlMiBlbHNlIGZjIDBcclxuXHRcdHRyaWFuZ2xlIHgwLHkwLHgxLHkxLHgyLHkyIFxyXG5cdFx0YW50YWwrK1xyXG4iXX0=
//# sourceURL=C:\Lab\2017\137-HalfStars\coffee\sketch.coffee