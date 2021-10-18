import { Server, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      task: Model,
    },

    seeds(server) {
      server.db.loadData({
        tasks: [
          { id: "1", content: "First Task" },
          { id: "2", content: "Second Task" },
          { id: "3", content: "Third Task" },
        ],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/tasks", () => {
        return this.schema.all("task");
      });

      this.post("/tasks", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("task", data);
      });
    },
  });
  return server;
}
