// Generated by CoffeeScript 1.12.7
var N, data, proc, setup, stamp;

N = 6;

data = [];

setup = function() {
  var i, j, len, ref;
  ref = range(N);
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    data.push([0, 0, 0, -1, 0]);
  }
  return document.documentElement.webkitRequestFullScreen();
};

proc = function(x) {
  return round(100 * x);
};

stamp = function(index, st) {
  var buttons, newbutton, oldbutton, state, timestamp, total, txt;
  buttons = [e0, r0, a0, d0, e1, r1, a1, d1, e2, r2, a2, d2, e3, r3, a3, d3, e4, r4, a4, d4, e5, r5, a5, d5];
  newbutton = buttons[4 * index + st];
  txt = buttons[4 * index + 3];
  state = data[index][3];
  timestamp = data[index][4];
  if (state !== -1) {
    oldbutton = buttons[4 * index + state];
  } else {
    oldbutton = null;
  }
  if (state === -1) {
    timestamp = millis();
    state = st;
    newbutton.style = "background-color: " + ['red', 'yellow', 'green'][st];
  } else {
    if (state === st) {
      data[index][state] += int(millis() - timestamp);
      timestamp = int(millis());
      state = -1;
      oldbutton.style = '';
    } else {
      data[index][state] += int(millis() - timestamp);
      timestamp = int(millis());
      state = st;
      oldbutton.style = '';
      newbutton.style = "background-color: " + ['red', 'yellow', 'green'][st];
    }
  }
  data[index][3] = state;
  data[index][4] = timestamp;
  total = data[index][0] + data[index][1] + data[index][2] + 1;
  print(proc(data[index][0] / total), proc(data[index][1] / total), proc(data[index][2] / total));
  return txt.innerHTML = proc(data[index][0] / total) + ' ' + proc(data[index][1] / total) + ' ' + proc(data[index][2] / total);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQUEsQ0FBQSxHQUFJOztBQUNKLElBQUEsR0FBTzs7QUFFUCxLQUFBLEdBQVEsU0FBQTtBQUNQLE1BQUE7QUFBQTtBQUFBLE9BQUEscUNBQUE7O0lBQ0MsSUFBSSxDQUFDLElBQUwsQ0FBVSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQUMsQ0FBUixFQUFVLENBQVYsQ0FBVjtBQUREO1NBRUEsUUFBUSxDQUFDLGVBQWUsQ0FBQyx1QkFBekIsQ0FBQTtBQUhPOztBQUtSLElBQUEsR0FBTyxTQUFDLENBQUQ7U0FBTyxLQUFBLENBQU0sR0FBQSxHQUFJLENBQVY7QUFBUDs7QUFFUCxLQUFBLEdBQVEsU0FBQyxLQUFELEVBQU8sRUFBUDtBQUNQLE1BQUE7RUFBQSxPQUFBLEdBQVUsQ0FBQyxFQUFELEVBQUksRUFBSixFQUFPLEVBQVAsRUFBVSxFQUFWLEVBQWMsRUFBZCxFQUFpQixFQUFqQixFQUFvQixFQUFwQixFQUF1QixFQUF2QixFQUEyQixFQUEzQixFQUE4QixFQUE5QixFQUFpQyxFQUFqQyxFQUFvQyxFQUFwQyxFQUF3QyxFQUF4QyxFQUEyQyxFQUEzQyxFQUE4QyxFQUE5QyxFQUFpRCxFQUFqRCxFQUFxRCxFQUFyRCxFQUF3RCxFQUF4RCxFQUEyRCxFQUEzRCxFQUE4RCxFQUE5RCxFQUFrRSxFQUFsRSxFQUFxRSxFQUFyRSxFQUF3RSxFQUF4RSxFQUEyRSxFQUEzRTtFQUNWLFNBQUEsR0FBWSxPQUFRLENBQUEsQ0FBQSxHQUFFLEtBQUYsR0FBUSxFQUFSO0VBQ3BCLEdBQUEsR0FBTSxPQUFRLENBQUEsQ0FBQSxHQUFFLEtBQUYsR0FBUSxDQUFSO0VBQ2QsS0FBQSxHQUFRLElBQUssQ0FBQSxLQUFBLENBQU8sQ0FBQSxDQUFBO0VBQ3BCLFNBQUEsR0FBWSxJQUFLLENBQUEsS0FBQSxDQUFPLENBQUEsQ0FBQTtFQUV4QixJQUFHLEtBQUEsS0FBUyxDQUFDLENBQWI7SUFBb0IsU0FBQSxHQUFZLE9BQVEsQ0FBQSxDQUFBLEdBQUUsS0FBRixHQUFRLEtBQVIsRUFBeEM7R0FBQSxNQUFBO0lBQTRELFNBQUEsR0FBWSxLQUF4RTs7RUFDQSxJQUFHLEtBQUEsS0FBUyxDQUFDLENBQWI7SUFDQyxTQUFBLEdBQVksTUFBQSxDQUFBO0lBQ1osS0FBQSxHQUFRO0lBQ1IsU0FBUyxDQUFDLEtBQVYsR0FBa0Isb0JBQUEsR0FBdUIsQ0FBQyxLQUFELEVBQU8sUUFBUCxFQUFnQixPQUFoQixDQUF5QixDQUFBLEVBQUEsRUFIbkU7R0FBQSxNQUFBO0lBS0MsSUFBRyxLQUFBLEtBQVMsRUFBWjtNQUNDLElBQUssQ0FBQSxLQUFBLENBQU8sQ0FBQSxLQUFBLENBQVosSUFBc0IsR0FBQSxDQUFJLE1BQUEsQ0FBQSxDQUFBLEdBQVcsU0FBZjtNQUN0QixTQUFBLEdBQVksR0FBQSxDQUFJLE1BQUEsQ0FBQSxDQUFKO01BQ1osS0FBQSxHQUFRLENBQUM7TUFDVCxTQUFTLENBQUMsS0FBVixHQUFrQixHQUpuQjtLQUFBLE1BQUE7TUFNQyxJQUFLLENBQUEsS0FBQSxDQUFPLENBQUEsS0FBQSxDQUFaLElBQXNCLEdBQUEsQ0FBSSxNQUFBLENBQUEsQ0FBQSxHQUFXLFNBQWY7TUFDdEIsU0FBQSxHQUFZLEdBQUEsQ0FBSSxNQUFBLENBQUEsQ0FBSjtNQUNaLEtBQUEsR0FBUTtNQUNSLFNBQVMsQ0FBQyxLQUFWLEdBQWtCO01BQ2xCLFNBQVMsQ0FBQyxLQUFWLEdBQWtCLG9CQUFBLEdBQXVCLENBQUMsS0FBRCxFQUFPLFFBQVAsRUFBZ0IsT0FBaEIsQ0FBeUIsQ0FBQSxFQUFBLEVBVm5FO0tBTEQ7O0VBZ0JBLElBQUssQ0FBQSxLQUFBLENBQU8sQ0FBQSxDQUFBLENBQVosR0FBaUI7RUFDakIsSUFBSyxDQUFBLEtBQUEsQ0FBTyxDQUFBLENBQUEsQ0FBWixHQUFpQjtFQUVqQixLQUFBLEdBQVEsSUFBSyxDQUFBLEtBQUEsQ0FBTyxDQUFBLENBQUEsQ0FBWixHQUFpQixJQUFLLENBQUEsS0FBQSxDQUFPLENBQUEsQ0FBQSxDQUE3QixHQUFrQyxJQUFLLENBQUEsS0FBQSxDQUFPLENBQUEsQ0FBQSxDQUE5QyxHQUFtRDtFQUMzRCxLQUFBLENBQU0sSUFBQSxDQUFLLElBQUssQ0FBQSxLQUFBLENBQU8sQ0FBQSxDQUFBLENBQVosR0FBZSxLQUFwQixDQUFOLEVBQWtDLElBQUEsQ0FBSyxJQUFLLENBQUEsS0FBQSxDQUFPLENBQUEsQ0FBQSxDQUFaLEdBQWUsS0FBcEIsQ0FBbEMsRUFBOEQsSUFBQSxDQUFLLElBQUssQ0FBQSxLQUFBLENBQU8sQ0FBQSxDQUFBLENBQVosR0FBZSxLQUFwQixDQUE5RDtTQUVBLEdBQUcsQ0FBQyxTQUFKLEdBQWdCLElBQUEsQ0FBSyxJQUFLLENBQUEsS0FBQSxDQUFPLENBQUEsQ0FBQSxDQUFaLEdBQWUsS0FBcEIsQ0FBQSxHQUE2QixHQUE3QixHQUFtQyxJQUFBLENBQUssSUFBSyxDQUFBLEtBQUEsQ0FBTyxDQUFBLENBQUEsQ0FBWixHQUFlLEtBQXBCLENBQW5DLEdBQWdFLEdBQWhFLEdBQXNFLElBQUEsQ0FBSyxJQUFLLENBQUEsS0FBQSxDQUFPLENBQUEsQ0FBQSxDQUFaLEdBQWUsS0FBcEI7QUE5Qi9FIiwic291cmNlc0NvbnRlbnQiOlsiTiA9IDZcclxuZGF0YSA9IFtdXHJcblxyXG5zZXR1cCA9IC0+IFxyXG5cdGZvciBpIGluIHJhbmdlIE5cclxuXHRcdGRhdGEucHVzaCBbMCwwLDAsLTEsMF0gIyBlbXB0eSxyZXN0LGFjdGl2ZSxzdGF0ZSx0aW1lc3RhbXBcclxuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4oKVxyXG5cdFxyXG5wcm9jID0gKHgpIC0+IHJvdW5kIDEwMCp4XHJcblxyXG5zdGFtcCA9IChpbmRleCxzdCkgLT5cclxuXHRidXR0b25zID0gW2UwLHIwLGEwLGQwLCBlMSxyMSxhMSxkMSwgZTIscjIsYTIsZDIsIGUzLHIzLGEzLGQzLCBlNCxyNCxhNCxkNCwgZTUscjUsYTUsZDVdXHJcblx0bmV3YnV0dG9uID0gYnV0dG9uc1s0KmluZGV4K3N0XVxyXG5cdHR4dCA9IGJ1dHRvbnNbNCppbmRleCszXVxyXG5cdHN0YXRlID0gZGF0YVtpbmRleF1bM11cclxuXHR0aW1lc3RhbXAgPSBkYXRhW2luZGV4XVs0XVxyXG5cclxuXHRpZiBzdGF0ZSAhPSAtMSB0aGVuIG9sZGJ1dHRvbiA9IGJ1dHRvbnNbNCppbmRleCtzdGF0ZV0gZWxzZSBvbGRidXR0b24gPSBudWxsXHJcblx0aWYgc3RhdGUgPT0gLTFcclxuXHRcdHRpbWVzdGFtcCA9IG1pbGxpcygpXHJcblx0XHRzdGF0ZSA9IHN0XHJcblx0XHRuZXdidXR0b24uc3R5bGUgPSBcImJhY2tncm91bmQtY29sb3I6IFwiICsgWydyZWQnLCd5ZWxsb3cnLCdncmVlbiddW3N0XVxyXG5cdGVsc2VcdFx0XHJcblx0XHRpZiBzdGF0ZSA9PSBzdCAjIHN0b3BwYSBcclxuXHRcdFx0ZGF0YVtpbmRleF1bc3RhdGVdICs9IGludChtaWxsaXMoKSAtIHRpbWVzdGFtcClcclxuXHRcdFx0dGltZXN0YW1wID0gaW50IG1pbGxpcygpXHJcblx0XHRcdHN0YXRlID0gLTFcclxuXHRcdFx0b2xkYnV0dG9uLnN0eWxlID0gJydcclxuXHRcdGVsc2UgIyBzdG9wcGEgc2FtdCBzdGFydGEgbnkgcsOka25hcmVcclxuXHRcdFx0ZGF0YVtpbmRleF1bc3RhdGVdICs9IGludChtaWxsaXMoKSAtIHRpbWVzdGFtcClcclxuXHRcdFx0dGltZXN0YW1wID0gaW50IG1pbGxpcygpXHJcblx0XHRcdHN0YXRlID0gc3RcclxuXHRcdFx0b2xkYnV0dG9uLnN0eWxlID0gJydcclxuXHRcdFx0bmV3YnV0dG9uLnN0eWxlID0gXCJiYWNrZ3JvdW5kLWNvbG9yOiBcIiArIFsncmVkJywneWVsbG93JywnZ3JlZW4nXVtzdF1cclxuXHRkYXRhW2luZGV4XVszXSA9IHN0YXRlXHJcblx0ZGF0YVtpbmRleF1bNF0gPSB0aW1lc3RhbXBcclxuXHJcblx0dG90YWwgPSBkYXRhW2luZGV4XVswXSArIGRhdGFbaW5kZXhdWzFdICsgZGF0YVtpbmRleF1bMl0gKyAxXHJcblx0cHJpbnQgcHJvYyhkYXRhW2luZGV4XVswXS90b3RhbCksIHByb2MoZGF0YVtpbmRleF1bMV0vdG90YWwpLCBwcm9jKGRhdGFbaW5kZXhdWzJdL3RvdGFsKVxyXG5cclxuXHR0eHQuaW5uZXJIVE1MID0gcHJvYyhkYXRhW2luZGV4XVswXS90b3RhbCkgKyAnICcgKyBwcm9jKGRhdGFbaW5kZXhdWzFdL3RvdGFsKSArICcgJyArIHByb2MoZGF0YVtpbmRleF1bMl0vdG90YWwpXHJcbiJdfQ==
//# sourceURL=C:\Lab\2017\108-Friskis&Svettis\coffee\sketch.coffee