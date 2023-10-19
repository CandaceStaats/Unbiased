const base64url = require("base64url")

export function makeURL(company_name:string, title:string, email:string) {
	const encoded = base64url(company_name + '_' + title + '_' + email);
	const link = 'www.get-unbiased.com/applying/' + encoded;
	return (link);
}
