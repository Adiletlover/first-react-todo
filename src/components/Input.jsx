import React, { useRef, useState } from 'react'

const Input = ({ addTodo }) => {
	const [state, setState] = useState('')
	const inputRef = useRef(null)

	const handleChange = event => {
		setState(event.target.value)
	}

	const onSubmit = event => {
		event.preventDefault()
		const todo = { title: state, desc: inputRef.current.value }
		addTodo(todo)
		setState('')
		inputRef.current.value = ''
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					onChange={handleChange}
					className='input'
					value={state}
					placeholder='Something here'
				/>
				<input ref={inputRef} className='input' placeholder='Something here' />
				<button>Submit</button>
			</form>
		</div>
	)
}

export default Input
