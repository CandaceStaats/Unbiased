# API
The backend API has 3 endpoints, createLink to get the link for the apply page once the hiring manager posts a job listing, redact to process the cv/resume and send it to the hiring manager when someone applies to the job and sendReply to send a reply to the applicant when the hiring manager has decided with whom to get an interview.
Since at this point we don't have a database yet we have to store information in another way, our solution for that is to store information about the job posting in the link so that we know where to send something based on the link.

<br><img src="https://github.com/Jeroenvh99/Unbiased_workingrepo/blob/general_backend/Flowchart%20(Applicant%20Perspective).png"/><br>

## createLink
After the hiring manager fills in all the detail for the job listing on the website a request goes out to the backend to generate a link for the vacancy, this link consists of the hiring manager's emailaddress and the jobtitle. For security reasons the link gets sent to the provided email.

## redact
After the applicant has uploaded their cv a statusmessage gets sent back to the frontend to let the applicant know that their upload was successful and that their cv is being processed.
After all the processing and sending their unbiased cv to the hiring manager another statusmessage gets sent back to the frontend to let the applicant know that all went well.

## sendReply
When the hiring manager clicks on one of the links in the email with the application a reply is sent from the backend to the applicant.

# Future ideas
Ideally the sendReply endpoint would later be replaced by sendEmail to send an email from the hiring manager to the applicant or vice versa for improved user experience, since we don't have the time now to build an emailclient into the backend that's something for later, but how it works has been documented.

## sendEmail
When the hiring manager replies to the email with the application the backend receives it at this endpoint where the emailaddress of the applicant is decrypted from the subject and the email gets forwarded to that address. The email that the applicant receives has the emailaddress of the hiring manager encrypted in the subject, so that for communication the other way we can use the same endpoint.
