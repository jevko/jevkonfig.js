import {parseJevko} from './deps.js'

import {cjevkoBySchemaToValue} from './mod.js'
import { sjevkoToSchema } from './deps.js'

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

const schema = sjevkoToSchema(parseJevko(schemaStr))

console.assert(cjevkoBySchemaToValue(parsedJevko, schema).database['select columns'][1] === 'address')