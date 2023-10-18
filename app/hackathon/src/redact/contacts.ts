export function redactContacts(cv:string)
{
	const linkedin = /https:\/\/(www\.)?linkedin\.com\S*/gi
	const twitter = /https:\/\/(www\.)?twitter\.com\S*/gi
	const facebook = /https:\/\/(www\.)?facebook\.com\S*/gi
	const instagram = /https:\/\/(www\.)?instagram\.com\S*/gi
	const github = /https:\/\/(www\.)?github\.com\S*/gi
	// const phoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
	const phoneNumberRegex = /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}/g;
	// const email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/gi;

	// Replace matched patterns with asterisks
	cv = cv.replace(linkedin, '********');
	cv = cv.replace(twitter, '********');
	cv = cv.replace(facebook, '********');
	cv = cv.replace(instagram, '********');
	cv = cv.replace(github, '********');
	cv = cv.replace(phoneNumberRegex, "*redacted number*");
	// cv = cv.replace(email, "*********");

	return (cv);
}
