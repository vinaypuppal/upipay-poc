import url from 'url';

const URL = global.URL || url.URL;

export function getURL({ amount }) {
  const url = new URL(`upi://pay`);
  url.searchParams.append('pa', '9666517697@ybl');
  url.searchParams.append('pn', 'VinayPuppal');
  url.searchParams.append('cu', 'INR');
  // url.searchParams.append('tn', `Donation to coderplex from ${email}`);
  url.searchParams.append('am', amount);
  // url.searchParams.append('refUrl', `https://coderplex.org/donate`);
  return url.href;
}
