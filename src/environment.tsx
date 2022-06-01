const env = process.env.REACT_APP_ENVIROMENT
let url:string
let wsUrl:string
let awsUrl:string
let googleApiKey:string
if (env === 'prod') {
  url = 'https://'
  wsUrl = 'wss://'
  awsUrl = 'https://'
  googleApiKey = ''
} else if (env === 'staging') {
  url = 'https:'
  wsUrl = 'wss://'
  awsUrl = 'https://'
  googleApiKey = ''
} else {
  url = 'http://localhost:3000'
  wsUrl = 'ws://localhost:3000'
  awsUrl = 'https://'
  googleApiKey = ''
}
export { url, wsUrl, googleApiKey, awsUrl }
