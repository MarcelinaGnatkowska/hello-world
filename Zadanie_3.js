import { serve } from "https://deno.land/std@0.95.0/http/server.ts";
const server = serve({ port: 4000 });
console.log('localhost: 4000');
for await (const request of server) {
  request.headers.get("user-agent");
  request.respond({ body: 'Hello Wordl!' });
}
