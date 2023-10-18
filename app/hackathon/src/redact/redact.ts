import { replaceGender } from './gender';
import { redactContacts } from './contacts';
import { redactOther } from './other';
import { redactMaritalStatus } from './maritalStatus';
import { pluralize_verbs } from './pluralizeVerbs';
import { redactNationality } from './nationality';
import { changeCopulas } from './copulas';

export function redact(cv:string, name:string)
{
    if (cv.indexOf(" ") > 50)
    {
        throw new Error("Tokenization Error!")
    }
    cv = redactContacts(cv);
    cv = changeCopulas(cv);
    cv = pluralize_verbs(cv);
    cv = replaceGender(cv);
	cv = redactNationality(cv);
	cv = redactMaritalStatus(cv);
    cv = redactOther(cv, name);

	return (cv);
}
