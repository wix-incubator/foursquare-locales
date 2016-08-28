'use strict'

import * as Foursquare from './Foursquare'


export const bestDomainFor = (locale) => {
	const language = locale.substr(0, 2)
	const languageDomain = Foursquare.languageDomains[language]
	if (languageDomain) {
		return languageDomain
	}
	
	return Foursquare.languageDomains['en']
}

export const bestPageUrlFor = ({locale, venueId}) => {
	const language = locale.substr(0, 2)
	const domain = Foursquare.languageDomains[language]
	if (domain) {
		return `https://${domain}/v/${venueId}`
	} else {
		return `https://${Foursquare.languageDomains['en']}/v/${venueId}?locale=${language}`
	}
}