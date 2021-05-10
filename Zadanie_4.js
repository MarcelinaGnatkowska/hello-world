import { serve } from "https://deno.land/std@0.95.0/http/server.ts";
const names = ['Hero', 'Marcel', 'Karolina', 'Maja', 'Marcelina', 'Shawn', 'Ola','Ala','Marysia', 'Kasia'];
names.sort();
var asc = names.slice();
names.reverse();
var desc = names.slice();
const server = Deno.listen({ port: 4000 });
console.log('localhost: 4000');
for await (const conn of server) {
  (async () => {
    const httpConn = Deno.serveHttp(conn);
    for await (const requestEvent of httpConn) {
      console.log( `Your user-agent is:\n\n${requestEvent.request.headers.get(
        "user-agent",
      ) ?? "Unknown"}`);
      const body = "Tablica asc: "+asc + "\nTablica desc: "+desc;
      requestEvent.respondWith(new Response(body,{status: 200,}),);
    }
  })();
}

  
