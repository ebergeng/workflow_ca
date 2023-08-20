import { login } from "./login";
import LocalStorageMock from "../../mocks/localStorage.mock";

const key = "token";
const token = "12345";

const USER_DATA = {
  id: 1,
  email: "test@test.com",
  accessToken: "1234",
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(USER_DATA),
});

beforeAll(() => {
  global.localStorage = new LocalStorageMock();
  localStorage.clear();
  global.fetch = mockFetchSuccess;
});

describe("login", () => {
  it("returns a user", async () => {
    const USER = await login({});
    expect(USER).toEqual(USER_DATA);
  });

  it("saves token to localStorage", () => {
    localStorage.setItem(key, token);
    expect(localStorage.getItem(key)).toEqual(token);
  });
});
