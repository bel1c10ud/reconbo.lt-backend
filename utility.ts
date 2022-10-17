import type { RiotTokenResponseType } from "./type";

export function GetRiotTokenFromURI(uri: string): Partial<RiotTokenResponseType> {
  let riotToken: Partial<RiotTokenResponseType> = {};
  const requestedDate = ( new Date() ).toISOString();

  const paramsStr = uri.split('#')[1];
  const params = paramsStr.split('&'); 

  params.forEach((el: string) => {
    const [key, value] = el.split('=');
    const newObj: object = { ...riotToken, ...{ [key]: value } };
    riotToken = Object.assign({}, newObj);
  })

  return { ...riotToken, 'requestedDate': requestedDate };
}