import { createRouter } from "@hattip/router";
import { renderPage } from "vike/server";

const app = createRouter();

app.use(async (context) => {
  const { httpResponse } = await renderPage({
    urlOriginal: context.url.toString(),
  });
  const { body, statusCode, headers } = httpResponse;
  return new Response(body, {
    status: statusCode,
    headers: headers,
  });
});

export default app.buildHandler();
