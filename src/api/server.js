import { Server, Model, Factory } from "miragejs";
import { nanoid } from "@reduxjs/toolkit";
import faker from "faker";

new Server({
  models: {
    todo: Model,
  },
  factories: {
    todo: Factory.extend({
      id() {
        return nanoid();
      },
      text() {
        return faker.lorem.sentence();
      },
      completed() {
        return faker.random.boolean();
      },
    }),
  },
  routes() {
    this.namespace = "api";

    this.get("/todos");
    this.get("/todos/:id");
    this.post("/todos", function (schema, request) {
      const attrs = JSON.parse(request.requestBody);
      return schema.todos.create({ id: nanoid(), ...attrs });
    });
    this.patch("/todos/:id");
    this.del("/todos/:id");
  },

  seeds(server) {
    server.createList("todo", 8);
    //console.log(server.db.dump());
  },
});
