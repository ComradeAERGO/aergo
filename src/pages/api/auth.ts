import { randomBytes } from 'crypto';
import { config } from '../../../lib/config';
import { scopes } from '../../../lib/scopes';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { AuthorizationCode } from 'simple-oauth2';

export const randomString = () => randomBytes(4).toString(`hex`);

export default async (req: any, res: any) => {
  const { host } = req.headers;
  const url = new URL(`https://${host}/${req.url}`);
  const urlParams = url.searchParams;
  const provider = urlParams.get(`provider`) as any;

  const client = new AuthorizationCode(config(provider));
  const authorizationUri = client.authorizeURL({
    redirect_uri: `https://${host}/api/callback?provider=${provider}`,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    scope: scopes[provider],
    state: randomString(),
  });

  // and get redirected to Github for authorisation
  res.writeHead(301, { Location: authorizationUri });
  res.end();
};
