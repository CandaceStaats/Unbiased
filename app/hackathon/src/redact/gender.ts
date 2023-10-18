import mfn from './mfn.json';

export function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function findAndReplace(word:string)
{
	let find:string = word.toLocaleLowerCase();
	let returnValue:string = find;

	mfn.forEach(function (value){
		if (find == value.m || find == value.f)
			returnValue = value.n;
	});

	if (word == capitalizeFirstLetter(word))
		returnValue = capitalizeFirstLetter(returnValue);
	return(returnValue);
}

export function replaceGender(cv:string)
{
	let i = 0;
	while (i < cv.length && !cv.charAt(i).match(/[a-zA-Z]/))
		i++;
	let word = cv[i++];
	while (i < cv.length)
	{
		if (cv.charAt(i).match(/[a-zA-Z]/))
			word += cv.charAt(i);
		else
		{
			let replaceWord = findAndReplace(word);
			if (word != replaceWord)
			{
				let fix = 0;
				if (i > 3 && cv.charAt(i - word.length - 2) == "n"
					&& !(replaceWord.charAt(0).match(/aeiouAEIOU/)))
					fix = 2;
				let edit = cv.substring(0, i - word.length - fix);
				if (fix)
					cv = edit + " " + replaceWord + cv.substring(i);
				else
					cv = edit + replaceWord + cv.substring(i);
				let diff = 0;
				if (word.length > replaceWord.length)
					diff -= word.length - replaceWord.length;
				else if (word.length > replaceWord.length)
					diff += replaceWord.length - word.length;
				i += diff;
			}
			while (i < cv.length && !cv.charAt(i).match(/[a-zA-Z]/))
				i++;
			word = cv.charAt(i);
		}
		i++;
	}
	
	return(cv);
}
