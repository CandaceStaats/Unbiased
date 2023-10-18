import '../App.css';
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function Apply() {
	
	const [isSuccess, setIsSuccess] = useState(true)
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [cv, setCv] = useState(null)
	const [nickName, setNickName] = useState("")
	const [profile, setProfile] = useState("")
	const [career, setCareer] = useState("")
	const [work, setWork] = useState(false)
	const [skills, setSkills] = useState(false)
	const [certificates, setCertificates] = useState(false)
	const [education, setEducation] = useState(false)
	const [achivements, setAchivements] = useState(false)
	const [jobTitle, setJobTitle] = useState("Job title")
	const [companyName, setCompanyName] = useState("Company name")
	const [isNameActive, setIsNameActive] = useState(false)
	const [isEmailActive, setIsEmailActive] = useState(false)
	const [isNickNameActive, setIsNickNameActive] = useState(false)
	const [isProfileActive, setIsProfileActive] = useState(false)
	const [isCareerActive, setIsCareerActive] = useState(false)
	const [isWorkActive, setIsWorkActive] = useState(false)
	const [isSkillsActive, setIsSkillsActive] = useState(false)
	const [isCertificatesActive, setIsCertificatesActive] = useState(false)
	const [isEducationActive, setIsEducationActive] = useState(false)
	const [isAchivementsActive, setIsAchivementsActive] = useState(false)

	let {jobToken} = useParams()
	useEffect(() => {
		console.log(jobToken)
		axios.get(`https://localhost:3333/apply/${jobToken}`)
		.then(res => {
			console.log(res)
			setJobTitle(res.title) // adapt name to match backend
			setCompanyName(res.name) // adapt name to match backend
		})
		.catch(err => {
		setIsSuccess(false) // set to (false) to show the form, else set to (true) to hide the form
		})
	});

	function onFormSubmit(e){
		e.preventDefault();
	if (name === "" || email === "" || cv === null)
	{
		console.log("please fill in all the fields")
	}
		let formUpload={
			nickName: nickName,
			profile: profile,
			career: career,
			work: work,
			skills: skills,
			certificates: certificates,
			education: education,
			achivements: achivements
		}
		axios.post(`https://localhost:3333/apply/form`, { formUpload })
			.then(res => {
				console.log(res)
				console.log(res.data)
			})
			.catch(err => {
			})
	};

	function onSubmit(e){
		e.preventDefault();
	if (name === "" || email === "" || cv === null)
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
			<form onSubmit={e => {onFormSubmit(e)}}>
				<div className={`ID3_applicant input-containe ${isNickNameActive ? 'active' : ''}`}>
					<input
					className="input-place"
					type="text"
					onFocus={() => setIsNickNameActive(true)}
					onBlur={() => setIsNickNameActive(false)}
					onChange={(e) => setNickName(e.target.value)}
					required
					/>
					<label>Nick name</label>
				</div>
				<div className={`ID4_applicant input-containe ${isProfileActive ? 'active' : ''}`}>
					<input
					className="input-place"
					type="text"
					onFocus={() => setIsProfileActive(true)}
					onBlur={() => setIsProfileActive(false)}
					onChange={(e) => setProfile(e.target.value)}
					required
					/>
					<label>Profile - Personal description</label>
				</div>
				<div className={`ID5_applicant input-containe ${isCareerActive ? 'active' : ''}`}>
					<input
					className="input-place"
					type="text"
					onFocus={() => setIsCareerActive(true)}
					onBlur={() => setIsCareerActive(false)}
					onChange={(e) => setCareer(e.target.value)}
					required
					/>
					<label>Career Profile</label>
				</div>
				<div className={`ID6_applicant input-containe ${isWorkActive ? 'active' : ''}`}>
					<input
					className="input-place"
					type="text"
					onFocus={() => setIsWorkActive(true)}
					onBlur={() => setIsWorkActive(false)}
					onChange={(e) => setWork(e.target.value)}
					required
					/>
					<label>Work Experience</label>
				</div>
				<div className={`ID7_applicant input-containe ${isSkillsActive ? 'active' : ''}`}>
					<input
					className="input-place"
					type="text"
					onFocus={() => setIsSkillsActive(true)}
					onBlur={() => setIsSkillsActive(false)}
					onChange={(e) => setSkills(e.target.value)}
					required
					/>
					<label>Skills</label>
				</div>
				<div className={`ID8_applicant input-containe ${isCertificatesActive ? 'active' : ''}`}>
					<input
					className="input-place"
					type="text"
					onFocus={() => setIsCertificatesActive(true)}
					onBlur={() => setIsCertificatesActive(false)}
					onChange={(e) => setCertificates(e.target.value)}
					required
					/>
					<label>Certificates</label>
				</div>
				<div className={`ID9_applicant input-containe ${isEducationActive ? 'active' : ''}`}>
					<input
					className="input-place"
					type="text"
					onFocus={() => setIsEducationActive(true)}
					onBlur={() => setIsEducationActive(false)}
					onChange={(e) => setEducation(e.target.value)}
					required
					/>
					<label>Education</label>
				</div>
				<div className={`ID10_applicant input-containe ${isAchivementsActive ? 'active' : ''}`}>
					<input
					className="input-place"
					type="text"
					onFocus={() => setIsAchivementsActive(true)}
					onBlur={() => setIsAchivementsActive(false)}
					onChange={(e) => setAchivements(e.target.value)}
					required
					/>
					<label>Achivements</label>
				</div>
			</form>
		</div>}
	 </div>
  );
}

export default Apply;
