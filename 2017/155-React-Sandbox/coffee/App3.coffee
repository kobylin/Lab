###
eslint-disable import/first
###

# Calculator RPN

import React, { Component } from 'react'

class Button extends Component 
	render : -> <button style={{width:50}} onClick = {() => @props.calc @props.cmd}>{@props.cmd}</button>

export default class App extends Component 

	constructor : ->
		super()
		@state = {t:'0', z:'1', y:'2', x:'3', entering:false}

	render : ->
		<div>
			<div>{@state.t}</div>
			<div>{@state.z}</div>
			<div>{@state.y}</div>
			<div>{@state.x}</div>
			<div><Button calc={@calc} cmd='clr' /> <Button calc={@calc} cmd='chs' />  <Button calc={@calc} cmd='%' /> <Button calc={@calc} cmd='÷' /> </div>
			<div><Button calc={@calc} cmd='7' />   <Button calc={@calc} cmd='8' />  <Button calc={@calc} cmd='9' /> <Button calc={@calc} cmd='x' /> </div>
			<div><Button calc={@calc} cmd='4' />   <Button calc={@calc} cmd='5' />  <Button calc={@calc} cmd='6' /> <Button calc={@calc} cmd='-' /> </div>
			<div><Button calc={@calc} cmd='1' />   <Button calc={@calc} cmd='2' />  <Button calc={@calc} cmd='3' /> <Button calc={@calc} cmd='+' /> </div>
			<div><Button calc={@calc} cmd='0' />   <Button calc={@calc} cmd='.' />  <Button calc={@calc} cmd='enter' /> </div>
		</div>

	calc : (cmd) => 
		if cmd == 'clr'   then @setState {x:'0', y:'0', z:'0', t:'0', entering:false}
		if cmd == 'enter' then @setState {x:@state.x, y:@state.x, z:@state.y, t:@state.z, entering:false}
		if cmd == 'chs'   then @setState {x : -@state.x, entering:false}
		if cmd in "+-x÷%"
			x = parseFloat @state.x
			y = parseFloat @state.y
			if cmd == '+' then x = y+x
			if cmd == '-' then x = y-x
			if cmd == 'x' then x = y*x
			if cmd == '÷' then x = y/x
			if cmd == '%' then x = y%x
			@setState {x: x.toString(), y:@state.z, z:@state.t, entering:false}

		if cmd in "0123456789."
			if @state.entering
				if cmd in '0123456789' or not @state.x.includes '.'
					@setState {x: @state.x + cmd}
			else @setState {x: cmd, y:@state.x, z:@state.y, t:@state.z, entering:true}
