// Generated by CoffeeScript 1.12.7
var A, ABCDE, B, C, D, E, PROBLEMS, block_event, buffer, counter, cursor_activity, dump, editor, iProblem, input_read, key_handled, my_copy, nCommands, nextProblem, setup, target, update,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

counter = 0;

nCommands = 0;

A = 'for i in range 10\n';

B = '\tfor j in range 10\n';

C = '\t\tx = lerp 10,30,i\n';

D = '\t\ty = lerp 10,30,j\n';

E = '\t\trect x,y,10,10\n';

ABCDE = A + B + C + D + E;

iProblem = 0;

buffer = '';

target = null;

editor = null;

PROBLEMS = [[1, 2, 8, ABCDE, "" + A + B + "\t\tx = lezrp 10,30,i\n" + D + E], [1, 2, 8, ABCDE, "" + A + B + "\t\tx = lrp 10,30,i\n" + D + E], [1, 2, 8, ABCDE, "" + A + B + "\t\tx = lep 10,30,i\n" + D + E], [1, 2, 8, ABCDE, "" + A + B + D + E], [1, 2, 8, ABCDE, "" + A + B + C + C + D + E], [1, 2, 8, ABCDE, "" + A + B + C + "\t\t\n" + D + E], [1, 2, 8, ABCDE, "" + A + B + "\t\t\n" + C + D + E], [1, 2, 8, ABCDE, "" + A + C + B + D + E], [1, 2, 8, ABCDE, "" + A + B + D + C + E], [1, 2, 8, ABCDE, "" + A + B + "\t\tx = le\n" + D + E], [1, 2, 8, ABCDE, "" + A + B + "\tx = lerp 10,30,i\n" + D + E], [2, 2, 8, ABCDE, "" + A + B + "\t" + C + D + E], [2, 2, 8, ABCDE, "z" + A + B + C + D + E], [2, 2, 8, ABCDE, "" + A + B + "\t\tx = le 10,30,i\n" + D + E], [2, 2, 8, ABCDE, "" + A + B + C + D + E + "z"], [2, 2, 8, ABCDE, "" + A + B + "\t\tx = lerp 10,30,iz\n" + D + E], [2, 2, 8, ABCDE, ""], [2, 2, 8, ABCDE, 'for i in range 10\nfor j in range 10\n\tx = lerp 10,30,i\n\ty = lerp 10,30,j\n\trect x,y,10,10\n'], [2, 2, 8, ABCDE, "\t" + A + "\t" + B + "\t" + C + "\t" + D + "\t" + E], [2, 2, 8, ABCDE, "" + A + B + "\t\tx =  10,30,i\n" + D + E], [3, 2, 8, ABCDE, "" + A + B + C + "\t\ty = lerp 10,30,jz\n" + E], [3, 2, 8, ABCDE, "for i in range 10z\n" + B + C + D + E], [3, 2, 8, ABCDE, "" + A + B + "z" + C + D + E], [4, 2, 8, ABCDE, "" + A + B + "\t\tx = rple 10,30,i\n" + D + E], [5, 2, 8, ABCDE, "" + A + B + "\t\tx = lerplerplerp 10,30,i\n" + D + E], [5, 2, 8, ABCDE, 'for i in range 10 for j in range 10 x = lerp 10,30,i y = lerp 10,30,j rect x,y,10,10\n'], [5, 2, 8, ABCDE, "" + A + B + C + D + C + D + E], [12, 2, 8, ABCDE, A + "\tx = lerp 10,30,i\n\trect x,0,10,10\n"], [23, 2, 8, ABCDE, "" + A + B + "\t\trect 10+20*i,10+20*j,10,10\n"], [24, 0, 0, '', "oxoxoxox\nxoxoxoxo\noxoxoxox\nxoxoxoxo\noxoxoxox\nxoxoxoxo\noxoxoxox\nxoxoxoxo"]];

update = function() {
  var diff;
  diff = nCommands - counter;
  operations.innerHTML = diff;
  problem.innerHTML = iProblem;
  problem.style.color = 'white';
  return operations.style.color = target.getValue() === editor.getValue() && diff >= 0 ? 'green' : 'red';
};

dump = function(ch) {
  buffer += ch;
  if (buffer.length > 3 || indexOf.call('AA FA AFA BA D'.split(' '), buffer) >= 0) {
    buffer = '';
    counter++;
  }
  return update();
};

cursor_activity = function() {
  return dump('A');
};

key_handled = function() {
  return dump('B');
};

my_copy = function() {
  return dump('D');
};

input_read = function() {
  return dump('F');
};

block_event = function(obj, event) {
  editor.focus();
  return event.preventDefault();
};

setup = function() {
  var cursor, defaultValues;
  defaultValues = {
    lineNumbers: true,
    mode: "coffeescript",
    keyMap: "sublime",
    theme: "dracula",
    autoCloseBrackets: true,
    lineWiseCopyCut: true,
    tabSize: 2,
    indentWithTabs: true,
    matchBrackets: true
  };
  target = CodeMirror.fromTextArea(document.getElementById("target"), defaultValues);
  target.on("mousedown", block_event);
  target.on("touchstart", block_event);
  editor = CodeMirror.fromTextArea(document.getElementById("editor"), defaultValues);
  editor.on("mousedown", block_event);
  editor.on("touchstart", block_event);
  editor.on("inputRead", input_read);
  editor.on("keyHandled", key_handled);
  editor.on("cursorActivity", cursor_activity);
  editor.on("copy", my_copy);
  editor.focus();
  cursor = editor.getCursor();
  return nextProblem(0);
};

nextProblem = function(d) {
  var ch, line, ref, slut, start;
  iProblem += d;
  iProblem = constrain(iProblem, 0, PROBLEMS.length - 1);
  ref = PROBLEMS[iProblem], nCommands = ref[0], line = ref[1], ch = ref[2], start = ref[3], slut = ref[4];
  target.setValue(slut);
  target.setCursor(line, ch);
  editor.setValue(start);
  editor.setCursor(line, ch);
  counter = 0;
  buffer = '';
  update();
  return editor.focus();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsc0xBQUE7RUFBQTs7QUFBQSxPQUFBLEdBQVU7O0FBQ1YsU0FBQSxHQUFZOztBQUtaLENBQUEsR0FBSTs7QUFDSixDQUFBLEdBQUk7O0FBQ0osQ0FBQSxHQUFJOztBQUNKLENBQUEsR0FBSTs7QUFDSixDQUFBLEdBQUk7O0FBQ0osS0FBQSxHQUFRLENBQUEsR0FBRSxDQUFGLEdBQUksQ0FBSixHQUFNLENBQU4sR0FBUTs7QUFFaEIsUUFBQSxHQUFXOztBQUNYLE1BQUEsR0FBUzs7QUFDVCxNQUFBLEdBQVM7O0FBQ1QsTUFBQSxHQUFTOztBQUVULFFBQUEsR0FBVyxDQUNWLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sS0FBUCxFQUFjLEVBQUEsR0FBRyxDQUFILEdBQU8sQ0FBUCxHQUFTLHlCQUFULEdBQWtDLENBQWxDLEdBQXNDLENBQXBELENBRFUsRUFFVixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLEtBQVAsRUFBYyxFQUFBLEdBQUcsQ0FBSCxHQUFPLENBQVAsR0FBUyx1QkFBVCxHQUFnQyxDQUFoQyxHQUFvQyxDQUFsRCxDQUZVLEVBR1YsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxLQUFQLEVBQWMsRUFBQSxHQUFHLENBQUgsR0FBTyxDQUFQLEdBQVMsdUJBQVQsR0FBZ0MsQ0FBaEMsR0FBb0MsQ0FBbEQsQ0FIVSxFQUlWLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sS0FBUCxFQUFjLEVBQUEsR0FBRyxDQUFILEdBQU8sQ0FBUCxHQUFXLENBQVgsR0FBZSxDQUE3QixDQUpVLEVBS1YsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxLQUFQLEVBQWMsRUFBQSxHQUFHLENBQUgsR0FBTyxDQUFQ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QSxRQUFBLENBQTFDLEVBQUMsa0JBQUQsRUFBVyxhQUFYLEVBQWdCLFdBQWhCLEVBQW1CLGNBQW5CLEVBQXlCO0VBRXpCLE1BQU0sQ0FBQyxRQUFQLENBQWdCLElBQWhCO0VBQ0EsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsSUFBakIsRUFBc0IsRUFBdEI7RUFFQSxNQUFNLENBQUMsUUFBUCxDQUFnQixLQUFoQjtFQUNBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLElBQWpCLEVBQXNCLEVBQXRCO0VBRUEsT0FBQSxHQUFVO0VBQ1YsTUFBQSxHQUFTO0VBRVQsTUFBQSxDQUFBO1NBRUEsTUFBTSxDQUFDLEtBQVAsQ0FBQTtBQWhCYSIsInNvdXJjZXNDb250ZW50IjpbImNvdW50ZXIgPSAwXHJcbm5Db21tYW5kcyA9IDBcclxuIyBWaXNhIHN0YXJ0bMOkZ2Ugb2NoIHNsdXRsw6RnZVxyXG4jIFLDpGtuYSBhbnRhbGV0IG9wZXJhdGlvbmVyXHJcbiMgQXZnw7ZyIG9tIHN1Y2NlIGVsbGVyIGVqXHJcblxyXG5BID0gJ2ZvciBpIGluIHJhbmdlIDEwXFxuJ1xyXG5CID0gJ1xcdGZvciBqIGluIHJhbmdlIDEwXFxuJ1xyXG5DID0gJ1xcdFxcdHggPSBsZXJwIDEwLDMwLGlcXG4nXHJcbkQgPSAnXFx0XFx0eSA9IGxlcnAgMTAsMzAsalxcbidcclxuRSA9ICdcXHRcXHRyZWN0IHgseSwxMCwxMFxcbidcclxuQUJDREUgPSBBK0IrQytEK0VcclxuXHJcbmlQcm9ibGVtID0gMFxyXG5idWZmZXIgPSAnJ1xyXG50YXJnZXQgPSBudWxsICMgYsO2ci4gUmVhZG9ubHlcclxuZWRpdG9yID0gbnVsbCAjIMOkci4gUMOldmVya2FzIGF2IHRhbmdlbnR0cnlja25pbmdhciBlbmJhcnRcclxuXHJcblBST0JMRU1TID0gWyAjIG9wZXJhdGlvbnMsbGluZSxjaCxzdGFydGzDpGdlLHNsdXRsw6RnZVxyXG5cdFsxLDIsOCxBQkNERSwgXCIje0F9I3tCfVxcdFxcdHggPSBsZXpycCAxMCwzMCxpXFxuI3tEfSN7RX1cIl0gIyB6XHJcblx0WzEsMiw4LEFCQ0RFLCBcIiN7QX0je0J9XFx0XFx0eCA9IGxycCAxMCwzMCxpXFxuI3tEfSN7RX1cIl0gIyBCYWNrc3BhY2VcclxuXHRbMSwyLDgsQUJDREUsIFwiI3tBfSN7Qn1cXHRcXHR4ID0gbGVwIDEwLDMwLGlcXG4je0R9I3tFfVwiXSAjIERlbFxyXG5cdFsxLDIsOCxBQkNERSwgXCIje0F9I3tCfSN7RH0je0V9XCJdICMgQ3RybFhcclxuXHRbMSwyLDgsQUJDREUsIFwiI3tBfSN7Qn0je0N9I3tDfSN7RH0je0V9XCJdICMgY3RybC1zaGlmdC1EXHJcblx0WzEsMiw4LEFCQ0RFLCBcIiN7QX0je0J9I3tDfVxcdFxcdFxcbiN7RH0je0V9XCJdICMgY3RybC1FbnRlclxyXG5cdFsxLDIsOCxBQkNERSwgXCIje0F9I3tCfVxcdFxcdFxcbiN7Q30je0R9I3tFfVwiXSAjIGN0cmwtc2hpZnQtRW50ZXJcclxuXHRbMSwyLDgsQUJDREUsIFwiI3tBfSN7Q30je0J9I3tEfSN7RX1cIl0gIyBjdHJsLXNoaWZ0LVVwXHJcblx0WzEsMiw4LEFCQ0RFLCBcIiN7QX0je0J9I3tEfSN7Q30je0V9XCJdICMgY3RybC1zaGlmdC1Eb3duXHJcblx0WzEsMiw4LEFCQ0RFLCBcIiN7QX0je0J9XFx0XFx0eCA9IGxlXFxuI3tEfSN7RX1cIl0gIyBjdHJsLUtLXHJcblx0WzEsMiw4LEFCQ0RFLCBcIiN7QX0je0J9XFx0eCA9IGxlcnAgMTAsMzAsaVxcbiN7RH0je0V9XCJdICMgc2hpZnQtVGFiXHJcblx0WzIsMiw4LEFCQ0RFLCBcIiN7QX0je0J9XFx0I3tDfSN7RH0je0V9XCJdICMgSG9tZSBUYWJcclxuXHRbMiwyLDgsQUJDREUsIFwieiN7QX0je0J9I3tDfSN7RH0je0V9XCJdICMgY3RybEhvbWUgelxyXG5cdFsyLDIsOCxBQkNERSwgXCIje0F9I3tCfVxcdFxcdHggPSBsZSAxMCwzMCxpXFxuI3tEfSN7RX1cIl0gIyBEZWwgRGVsXHJcblx0WzIsMiw4LEFCQ0RFLCBcIiN7QX0je0J9I3tDfSN7RH0je0V9elwiXSAjIGN0cmxFbmQgelxyXG5cdFsyLDIsOCxBQkNERSwgXCIje0F9I3tCfVxcdFxcdHggPSBsZXJwIDEwLDMwLGl6XFxuI3tEfSN7RX1cIl0gIyBFbmQgelxyXG5cdFsyLDIsOCxBQkNERSwgXCJcIl0gIyBjdHJsQSBEZWxcclxuXHRbMiwyLDgsQUJDREUsICdmb3IgaSBpbiByYW5nZSAxMFxcbmZvciBqIGluIHJhbmdlIDEwXFxuXFx0eCA9IGxlcnAgMTAsMzAsaVxcblxcdHkgPSBsZXJwIDEwLDMwLGpcXG5cXHRyZWN0IHgseSwxMCwxMFxcbiddICMgY3RybEEgc2hpZnRUYWJcclxuXHRbMiwyLDgsQUJDREUsIFwiXFx0I3tBfVxcdCN7Qn1cXHQje0N9XFx0I3tEfVxcdCN7RX1cIl0gIyBjdHJsQSBUYWJcclxuXHRbMiwyLDgsQUJDREUsIFwiI3tBfSN7Qn1cXHRcXHR4ID0gIDEwLDMwLGlcXG4je0R9I3tFfVwiXSAjIGN0cmwtRCBEZWxcclxuXHRbMywyLDgsQUJDREUsIFwiI3tBfSN7Qn0je0N9XFx0XFx0eSA9IGxlcnAgMTAsMzAsanpcXG4je0V9XCJdICMgRG93biBFbmQgelxyXG5cdFszLDIsOCxBQkNERSwgXCJmb3IgaSBpbiByYW5nZSAxMHpcXG4je0J9I3tDfSN7RH0je0V9XCJdICMgY3RybEhvbWUgRW5kIHpcclxuXHRbMywyLDgsQUJDREUsIFwiI3tBfSN7Qn16I3tDfSN7RH0je0V9XCJdICMgSG9tZSBIb21lIHpcclxuXHRbNCwyLDgsQUJDREUsIFwiI3tBfSN7Qn1cXHRcXHR4ID0gcnBsZSAxMCwzMCxpXFxuI3tEfSN7RX1cIl0gIyBjdHJsU2hpZnRSaWdodCBjdHJsWCBIb21lIHBhc3RlXHJcblx0WzUsMiw4LEFCQ0RFLCBcIiN7QX0je0J9XFx0XFx0eCA9IGxlcnBsZXJwbGVycCAxMCwzMCxpXFxuI3tEfSN7RX1cIl0gIyBjdHJsRCBjdHJsQyBjdHJsViBjdHJsViBjdHJsVlxyXG5cdFs1LDIsOCxBQkNERSwgJ2ZvciBpIGluIHJhbmdlIDEwIGZvciBqIGluIHJhbmdlIDEwIHggPSBsZXJwIDEwLDMwLGkgeSA9IGxlcnAgMTAsMzAsaiByZWN0IHgseSwxMCwxMFxcbiddICMgY3RybC1Ib21lIGN0cmwtSiBjdHJsLUogY3RybC1KIGN0cmwtSlxyXG5cdFs1LDIsOCxBQkNERSwgXCIje0F9I3tCfSN7Q30je0R9I3tDfSN7RH0je0V9XCJdICMgY3RybC1MIGN0cmwtTCBjdHJsLUMgY3RybC1WIGN0cmwtVlxyXG5cdFsxMiwyLDgsQUJDREUsIFwiI3tBfVxcdHggPSBsZXJwIDEwLDMwLGlcXG5cXHRyZWN0IHgsMCwxMCwxMFxcblwiXSBcclxuXHRbMjMsMiw4LEFCQ0RFLCBcIiN7QX0je0J9XFx0XFx0cmVjdCAxMCsyMCppLDEwKzIwKmosMTAsMTBcXG5cIl0gXHJcblx0WzI0LDAsMCwnJywgXCJveG94b3hveFxcbnhveG94b3hvXFxub3hveG94b3hcXG54b3hveG94b1xcbm94b3hveG94XFxueG94b3hveG9cXG5veG94b3hveFxcbnhveG94b3hvXCJdIFxyXG5dIFxyXG5cclxudXBkYXRlID0gLT4gXHJcblx0ZGlmZiA9IG5Db21tYW5kcyAtIGNvdW50ZXJcclxuXHRvcGVyYXRpb25zLmlubmVySFRNTCA9IGRpZmZcclxuXHRwcm9ibGVtLmlubmVySFRNTCA9IGlQcm9ibGVtXHJcblx0cHJvYmxlbS5zdHlsZS5jb2xvciA9ICd3aGl0ZSdcclxuXHRvcGVyYXRpb25zLnN0eWxlLmNvbG9yID0gaWYgdGFyZ2V0LmdldFZhbHVlKCk9PWVkaXRvci5nZXRWYWx1ZSgpIGFuZCBkaWZmID49IDAgdGhlbiAnZ3JlZW4nIGVsc2UgJ3JlZCdcclxuXHJcbiMgYnVmZmVyIGFudsOkbmRzIHBnYSBzdsOlcnQgYXR0IGhhbnRlcmEga29tcGxleGl0ZXRlblxyXG4jIHQgZXggZ2VyIGN0cmxYIGLDpWRlIEZBIG9jaCBBRkFcclxuZHVtcCA9IChjaCkgLT5cclxuXHRidWZmZXIgKz0gY2hcclxuXHRpZiBidWZmZXIubGVuZ3RoID4gMyBvciBidWZmZXIgaW4gJ0FBIEZBIEFGQSBCQSBEJy5zcGxpdCAnICdcclxuXHRcdGJ1ZmZlcj0nJ1xyXG5cdFx0Y291bnRlcisrXHJcblx0dXBkYXRlKClcclxuXHJcbmN1cnNvcl9hY3Rpdml0eSA9IC0+IGR1bXAgJ0EnXHJcbmtleV9oYW5kbGVkICAgICA9IC0+IGR1bXAgJ0InXHJcbm15X2NvcHkgICAgICAgICA9IC0+IGR1bXAgJ0QnXHJcbmlucHV0X3JlYWQgICAgICA9IC0+IGR1bXAgJ0YnXHJcblxyXG5ibG9ja19ldmVudCA9IChvYmosZXZlbnQpIC0+IFxyXG5cdGVkaXRvci5mb2N1cygpXHJcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuc2V0dXAgPSAtPlxyXG5cclxuXHRkZWZhdWx0VmFsdWVzID1cclxuXHRcdGxpbmVOdW1iZXJzOiB0cnVlXHJcblx0XHRtb2RlOiBcImNvZmZlZXNjcmlwdFwiXHRcclxuXHRcdGtleU1hcDogXCJzdWJsaW1lXCJcclxuXHRcdHRoZW1lOiBcImRyYWN1bGFcIlxyXG5cdFx0YXV0b0Nsb3NlQnJhY2tldHM6IHRydWVcclxuXHRcdGxpbmVXaXNlQ29weUN1dDogdHJ1ZVxyXG5cdFx0dGFiU2l6ZTogMlxyXG5cdFx0aW5kZW50V2l0aFRhYnM6IHRydWVcclxuXHRcdG1hdGNoQnJhY2tldHMgOiB0cnVlXHJcblxyXG5cdHRhcmdldCA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpLCBkZWZhdWx0VmFsdWVzXHJcblx0dGFyZ2V0Lm9uIFwibW91c2Vkb3duXCIsIGJsb2NrX2V2ZW50XHJcblx0dGFyZ2V0Lm9uIFwidG91Y2hzdGFydFwiLCBibG9ja19ldmVudFxyXG5cclxuXHRlZGl0b3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRvclwiKSwgZGVmYXVsdFZhbHVlc1xyXG5cdGVkaXRvci5vbiBcIm1vdXNlZG93blwiLCBibG9ja19ldmVudFxyXG5cdGVkaXRvci5vbiBcInRvdWNoc3RhcnRcIiwgYmxvY2tfZXZlbnRcclxuXHRlZGl0b3Iub24gXCJpbnB1dFJlYWRcIiwgaW5wdXRfcmVhZFxyXG5cdGVkaXRvci5vbiBcImtleUhhbmRsZWRcIiwga2V5X2hhbmRsZWRcclxuXHRlZGl0b3Iub24gXCJjdXJzb3JBY3Rpdml0eVwiLCBjdXJzb3JfYWN0aXZpdHlcclxuXHRlZGl0b3Iub24gXCJjb3B5XCIsIG15X2NvcHlcclxuXHJcblx0ZWRpdG9yLmZvY3VzKClcclxuXHRjdXJzb3IgPSBlZGl0b3IuZ2V0Q3Vyc29yKClcclxuXHRuZXh0UHJvYmxlbSAwXHJcblxyXG5uZXh0UHJvYmxlbSA9IChkKSAtPlxyXG5cdGlQcm9ibGVtICs9IGRcclxuXHRpUHJvYmxlbSA9IGNvbnN0cmFpbiBpUHJvYmxlbSwwLFBST0JMRU1TLmxlbmd0aC0xXHJcblx0W25Db21tYW5kcyxsaW5lLGNoLHN0YXJ0LHNsdXRdID0gUFJPQkxFTVNbaVByb2JsZW1dXHJcblxyXG5cdHRhcmdldC5zZXRWYWx1ZSBzbHV0XHJcblx0dGFyZ2V0LnNldEN1cnNvciBsaW5lLGNoXHJcblxyXG5cdGVkaXRvci5zZXRWYWx1ZSBzdGFydFxyXG5cdGVkaXRvci5zZXRDdXJzb3IgbGluZSxjaFxyXG5cclxuXHRjb3VudGVyID0gMFxyXG5cdGJ1ZmZlciA9ICcnXHJcblxyXG5cdHVwZGF0ZSgpXHJcblxyXG5cdGVkaXRvci5mb2N1cygpXHJcbiJdfQ==
//# sourceURL=C:\Lab\2017\132-EditorTrainer\coffee\sketch.coffee