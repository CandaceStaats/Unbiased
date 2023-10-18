/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   nationality.ts                                     :+:    :+:            */
/*                                                     +:+                    */
/*   By: mstegema <mstegema@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2023/10/18 16:30:41 by mstegema      #+#    #+#                 */
/*   Updated: 2023/10/18 16:37:18 by mstegema      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

export function redactNationality(cv:string)
{
	// const nationality = /nationality[:.,;]?[^,.:;]*/gi;
	const nationality = /nationality:\s\w+/gi
	cv = cv.replace(nationality, 'Nationality: redacted');

	return (cv);
}
