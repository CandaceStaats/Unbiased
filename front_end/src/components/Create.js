import '../App.css';
import {useState} from 'react'
import axios from 'axios';

function Create() {
	const[companyName, setCompanyName]=useState("")
	const[jobTitle, setJobTitle]=useState("")
	const[companyEmail, setCompanyEmail]=useState("")
	const[isCompanyNameActive, setIsCompanyNameActive]=useState(false)
	const[isJobTitleActive, setIsJobTitleActive]=useState(false)
	const[isCompanyEmailActive, setIsCompanyEmailActive]=useState(false)
	const [isSuccess, setIsSuccess] = useState(true)


	function onSubmit(e){
		e.preventDefault();
		let jobPost={
			companyName: companyName,
			jobTitle: jobTitle,
			companyEmail: companyEmail,
		};
		axios.post(`https://jsonplaceholder.typicode.com/users`, { jobPost })
      		.then(res => {
        		console.log(res)
       			console.log(res.data)
			})
			.catch(err => {
			setIsSuccess(false)
		})

		console.log(jobPost);
	}

  return (
    <div className="inner-contaOne">
	<div className="inner-container">
	<h2 className="apply-header2">Unbiased Interface for Hiring Managers</h2>
	  <form onSubmit={e => {onSubmit(e)}}>
	  <div className={`ID1 input-containe ${isCompanyNameActive ? 'active' : ''}`}>
	  <input
			className="input-place"
			type="text"
			onFocus={() => setIsCompanyNameActive(true)}
			onBlur={() => setIsCompanyNameActive(false)}
			onChange={(e) => setCompanyName(e.target.value)}
			required
			/>
			<label>Company name</label>
		</div>
	  <div className={`ID2 input-containe ${isJobTitleActive ? 'active' : ''}`}>
	  <input
			className="input-place"
			type="text"
			onFocus={() => setIsJobTitleActive(true)}
			onBlur={() => setIsJobTitleActive(false)}
			onChange={(e) => setJobTitle(e.target.value)}
			required
			/>
			<label>Job title</label>
		</div>
		<div className={`ID2 input-containe ${isCompanyEmailActive ? 'active' : ''}`}>
		<input
				className="input-place"
				type="text"
				onFocus={() => setIsCompanyEmailActive(true)}
				onBlur={() => setIsCompanyEmailActive(false)}
				onChange={(e) => setCompanyEmail(e.target.value)}
				required
				/>
				<label>Email hiring manager</label>
			</div>
	  <button className="submit-button" type="submit">Submit</button>
	  </form>
	  {isSuccess ? <h1></h1> : <hi>Something went wrong</hi>}
    </div>
	</div>
  );
}

export default Create;

// {} []

