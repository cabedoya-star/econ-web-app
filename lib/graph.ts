
import { Client } from '@microsoft/microsoft-graph-client';
import 'isomorphic-fetch';

export function graphClient(accessToken: string) {
  return Client.init({
    authProvider: (done) => {
      done(null, accessToken);
    }
  });
}

export async function listSharePointItems(accessToken: string) {
  const siteId = process.env.GRAPH_SITE_ID!;
  const listId = process.env.GRAPH_LIST_ID!;
  const client = graphClient(accessToken);

  const res = await client
    .api(`/sites/${siteId}/lists/${listId}/items`)
    .expand('fields')
    .top(25)
    .get();

  return res.value || [];
}

export async function createSharePointItem(accessToken: string, fields: Record<string, any>) {
  const siteId = process.env.GRAPH_SITE_ID!;
  const listId = process.env.GRAPH_LIST_ID!;
  const client = graphClient(accessToken);

  const payload = { fields };
  const res = await client
    .api(`/sites/${siteId}/lists/${listId}/items`)
    .post(payload);

  return res;
}
