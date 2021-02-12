#!/usr/bin/env node 

import { data }  from "./data.mjs";

//const {data} = data
//console.log (data)

//console.log(data)

const { demographics:{name, label, phone,}} = data
const {location:{postalCode, city, countryCode, region}} = data
const {employment:{company, position, website, startDate, endDate, Wsummary, Wsummary2, highlights}} = data
const {educationA:{institutionA, area, studyTypeA,startDateA}} = data
const {educationB:{institutionB, studyTypeB, startDateB, EdendDateB}} = data
const {skills:{languages}} = data

//console.log (name)
//console.log(label)
console.log(`Resume for ${name}`)

console.log(name)
console.log(label)
console.log(phone)
console.log(postalCode)
console.log(city)
console.log(countryCode)
console.log(region)
//console.log(summary)
//console.log(location)
console.log('\n')

console.log(company)
    console.log(position)
    console.log(website)
    console.log(`Dates of employment: ${startDate} - ${endDate}`)
    console.log('\n')
    console.log(`WORK SUMMARY`)
    console.log(`I ${Wsummary}. As a Housing Manager, I ${Wsummary2}`)
    console.log('\n')
    console.log(highlights)
console.log('\n')
console.log(`EDUCATION`)
    console.log(institutionA)
    console.log(studyTypeA),
    console.log(`Start date: ${startDateA}`)
console.log('\n')
    console.log(institutionB)
    console.log(`Degree earned ${studyTypeB}`)
    console.log(`${startDateB} to ${EdendDateB}`)
console.log('\n')
console.log (`SKILLS`)
    console.log(`Languages: ${languages}`)
