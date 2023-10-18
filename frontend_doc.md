# DOCUMENTATION - Design & Front end

We have two flows (and thus pages):
	- for the HR-manager (url .../create)
## FLOW: 
Hiring manager opens the page to create the link for the application.
The person will need to fill in some info to be able to generate a link. There will be a “Submit” button with a capcha pop up,
after which the info is shared with back-end team that will create the URL.
When the link has been successfully created it will be sent to the hiring manager’s email.
## INFO REQUIRED ON THE PAGE: 
 (to be filled) Company name, Email of the hiring manager, job title, and submit button.

	- for the applicant (url .../apply)
## FLOW:
The applicant opens the page and first see’s an intro with the company name + job title (to make sure he’s applying for the right job).
Then the person will be asked to fill in there full name + their email (this info will also be used to “scan” the CV with this info to be able to hide/remove it),
and their email will be used for the communication between the HR-manager and the applicant (email comms will always go through the unbiased email system, hiding their emails).
Then they’ll need to upload their CV in PDF format. They’ll be able to click the “Submit” button with a capcha pop up for their application to be processed and sent to the HR-manager.
Then the applicant will see a “success” pop up for a “fail” pop up, to indicate if all went well.
In case the applicant can't/doesn't want to upload its CV in PDF format, there is the possibility to fill out a form with a set of fields -that only appears upon request- (nickname, profile, career profile, work experience, skills, certificates, education, achievements).
## INFO REQUIRED ON THE PAGE:
 (displayed): Company name and job title (filled in based on the url’s encryption).
 (to be filled): Full name, email of the applicant, upload CV button, and submit button.


# Approved design mockups on Figma
https://www.figma.com/file/Aev5dxSM8k9dhnT6FHHgoi/adaptive-test?type=design&node-id=0%3A1&mode=design&t=rA7gcQyN0nrCu7me-1