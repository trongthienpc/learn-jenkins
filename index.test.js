const request = require("supertest");
const app = require("./index");

describe("Test ứng dụng Express", () => {
  it("Kiểm tra phản hồi từ route '/'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, world!");
  });
});
