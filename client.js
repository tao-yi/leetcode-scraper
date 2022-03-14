import { GraphQLClient } from "graphql-request";
import {
  authority,
  cookie,
  csrfToken,
  endpoint,
  origin,
  referer,
  userAgent,
} from "./env.js";

export const client = new GraphQLClient(endpoint, {
  headers: {
    "x-csrftoken": csrfToken,
    "content-type": "application/json",
    "user-agent": userAgent,
    origin: origin,
    referer,
    cookie,
    authority,
  },
});
