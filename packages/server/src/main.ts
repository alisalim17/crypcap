import "reflect-metadata";
import { buildSchema } from "type-graphql";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import http from "http";
import { StatsResolver } from "./graphql/resolvers/StatsResolver";

const PORT = process.env.PORT || 4000;

export async function main() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [StatsResolver],
      validate: false,
    }),
  });

  await server.start();

  // Mount Apollo middleware here.
  server.applyMiddleware({ app, path: "/graphql" });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}
