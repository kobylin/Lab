// Generated by CoffeeScript 2.0.3
var State, a, addProject, button, checkbox, code, data, div, fix, form, h1, h3, header, img, input, label, li, option, p, project, projects, render, sel, setup, state, strong, table, td, tr;

render = function(node) {
  var _props, attr, child, key;
  if (Array.isArray(node)) {
    return ((function() {
      var i, len, results;
      results = [];
      for (i = 0, len = node.length; i < len; i++) {
        child = node[i];
        results.push(render(child));
      }
      return results;
    })()).join('');
  }
  if (typeof node !== 'object') {
    return node;
  }
  _props = ((function() {
    var ref, results;
    ref = node.props;
    results = [];
    for (key in ref) {
      attr = ref[key];
      results.push(' ' + key + '="' + attr + '"');
    }
    return results;
  })()).join('');
  return `<${node.tag}${_props}>${render(node.children)}</${node.tag}>\n`;
};

fix = function(tag, ...options) {
  var props;
  if (typeof options[0] === 'object') {
    props = options.shift();
  } else {
    props = {};
  }
  return {
    tag: tag,
    props: props,
    children: options.length === 0 ? [] : options
  };
};

a = function() {
  return fix('a', ...arguments);
};

button = function() {
  return fix('button', ...arguments);
};

code = function() {
  return fix('code', ...arguments);
};

div = function() {
  return fix('div', ...arguments);
};

form = function() {
  return fix('form', ...arguments);
};

header = function() {
  return fix('header', ...arguments);
};

h1 = function() {
  return fix('h1', ...arguments);
};

h3 = function() {
  return fix('h3', ...arguments);
};

img = function() {
  return fix('img', ...arguments);
};

input = function() {
  return fix('input', ...arguments);
};

label = function() {
  return fix('label', ...arguments);
};

li = function() {
  return fix('li', ...arguments);
};

option = function() {
  return fix('option', ...arguments);
};

p = function() {
  return fix('p', ...arguments);
};

sel = function() {
  return fix('select', ...arguments);
};

strong = function() {
  return fix('strong', ...arguments);
};

table = function() {
  return fix('table', ...arguments);
};

tr = function() {
  return fix('tr', ...arguments);
};

td = function() {
  return fix('td', ...arguments);
};

checkbox = function(p, ...options) {
  return input(_.extend(p, {
    type: 'checkbox'
  }, p.value ? {
    checked: true
  } : {}), ...options);
};

// checkbox är svår att avläsa. toggla och håll reda på tillståndet själv.
// setState i React bör undersökas
// Gäller även this.refs samt ref.

//##############################
addProject = function(props, children = []) {
  var cat;
  return div({}, h3("Add Project"), div({}, label("Title"), input({
    id: 'title',
    type: "text"
  })), div({}, label("Category"), sel({
    id: "category"
  }, (function() {
    var i, len, ref, results;
    ref = props.categories;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      cat = ref[i];
      results.push(option({
        value: cat
      }, cat));
    }
    return results;
  })())), button({
    onclick: "state.addProject()"
  }, 'Submit'));
};

project = function(proj, children = []) {
  return li({}, strong({}, `${proj.title} (${proj.category}) `, a({
    href: "#",
    onclick: `state.deleteProject(${proj.id})`
  }, "Delete")));
};

projects = function(props, children = []) {
  return div({}, addProject({
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }), h3("Latest Projects"), (function() {
    var i, len, results;
    results = [];
    for (i = 0, len = children.length; i < len; i++) {
      p = children[i];
      results.push(project(p));
    }
    return results;
  })());
};

State = class State {
  constructor(projects1) {
    this.projects = projects1;
  }

  init() {
    var struktur;
    struktur = [projects({}, this.projects)];
    print(struktur);
    return this.update('body', render(struktur));
  }

  addProject() {
    var obj1, obj2;
    obj1 = document.getElementById('title');
    obj2 = document.getElementById('category');
    p = {
      id: 99,
      title: obj1.value,
      category: obj2.value
    };
    this.projects.push(p);
    return this.init();
  }

  deleteProject(id) {
    var index;
    index = this.projects.findIndex(function(x) {
      return x.id === id;
    });
    this.projects.splice(index, 1);
    return this.init(); //@setState {projects:projects}
  }

  fix(hash) {
    var key, results, value;
    results = [];
    for (key in hash) {
      value = hash[key];
      results.push(this.update(key, value));
    }
    return results;
  }

  update(name, value) {
    var obj;
    this[name] = value;
    obj = document.getElementById(name);
    if (obj) {
      return obj.innerHTML = value;
    }
  }

};

data = [
  {
    id: 1,
    title: 'Business Website',
    category: 'Web Design'
  },
  {
    id: 2,
    title: 'Social App',
    category: 'Mobile Development'
  },
  {
    id: 3,
    title: 'Ecommerce Shopping Cart',
    category: 'Web Development'
  }
];

state = null;

setup = function() {
  state = new State(data);
  return state.init();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxVQUFBLEVBQUEsTUFBQSxFQUFBLFFBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEVBQUEsRUFBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLE9BQUEsRUFBQSxRQUFBLEVBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsRUFBQSxFQUFBOztBQUFBLE1BQUEsR0FBUyxRQUFBLENBQUMsSUFBRCxDQUFBO0FBQ1IsTUFBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQTtFQUFBLElBQUcsS0FBSyxDQUFDLE9BQU4sQ0FBYyxJQUFkLENBQUg7QUFBMkIsV0FBTzs7QUFBQztNQUFBLEtBQUEsc0NBQUE7O3FCQUFBLE1BQUEsQ0FBTyxLQUFQO01BQUEsQ0FBQTs7UUFBRCxDQUFnQyxDQUFDLElBQWpDLENBQXNDLEVBQXRDLEVBQWxDOztFQUNBLElBQUcsT0FBTyxJQUFQLEtBQWUsUUFBbEI7QUFBZ0MsV0FBTyxLQUF2Qzs7RUFDQSxNQUFBLEdBQVM7O0FBQUM7QUFBQTtJQUFBLEtBQUEsVUFBQTs7bUJBQUEsR0FBQSxHQUFNLEdBQU4sR0FBWSxJQUFaLEdBQW1CLElBQW5CLEdBQTBCO0lBQTFCLENBQUE7O01BQUQsQ0FBMEQsQ0FBQyxJQUEzRCxDQUFnRSxFQUFoRTtTQUNULENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxDQUFDLEdBQVQsQ0FBQSxDQUFBLENBQWUsTUFBZixDQUFzQixDQUF0QixDQUFBLENBQXlCLE1BQUEsQ0FB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aXNBcnJheSBub2RlIHRoZW4gcmV0dXJuIChyZW5kZXIgY2hpbGQgZm9yIGNoaWxkIGluIG5vZGUpLmpvaW4gJydcclxuXHRpZiB0eXBlb2Ygbm9kZSAhPSAnb2JqZWN0JyB0aGVuIHJldHVybiBub2RlXHJcblx0X3Byb3BzID0gKCcgJyArIGtleSArICc9XCInICsgYXR0ciArICdcIicgZm9yIGtleSxhdHRyIG9mIG5vZGUucHJvcHMpLmpvaW4gJydcclxuXHRcIjwje25vZGUudGFnfSN7X3Byb3BzfT4je3JlbmRlciBub2RlLmNoaWxkcmVufTwvI3tub2RlLnRhZ30+XFxuXCJcclxuXHJcbmZpeCA9ICh0YWcsLi4ub3B0aW9ucykgLT5cclxuXHRpZiB0eXBlb2Ygb3B0aW9uc1swXSA9PSAnb2JqZWN0J1xyXG5cdFx0cHJvcHMgPSBvcHRpb25zLnNoaWZ0KCkgXHJcblx0ZWxzZVxyXG5cdFx0cHJvcHMgPSB7fVxyXG5cdHt0YWc6dGFnLCBwcm9wczpwcm9wcywgY2hpbGRyZW46IGlmIG9wdGlvbnMubGVuZ3RoPT0wIHRoZW4gW10gZWxzZSBvcHRpb25zfVxyXG5cclxuYSAgICAgID0gLT4gZml4ICdhJywuLi5hcmd1bWVudHNcclxuYnV0dG9uID0gLT4gZml4ICdidXR0b24nLC4uLmFyZ3VtZW50c1xyXG5jb2RlICAgPSAtPiBmaXggJ2NvZGUnLC4uLmFyZ3VtZW50c1xyXG5kaXYgICAgPSAtPiBmaXggJ2RpdicsLi4uYXJndW1lbnRzXHJcbmZvcm0gICA9IC0+IGZpeCAnZm9ybScsLi4uYXJndW1lbnRzXHJcbmhlYWRlciA9IC0+IGZpeCAnaGVhZGVyJywuLi5hcmd1bWVudHNcclxuaDEgICAgID0gLT4gZml4ICdoMScsLi4uYXJndW1lbnRzXHJcbmgzICAgICA9IC0+IGZpeCAnaDMnLC4uLmFyZ3VtZW50c1xyXG5pbWcgICAgPSAtPiBmaXggJ2ltZycsLi4uYXJndW1lbnRzXHJcbmlucHV0ICA9IC0+IGZpeCAnaW5wdXQnLC4uLmFyZ3VtZW50c1xyXG5sYWJlbCAgPSAtPiBmaXggJ2xhYmVsJywuLi5hcmd1bWVudHNcclxubGkgICAgID0gLT4gZml4ICdsaScsLi4uYXJndW1lbnRzXHJcbm9wdGlvbiA9IC0+IGZpeCAnb3B0aW9uJywuLi5hcmd1bWVudHNcclxucCAgICAgID0gLT4gZml4ICdwJywuLi5hcmd1bWVudHNcclxuc2VsICAgID0gLT4gZml4ICdzZWxlY3QnLC4uLmFyZ3VtZW50c1xyXG5zdHJvbmcgPSAtPiBmaXggJ3N0cm9uZycsLi4uYXJndW1lbnRzXHJcbnRhYmxlICA9IC0+IGZpeCAndGFibGUnLC4uLmFyZ3VtZW50c1xyXG50ciAgICAgPSAtPiBmaXggJ3RyJywuLi5hcmd1bWVudHNcclxudGQgICAgID0gLT4gZml4ICd0ZCcsLi4uYXJndW1lbnRzXHJcblxyXG5jaGVja2JveCA9IChwLC4uLm9wdGlvbnMpIC0+IGlucHV0IChfLmV4dGVuZCBwLCB7dHlwZTonY2hlY2tib3gnfSwgaWYgcC52YWx1ZSB0aGVuIHtjaGVja2VkOnRydWV9IGVsc2Uge30pLC4uLm9wdGlvbnNcclxuXHJcbiMgY2hlY2tib3ggw6RyIHN2w6VyIGF0dCBhdmzDpHNhLiB0b2dnbGEgb2NoIGjDpWxsIHJlZGEgcMOlIHRpbGxzdMOlbmRldCBzasOkbHYuXHJcbiMgc2V0U3RhdGUgaSBSZWFjdCBiw7ZyIHVuZGVyc8O2a2FzXHJcbiMgR8OkbGxlciDDpHZlbiB0aGlzLnJlZnMgc2FtdCByZWYuXHJcblxyXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG5hZGRQcm9qZWN0ID0gKHByb3BzLGNoaWxkcmVuPVtdKSAtPlxyXG5cdGRpdiB7fSxcclxuXHRcdGgzIFwiQWRkIFByb2plY3RcIlxyXG5cdFx0ZGl2IHt9LFxyXG5cdFx0XHRsYWJlbCBcIlRpdGxlXCJcclxuXHRcdFx0aW5wdXQgaWQ6J3RpdGxlJywgdHlwZTpcInRleHRcIlxyXG5cdFx0ZGl2IHt9LFxyXG5cdFx0XHRsYWJlbCBcIkNhdGVnb3J5XCJcclxuXHRcdFx0c2VsIGlkOlwiY2F0ZWdvcnlcIiwgXHJcblx0XHRcdFx0b3B0aW9uIHt2YWx1ZTpjYXR9LGNhdCBmb3IgY2F0IGluIHByb3BzLmNhdGVnb3JpZXNcclxuXHRcdGJ1dHRvbiBvbmNsaWNrOlwic3RhdGUuYWRkUHJvamVjdCgpXCIsICdTdWJtaXQnXHJcblxyXG5wcm9qZWN0ID0gKHByb2osY2hpbGRyZW49W10pIC0+XHJcblx0bGkge30sXHJcblx0XHRzdHJvbmcge30sIFxyXG5cdFx0XHRcIiN7cHJvai50aXRsZX0gKCN7cHJvai5jYXRlZ29yeX0pIFwiXHJcblx0XHRcdGEgaHJlZjpcIiNcIiwgb25jbGljazpcInN0YXRlLmRlbGV0ZVByb2plY3QoI3twcm9qLmlkfSlcIiwgXCJEZWxldGVcIlxyXG5cclxucHJvamVjdHMgPSAocHJvcHMsY2hpbGRyZW49W10pIC0+IFxyXG5cdGRpdiB7fSwgXHJcblx0XHRhZGRQcm9qZWN0IGNhdGVnb3JpZXM6IFsnV2ViIERlc2lnbicsICdXZWIgRGV2ZWxvcG1lbnQnLCAnTW9iaWxlIERldmVsb3BtZW50J11cclxuXHRcdGgzIFwiTGF0ZXN0IFByb2plY3RzXCJcclxuXHRcdHByb2plY3QgcCBmb3IgcCBpbiBjaGlsZHJlblxyXG5cclxuY2xhc3MgU3RhdGUgXHJcblx0Y29uc3RydWN0b3IgOiAoQHByb2plY3RzKSAtPlxyXG5cdFx0XHRcclxuXHRpbml0IDogLT5cclxuXHRcdHN0cnVrdHVyID0gW3Byb2plY3RzIHt9LCBAcHJvamVjdHNdXHJcblx0XHRwcmludCAgc3RydWt0dXJcclxuXHRcdEB1cGRhdGUgJ2JvZHknLCByZW5kZXIgc3RydWt0dXJcclxuXHJcblx0YWRkUHJvamVjdCA6IC0+XHJcblx0XHRvYmoxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJ3RpdGxlJ1xyXG5cdFx0b2JqMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICdjYXRlZ29yeSdcclxuXHRcdHAgPSB7XHJcblx0XHRcdGlkOiA5OSxcclxuXHRcdFx0dGl0bGU6IG9iajEudmFsdWUsXHJcblx0XHRcdGNhdGVnb3J5OiBvYmoyLnZhbHVlXHJcblx0XHR9XHJcblx0XHRAcHJvamVjdHMucHVzaCBwIFxyXG5cdFx0QGluaXQoKVxyXG5cclxuXHRkZWxldGVQcm9qZWN0IDogKGlkKSAtPlxyXG5cdFx0aW5kZXggPSBAcHJvamVjdHMuZmluZEluZGV4ICh4KSAtPiB4LmlkID09IGlkXHJcblx0XHRAcHJvamVjdHMuc3BsaWNlIGluZGV4LCAxXHJcblx0XHRAaW5pdCgpICNAc2V0U3RhdGUge3Byb2plY3RzOnByb2plY3RzfVxyXG5cclxuXHRmaXggOiAoaGFzaCkgLT4gQHVwZGF0ZSBrZXksdmFsdWUgZm9yIGtleSx2YWx1ZSBvZiBoYXNoXHJcblx0dXBkYXRlIDogKG5hbWUsdmFsdWUpIC0+XHJcblx0XHRAW25hbWVdID0gdmFsdWVcclxuXHRcdG9iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkIG5hbWVcclxuXHRcdGlmIG9iaiB0aGVuIG9iai5pbm5lckhUTUwgPSB2YWx1ZVxyXG5cclxuZGF0YSA9IFtcclxuXHR7XHJcblx0XHRpZDoxLFxyXG5cdFx0dGl0bGU6ICdCdXNpbmVzcyBXZWJzaXRlJyxcclxuXHRcdGNhdGVnb3J5OiAnV2ViIERlc2lnbidcclxuXHR9XHJcblx0e1xyXG5cdFx0aWQ6MixcclxuXHRcdHRpdGxlOiAnU29jaWFsIEFwcCcsXHJcblx0XHRjYXRlZ29yeTogJ01vYmlsZSBEZXZlbG9wbWVudCdcclxuXHR9XHJcblx0e1xyXG5cdFx0aWQ6MyxcclxuXHRcdHRpdGxlOiAnRWNvbW1lcmNlIFNob3BwaW5nIENhcnQnLFxyXG5cdFx0Y2F0ZWdvcnk6ICdXZWIgRGV2ZWxvcG1lbnQnXHJcblx0fVxyXG5dXHJcblxyXG5zdGF0ZSA9IG51bGxcclxuc2V0dXAgPSAtPiBcclxuXHRzdGF0ZSA9IG5ldyBTdGF0ZSBkYXRhXHJcblx0c3RhdGUuaW5pdCgpXHJcbiJdfQ==
//# sourceURL=C:\Lab\2017\145-Projects\coffee\sketch.coffee