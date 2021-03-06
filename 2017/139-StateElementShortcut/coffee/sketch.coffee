render = (node) ->
	if Array.isArray node then return (render child for child in node).join ''
	if typeof node != 'object' then return node
	_props = (' ' + key + '="' + attr + '"' for key,attr of node.props).join ''
	"<#{node.tag}#{_props}>#{render node.children}</#{node.tag}>\n"

fix = (tag,...options) ->
	if typeof options[0] == 'object'
		props = options.shift() 
	else
		props = {}
	{tag:tag, props:props, children: if options.length==0 then [] else options}

a      = -> fix 'a',...arguments
button = -> fix 'button',...arguments
code   = -> fix 'code',...arguments
div    = -> fix 'div',...arguments
form   = -> fix 'form',...arguments
header = -> fix 'header',...arguments
h1     = -> fix 'h1',...arguments
h3     = -> fix 'h3',...arguments
img    = -> fix 'img',...arguments
input  = -> fix 'input',...arguments
label  = -> fix 'label',...arguments
li     = -> fix 'li',...arguments
option = -> fix 'option',...arguments
p      = -> fix 'p',...arguments
sel    = -> fix 'select',...arguments
strong = -> fix 'strong',...arguments
table  = -> fix 'table',...arguments
tr     = -> fix 'tr',...arguments
td     = -> fix 'td',...arguments

checkbox = (p,...options) -> input (_.extend p, {type:'checkbox'}, if p.value then {checked:true} else {}),...options
# checkbox är svår att avläsa. toggla och håll reda på tillståndet själv.

###############################

class State 
	constructor : (@a,@b,@hist) ->
		struktur = [
			div id:'a', @a
			div id:'b', @b
			button id:'bAdd', onclick:'state.add2()',style:"font-size:30px", '+2'
			button id:'bMul', onclick:'state.mul2()',style:"font-size:30px", '*2'
			button id:'bDiv', onclick:'state.div2()',style:"font-size:30px", '/2'
			button id:'bUndo',onclick:'state.undo()',style:"font-size:30px", 'undo'
			button id:'bNext',onclick:'state.next()',style:"font-size:30px", 'next'
			div id:'pretty',@hist				
		]
		@update 'body', render struktur 

	add2 : -> @fix {a: @a+2, hist: @hist.concat [@a]}
	mul2 : -> @fix {a: @a*2, hist: @hist.concat [@a]}
	div2 : -> @fix {a: @a/2, hist: @hist.concat [@a]}
	undo : -> @fix {a: @hist.pop()}
	next : -> @fix {a: int(1 + 20 * random()), b: int(1 + 20 * random()), hist: []}
	
	fix : (hash) -> 
		@update key,value for key,value of hash
		@update 'pretty',@hist.join ' '
		@disable 'bUndo',@hist.length==0 or @a==@b
		@disable 'bAdd', @a==@b
		@disable 'bMul', @a==@b
		@disable 'bDiv', @a==@b or @a%2==1
		@disable 'bNext', @a!=@b
	update : (name,value) ->
		print name,value 
		@[name] = value
		obj = document.getElementById name
		if obj then obj.innerHTML = value
	disable : (name,value) ->	document.getElementById(name).disabled = value

state = null
setup = -> state = new State 7,1,[]
