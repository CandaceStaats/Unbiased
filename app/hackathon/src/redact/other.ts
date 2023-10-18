/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   other.ts                                           :+:    :+:            */
/*                                                     +:+                    */
/*   By: mstegema <mstegema@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: Invalid date        by               #+#    #+#                 */
/*   Updated: 2023/10/18 17:17:25 by mstegema      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import nlp from 'compromise';

export function redactOther(text: string, fullName: string): string {
	let doc = nlp(text);

	const pronounMap: Record<string, string> = {
		he: 'they',
		she: 'they',
		him: 'them',
		her: 'them',
		his: 'their',
		hers: 'their',
		himself: 'themself',
		herself: 'themself',
	};

	const possesivePronounMap: Record<string, string> = {
		her: 'their',
		his: 'their',
		hers: 'their',
	};

//	Personal info
	doc.match(fullName).forEach((match) => {
		match.replace('The candidate');
	});

	let names:string[] = fullName.split(" ");
	names.forEach(name => {
		doc.match(name).forEach((match) => {
			match.replace('The candidate');
		});
	});

// Location
	doc.match('#Country').forEach((match) => {
		match.replace('[Country]');
	});
	doc.match('#Region').forEach((match) => {
		match.replace('[Region]');
	});
	doc.match('#City').forEach((match) => {
		match.replace('[City]');
	});
	doc.match('#Address').forEach((match) => {
		match.replace('[Address]');
	});

// Pronouns (gender)
// doc.match('#Pronoun #Copula').match('was').forEach((match) => {
// 	match.replace('were');
// });

doc.match('#Pronoun !#Noun').match('#Pronoun').forEach((match) => {
	const pronoun = match.text().toLowerCase();
	if (pronounMap[pronoun]) {
		match.replace(pronounMap[pronoun]);
	}
});
doc.match('#Pronoun #Noun').match('#Pronoun').forEach((match) => {
	const pronoun = match.text().toLowerCase();
	if (possesivePronounMap[pronoun]) {
		match.replace(possesivePronounMap[pronoun]);
	}
});
// doc.match('#Pronoun #Verb').verbs().toPastTense()

// Dates
		// working on showing timespan instead of years
	// doc.match('#Year * #Year').forEach((match) => {
	// 	match.replace('Year');
	// });

doc.match('#Year').forEach((match) => {
	match.replace('Year');
});

// Contact information
	doc.emails().replace('Redacted Email address');

return doc.text();
}
