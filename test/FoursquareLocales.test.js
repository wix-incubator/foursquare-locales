'use strict'

import {expect} from 'chai'
import * as FoursquareLocales from '../src/FoursquareLocales'

describe('FoursquareLocales', () => {
	describe('bestDomainFor', () => {
		it ('gives first priority to language-based domains', () => {
			expect(FoursquareLocales.bestDomainFor('fr_FR')).to.equal('fr.foursquare.com')
		})
		
		it ('falls back to English (United States)', () => {
			expect(FoursquareLocales.bestDomainFor('xx_XX')).to.equal('foursquare.com')
		})
	})
	
	describe('bestPageUrlFor', () => {
        describe('main page', () => {
            it ('supports English (United States)', () => {
                expect(FoursquareLocales.bestPageUrlFor({
                    locale: 'en_US',
                    venueId: '1234'
                })).to.equal('https://foursquare.com/v/1234')
            })
            
            it ('supports other Foursquare-supported locales', () => {
                expect(FoursquareLocales.bestPageUrlFor({
                    locale: 'fr_FR',
                    venueId: '1234'
                })).to.equal('https://fr.foursquare.com/v/1234')
            })
            
            
            it ('makes best-effort in case of unsupported locales', () => {
                expect(FoursquareLocales.bestPageUrlFor({
                    locale: 'xx_XX',
                    venueId: '1234'
                })).to.equal('https://foursquare.com/v/1234?locale=xx')
            })
        })

        describe('tabs', () => {
            it ('supports English (United States)', () => {
                expect(FoursquareLocales.bestPageUrlFor({
                    locale: 'en_US',
                    venueId: '1234',
                    tab: 'menu'
                })).to.equal('https://foursquare.com/v/1234/menu')
            })
            
            it ('supports other Foursquare-supported locales', () => {
                expect(FoursquareLocales.bestPageUrlFor({
                    locale: 'fr_FR',
                    venueId: '1234',
                    tab: 'menu'
                })).to.equal('https://fr.foursquare.com/v/1234/menu')
            })
            
            
            it ('makes best-effort in case of unsupported locales', () => {
                expect(FoursquareLocales.bestPageUrlFor({
                    locale: 'xx_XX',
                    venueId: '1234',
                    tab: 'menu'
                })).to.equal('https://foursquare.com/v/1234/menu?locale=xx')
            })
        })
	})
})
