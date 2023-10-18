# API
The backend API has 3 endpoints, createLink to get the link for the apply page once the hiring manager posts a job listing, redact to process the cv/resume and send it to the hiring manager when someone applies to the job and sendReply to send a reply to the applicant when the hiring manager has decided with whom to get an interview.
Since at this point we don't have a database yet we have to store information in another way, our solution for that is to store information about the job posting in the link so that we know where to send something based on the link.

<br><img src="https://github.com/Jeroenvh99/Unbiased_workingrepo/blob/general_backend/Flowchart%20backend.png"/><br>

## createLink
After the hiring manager fills in all the details for the job listing on the website a request goes out to the backend to generate a link for the vacancy, this link consists of the hiring manager's email address and the jobtitle. For security reasons the link gets sent to the provided email.

## redact
After the applicant has uploaded their cv a statusmessage gets sent back to the frontend to let the applicant know that their upload was successful and that their cv is being processed.
After all the processing the unbiased cv is sent to the hiring manager with the applicant in bcc so that both parties don't know the other's email address.

## sendReply
When the hiring manager clicks on one of the links in the email with the application a reply is sent from the backend to the applicant. The emailaddress of the applicant and the emailaddress of the hiring manager have to be encrypted in that link so that the backend can send the email to the correct emailaddress and include the emailaddress of the hiring manager in the email so that the applicant can schedule an interview.
