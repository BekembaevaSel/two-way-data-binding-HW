import './UserForm.css'
import { useState } from 'react'

const UserForm = () => {
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [purpose, setPurpose] = useState('')
	const [identity, setIdentity] = useState('')

	const nameChangeHandler = (event) => {
		setName(event.target.value)
	}
	const ageChangeHandler = (event) => {
		setAge(event.target.value)
	}

	const purposeChangeHandler = (event) => {
		setPurpose(event.target.value)
	}

	const identityChangeHandler = (event) => {
		setIdentity(event.target.value)
	}

	const submitHandler = (event) => {
		event.preventDefault()
		console.log(name)
		console.log(age)
		console.log(purpose)
		console.log(identity)
	}

	return (
		<form className='parent' onSubmit={submitHandler}>
			<div className='second-parent'>
				<h1>Fulfil your profile!</h1>
				<h2>lets meet</h2>
				<div>
					<h4>Your name</h4>
					<input
						name='name'
						type='text'
						value={name}
						onChange={nameChangeHandler}
					></input>
				</div>
				<div>
					<h4>how old are you?</h4>
					<input
						name='age'
						type='number'
						value={age}
						onChange={ageChangeHandler}
					></input>
				</div>
				<div>
					<h4>I am here as:</h4>
					<select name='identity' onChange={identityChangeHandler}>
						<option value='a high-school student'>
							a high-school student
						</option>
						<option value='a student'>a student</option>
						<option value='a teacher'>a teacher</option>
						<option value='a parent'>a parent</option>
						<option value='other'>other</option>
					</select>
				</div>
				<div>
					<h4>I am here for:</h4>
					<select name='purpose' onChange={purposeChangeHandler}>
						<option>reading</option>
						<option>do exercises</option>
						<option>play games</option>
						<option>meet new friends</option>
					</select>
				</div>
			</div>
			<div className='second-block'>
				<div>
					<h1>NICE TO MEET YOU</h1>
					<h4> and welcome!</h4>
				</div>

				<p>{name}</p>
				<h3>you are {age} years old</h3>
				<div>{identity}</div>
				<div>
					<h3>your purpose is :{purpose}</h3>
				</div>
				<div>
					<p>Your profile is ready!</p>
					<p>ENJOY YOUR TIME</p>
					<button type='submit'>Lets start!</button>
				</div>
			</div>
		</form>
	)
}
export default UserForm
