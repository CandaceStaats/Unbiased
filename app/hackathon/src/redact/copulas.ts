/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   copulas.ts                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: mstegema <mstegema@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2023/10/18 17:41:11 by mstegema      #+#    #+#                 */
/*   Updated: 2023/10/18 17:46:36 by mstegema      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import nlp from 'compromise';

export function changeCopulas(text: string) {
	let doc = nlp(text);

	const verbsMap: Record<string, string> = {
		was: 'were',
		is: 'are',
		has: 'have',
	};

	doc.match('#Pronoun #Copula').match('#Copula').forEach((match) => {
		const copula = match.text().toLowerCase();
		if (verbsMap[copula]) {
			match.replace(verbsMap[copula]);
		}
	});

return doc.text();
}
