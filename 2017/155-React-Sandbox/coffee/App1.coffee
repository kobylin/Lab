###
eslint-disable import/first
###

# Kan visa krona/klave, tärning osv.
# Prova även print10. dvs \/

import React, {Component } from 'react'

export default class App extends Component 
	constructor : ->
		super()
		@state = {txt: '123456', result: ''}

	handleChange : (e) -> @setState {txt : e.target.value, result:''}

	handleClick : ->
		s = @state.txt
		n = s.length
		result = (s[Math.floor(n*Math.random())] for i in [0..49]).join ''
		@setState {result : @state.result + result + "\n"}

	render : ->
		<div>
			<input onChange={(e) => @setState {txt : e.target.value, result:''}} value={@state.txt}/>
			<button onClick={() => @handleClick()}>choose</button>
			<p style={{fontFamily: 'courier'}}>{@state.result}</p>
		</div>
