import { load } from 'gapi';

const CLIENT_ID = '<your-client-id>';
const API_KEY = '<your-api-key>';
const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4'];
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

let gapiInitialized = false;
let gapiReadyResolve = null;
let gapiReadyPromise = new Promise((resolve) => {
  gapiReadyResolve = resolve;
});

async function initClient() {
  await load('client', 'v1');
  await gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  });
  gapiInitialized = true;
  gapiReadyResolve();
}

gapi.load('client:auth2', initClient);
