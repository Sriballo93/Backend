const request = require("supertest");
const { Builder } = require("../builders/birras.builders");
// const app = require("../src/api/controllers/birras.controller");

const server = require("../index");
// const BirrasRoutes = require("../src/api/routes/birras.routes");
const { connect, getUri, closeDb } = require("../src/db");

beforeAll(async () => {
  const uri = await getUri();
  await connect({ uri });
});

afterAll(async () => {
  await closeDb();
});
describe("POST /birras", () => {
  test("should store a new birra", async () => {
    const birra = Builder.birra();

    const response = await request(server)
      .post("/birras")
      .send(birra)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201);

    const { _id, ...birraStored } = response.body;
    expect(birraStored).toEqual(birra);
    expect(_id).toBeTruthy();
  });
});

describe("GET /birras", () => {
  test("should get all birras", async () => {
    const response = await request(server).get("/birras");
    expect(700);
    expect(response.body);
    expect(response.body.length);
  });
});
describe("PATCH /birras/:id", () => {
  test("should update birra", async () => {
    const birraUpdate = { nombre: "Estrella Galicia" };
    const response = await request(server)
      .patch("/birras/:id")
      .send(birraUpdate);
    expect(200);
    expect(response.body);
    expect(response.body.length);
  });
});

describe("DELETE /birras/:id", () => {
  test("should update birra", async () => {
    const response = await request(server).delete("/birras/:id");
    expect(203);
    expect(response.body);
    expect(response.body.length);
  });
});
