/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   MaritalStatus.ts                                   :+:    :+:            */
/*                                                     +:+                    */
/*   By: mstegema <mstegema@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2023/10/18 15:42:15 by mstegema      #+#    #+#                 */
/*   Updated: 2023/10/18 17:07:26 by mstegema      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

export function redactMaritalStatus(cv:string)
{
	const maritalStatus = /(\bmarital status\b|\bmarital\b|\bmarriage\b)[:.,;]?[^,.:;]*\s/gi
	cv = cv.replace(maritalStatus, 'Marital status: redacted\n');

	return (cv);
}
