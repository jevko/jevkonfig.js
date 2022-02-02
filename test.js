import {parseJevko} from 'parsejevko.js'

import {jevkoToValue} from './mod.js'
import { jevkoToSchema } from 'jevkoschema.js'

const jevkoStr = `
- [last modified 1 April 2001 by John Doe]
owner [
  name [John Doe]
  organization [Acme Widgets Inc.]
]

database [
  - [use IP address in case network name resolution is not working]
  server [192.0.2.62]
  port [143]
  file [payroll.dat]
  select columns [[name][address][phone number]]
]
`

const schemaStr = `
owner [
  name [string]
  organization [string]
  object
]

database [
  - [use IP address in case network name resolution is not working]
  server [string]
  port [float64]
  file [string]
  select columns [[string]array]
  object
]
object
`

const parsedJevko = parseJevko(jevkoStr)

const schema = jevkoToSchema(parseJevko(schemaStr))

console.assert(jevkoToValue(parsedJevko, schema).database['select columns'][1] === 'address')