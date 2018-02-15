#!/usr/bin/env node
var creditsTo = require('credits-to')
var toCSV = require('array-to-csv')

creditsTo(function (err, credits) {
	if (err) return console.error(err)
	var npmCredits = credits.npm
	var output = []
	for (packageName in npmCredits) {
		var credit = npmCredits[packageName]
		if (!credit.versions) credit.versions = []
		if (!credit.licenses) credit.licenses = []
		output.push([credit.name, credit.description, credit.versions.join(';'), credit.licenses.join(';')])
	}
	console.log(toCSV(output))
})
