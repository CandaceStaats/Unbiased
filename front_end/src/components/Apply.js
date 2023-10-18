import '../App.css';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function Apply() {
	  
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [cv, setCv] = useState(null)
	const [jobTitle, setJobTitle] = useState("Job title")
	const [companyName, setCompanyName] = useState("Company name")
	const [isNameActive, setIsNameActive] = useState(false)
	const [isEmailActive, setIsEmailActive] = useState(false)
	const [isNickName, setisNickName] = useState(false)
	const [isProfile, setisProfile] = useState(false)
	const [isCareer, setisCareer] = useState(false)
	const [isWork, setisWork] = useState(false)
	const [isSkills, setisSkills] = useState(false)
	const [isCertificates, setisCertificates] = useState(false)
	const [isEducation, setisEducation] = useState(false)
	const [isAchivements, setisAchivements] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	let {jobToken} = useParams()
	useEffect(() => {
		console.log(jobToken)
		axios.get(`api/get/${jobToken}`)
		.then(res => {
			setJobTitle(res.title)
			setCompanyName(res.name)
		})
		.catch(err => {
		setIsSuccess(false)
	})
	});

	function onSubmit(e){
		e.preventDefault();
	if (name == "" || email == "" || cv == null)
	{
		console.log("please fill in all the fields")
	}
		console.log(cv.size)
		if(cv.size/1024 > 5120){
			console.log("file too big")
			return
		}
		console.log("file was not too big")
		let cvUpload={
			name: name,
			email: email,
			cv: cv
		}
		axios.post(`https://jsonplaceholder.typicode.com/users`, { cvUpload })
		  		.then(res => {
		    		console.log(res)
		   			console.log(res.data)
				})
				.catch(err => {
				setIsSuccess(false)
				})
			};
	return (
		<div className="inner-contaOne">
		<div className="inner-container">
		<h2 className="apply-header">{jobTitle}</h2>
		<h2 className="apply-header2">{companyName}</h2>
		<form onSubmit={e => {onSubmit(e)}}>
		  <div className={`ID1_applicant input-containe ${isNameActive ? 'active' : ''}`}>
			<input
			  className="input-place"
			  type="text"
			  onFocus={() => setIsNameActive(true)}
			  onBlur={() => setIsNameActive(false)}
			  onChange={(e) => setName(e.target.value)}
			  required
			/>
			<label>Full name</label>
		  </div>
		  <div className={`ID2_applicant input-containe ${isEmailActive ? 'active' : ''}`}>
			<input
			  className="input-place"
			  type="text"
			  onFocus={() => setIsEmailActive(true)}
			  onBlur={() => setIsEmailActive(false)}
			  onChange={(e) => setEmail(e.target.value)}
			  required
			/>
			<label>E-mail</label>
		  </div>
		  <input type="file" accept="application/pdf" onChange={(e) => setCv(e.target.files[0])} required />
		  <button className="submit-button" type="submit">Submit</button>
		</form>
	</div>
		{isSuccess ? <h1></h1> :
		
		<div className="inner-container">
		<form>
			<div className={`ID1_applicant input-containe ${isNameActive ? 'active' : ''}`}>
				<input
				className="input-place"
				type="text"
				onFocus={() => setIsNameActive(true)}
				onBlur={() => setIsNameActive(false)}
				onChange={(e) => setName(e.target.value)}
				required
				/>
				<label>Nick name</label>
			</div>
		</form>
		</div>}
	 </div>
  );
}

export default Apply;
