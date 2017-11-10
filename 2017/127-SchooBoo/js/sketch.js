// Generated by CoffeeScript 1.12.7
var N, SIZE, device, draw, fetch, img, info, markedAreas, mousePressed, pageNo, rects, setup, touchEnded,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

pageNo = 1;

img = null;

rects = null;

N = 35;

SIZE = 40;

markedAreas = {};

markedAreas[1] = [[4, 7, 1], [32, 35, 2]];

markedAreas[2] = [[14, 17, 3], [22, 25, 4]];

device = null;

setup = function() {
  createCanvas(1280, 720);
  fetch();
  frameRate(10);
  device = info();
  return print(device);
};

fetch = function() {
  var xmlhttp;
  img = null;
  rects = null;
  loadImage("images/data" + pageNo + ".png", function(_img) {
    return img = _img;
  });
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      return rects = JSON.parse(this.responseText);
    }
  };
  xmlhttp.open("GET", "images/data" + pageNo + ".json", true);
  return xmlhttp.send();
};

draw = function() {
  var color, h, i, j, k, len, len1, p, ref, ref1, ref2, ref3, start, stopp, w, x, y;
  bg(1);
  sc();
  if (rects && markedAreas[pageNo]) {
    ref = markedAreas[pageNo];
    for (j = 0, len = ref.length; j < len; j++) {
      ref1 = ref[j], start = ref1[0], stopp = ref1[1], color = ref1[2];
      ref2 = range(start, stopp + 1);
      for (k = 0, len1 = ref2.length; k < len1; k++) {
        i = ref2[k];
        ref3 = rects[i], x = ref3[0], y = ref3[1], w = ref3[2], h = ref3[3];
        if (color === 1) {
          fc(1, 0, 0);
        }
        if (color === 2) {
          fc(0, 1, 0);
        }
        if (color === 3) {
          fc(1, 1, 0);
        }
        if (color === 4) {
          fc(0, 1, 1);
        }
        if (color > 0) {
          rect(x - 6, y + 8, w + 10, SIZE - 2);
        }
      }
    }
  }
  if (img) {
    image(img, 0, 0);
  }
  w = width / N;
  p = (pageNo - 1) * w;
  sc(1, 0, 0);
  y = height - 2;
  return line(p, y, p + w, y);
};

mousePressed = function() {
  if (device.is_touch_device === false) {
    if (mouseX > width / 2) {
      pageNo++;
    } else {
      pageNo--;
    }
    pageNo = constrain(pageNo, 1, N);
    fetch();
  }
  return false;
};

touchEnded = function() {
  if (device.is_touch_device === true) {
    if (mouseX > width / 2) {
      pageNo++;
    } else {
      pageNo--;
    }
    pageNo = constrain(pageNo, 1, N);
    fetch();
  }
  return false;
};

info = function() {
  var ratio;
  ratio = window.devicePixelRatio || 1;
  return {
    ratio: ratio,
    is_touch_device: indexOf.call(document.documentElement, 'ontouchstart') >= 0,
    sw: screen.width,
    sh: screen.height,
    cw: document.documentElement.clientWidth,
    ch: document.documentElement.clientHeight,
    rw: screen.width * ratio,
    rh: screen.height * ratio
  };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsb0dBQUE7RUFBQTs7QUFBQSxNQUFBLEdBQVM7O0FBQ1QsR0FBQSxHQUFNOztBQUNOLEtBQUEsR0FBUTs7QUFDUixDQUFBLEdBQUk7O0FBQ0osSUFBQSxHQUFPOztBQUVQLFdBQUEsR0FBYzs7QUFDZCxXQUFZLENBQUEsQ0FBQSxDQUFaLEdBQWlCLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBRCxFQUFTLENBQUMsRUFBRCxFQUFJLEVBQUosRUFBTyxDQUFQLENBQVQ7O0FBQ2pCLFdBQVksQ0FBQSxDQUFBLENBQVosR0FBaUIsQ0FBQyxDQUFDLEVBQUQsRUFBSSxFQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVcsQ0FBQyxFQUFELEVBQUksRUFBSixFQUFPLENBQVAsQ0FBWDs7QUFFakIsTUFBQSxHQUFTOztBQUVULEtBQUEsR0FBUSxTQUFBO0VBRVAsWUFBQSxDQUFhLElBQWIsRUFBa0IsR0FBbEI7RUFDQSxLQUFBLENBQUE7RUFDQSxTQUFBLENBQVUsRUFBVjtFQUNBLE1BQUEsR0FBUyxJQUFBLENBQUE7U0FDVCxLQUFBLENBQU0sTUFBTjtBQU5POztBQVFSLEtBQUEsR0FBUSxTQUFBO0FBQ1AsTUFBQTtFQUFBLEdBQUEsR0FBTTtFQUNOLEtBQUEsR0FBUTtFQUNSLFNBQUEsQ0FBVSxhQUFBLEdBQWMsTUFBZCxHQUFxQixNQUEvQixFQUFzQyxTQUFDLElBQUQ7V0FBVSxHQUFBLEdBQU07RUFBaEIsQ0FBdEM7RUFDQSxPQUFBLEdBQVUsSUFBSSxjQUFKLENBQUE7RUFDVixPQUFPLENBQUMsa0JBQVIsR0FBNkIsU0FBQTtJQUM1QixJQUFHLElBQUksQ0FBQyxVQUFMLEtBQW1CLENBQW5CLElBQXdCLElBQUksQ0FBQyxNQUFMLEtBQWUsR0FBMUM7YUFDQyxLQUFBLEdBQVEs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QVEsQ0FBQyxlQUFlLENBQUMsWUFMOUI7SUFNQSxFQUFBLEVBQUssTUFBTSxDQUFDLEtBQVAsR0FBZSxLQU5wQjtJQU9BLEVBQUEsRUFBSyxNQUFNLENBQUMsTUFBUCxHQUFnQixLQVByQjs7QUFGTSIsInNvdXJjZXNDb250ZW50IjpbInBhZ2VObyA9IDFcclxuaW1nID0gbnVsbFxyXG5yZWN0cyA9IG51bGxcclxuTiA9IDM1XHJcblNJWkUgPSA0MFxyXG5cclxubWFya2VkQXJlYXMgPSB7fVxyXG5tYXJrZWRBcmVhc1sxXSA9IFtbNCw3LDFdLFszMiwzNSwyXV1cclxubWFya2VkQXJlYXNbMl0gPSBbWzE0LDE3LDNdLFsyMiwyNSw0XV1cclxuXHJcbmRldmljZSA9IG51bGxcclxuXHJcbnNldHVwID0gLT5cclxuXHQjY3JlYXRlQ2FudmFzIDY0MCwzNjBcclxuXHRjcmVhdGVDYW52YXMgMTI4MCw3MjBcclxuXHRmZXRjaCgpXHJcblx0ZnJhbWVSYXRlIDEwXHJcblx0ZGV2aWNlID0gaW5mbygpXHJcblx0cHJpbnQgZGV2aWNlXHJcblxyXG5mZXRjaCA9IC0+XHJcblx0aW1nID0gbnVsbFxyXG5cdHJlY3RzID0gbnVsbFxyXG5cdGxvYWRJbWFnZSBcImltYWdlcy9kYXRhI3twYWdlTm99LnBuZ1wiLCAoX2ltZykgLT4gaW1nID0gX2ltZ1xyXG5cdHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSAgICBcclxuXHR4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpIC0+XHJcblx0XHRpZiB0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDBcclxuXHRcdFx0cmVjdHMgPSBKU09OLnBhcnNlIHRoaXMucmVzcG9uc2VUZXh0XHJcblx0eG1saHR0cC5vcGVuIFwiR0VUXCIsIFwiaW1hZ2VzL2RhdGEje3BhZ2VOb30uanNvblwiLCB0cnVlXHJcblx0eG1saHR0cC5zZW5kKClcclxuXHJcbmRyYXcgPSAtPlxyXG5cdGJnIDFcclxuXHRzYygpXHJcblx0aWYgcmVjdHMgYW5kIG1hcmtlZEFyZWFzW3BhZ2VOb11cclxuXHRcdGZvciBbc3RhcnQsc3RvcHAsY29sb3JdIGluIG1hcmtlZEFyZWFzW3BhZ2VOb11cclxuXHRcdFx0Zm9yIGkgaW4gcmFuZ2Ugc3RhcnQsc3RvcHArMVxyXG5cdFx0XHRcdFt4LHksdyxoXSA9IHJlY3RzW2ldXHJcblx0XHRcdFx0aWYgY29sb3I9PTEgdGhlbiBmYyAxLDAsMFxyXG5cdFx0XHRcdGlmIGNvbG9yPT0yIHRoZW4gZmMgMCwxLDBcclxuXHRcdFx0XHRpZiBjb2xvcj09MyB0aGVuIGZjIDEsMSwwXHJcblx0XHRcdFx0aWYgY29sb3I9PTQgdGhlbiBmYyAwLDEsMVxyXG5cdFx0XHRcdGlmIGNvbG9yID4gMCB0aGVuXHRyZWN0IHgtNix5KzgsdysxMCxTSVpFLTJcclxuXHRpZiBpbWcgdGhlbiBpbWFnZSBpbWcsIDAsIDBcclxuXHR3ID0gd2lkdGgvTlxyXG5cdHAgPSAocGFnZU5vLTEpICogd1xyXG5cdHNjIDEsMCwwXHJcblx0eSA9IGhlaWdodC0yXHJcblx0bGluZSBwLHkscCt3LHlcclxuXHJcbm1vdXNlUHJlc3NlZCA9IC0+XHJcblx0aWYgZGV2aWNlLmlzX3RvdWNoX2RldmljZSA9PSBmYWxzZSBcclxuXHRcdGlmIG1vdXNlWCA+IHdpZHRoLzIgdGhlbiBwYWdlTm8rKyBlbHNlIHBhZ2VOby0tXHJcblx0XHRwYWdlTm8gPSBjb25zdHJhaW4gcGFnZU5vLDEsTlxyXG5cdFx0ZmV0Y2goKVxyXG5cdGZhbHNlIFxyXG5cclxudG91Y2hFbmRlZCA9IC0+XHJcblx0aWYgZGV2aWNlLmlzX3RvdWNoX2RldmljZSA9PSB0cnVlIFxyXG5cdFx0aWYgbW91c2VYID4gd2lkdGgvMiB0aGVuIHBhZ2VObysrIGVsc2UgcGFnZU5vLS1cclxuXHRcdHBhZ2VObyA9IGNvbnN0cmFpbiBwYWdlTm8sMSxOXHJcblx0XHRmZXRjaCgpXHJcblx0ZmFsc2UgXHJcblxyXG5pbmZvID0gLT5cclxuXHRyYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDFcclxuXHRyYXRpbyA6IHJhdGlvXHJcblx0aXNfdG91Y2hfZGV2aWNlIDogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XHJcblx0c3cgOiBzY3JlZW4ud2lkdGggXHJcblx0c2ggOiBzY3JlZW4uaGVpZ2h0XHJcblx0Y3cgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcclxuXHRjaCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcclxuXHRydyA6IHNjcmVlbi53aWR0aCAqIHJhdGlvXHJcblx0cmggOiBzY3JlZW4uaGVpZ2h0ICogcmF0aW9cclxuXHQiXX0=
//# sourceURL=C:\Lab\2017\127-SchooBoo\coffee\sketch.coffee