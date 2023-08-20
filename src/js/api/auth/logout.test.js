import { logout } from "./logout";
import LocalStorageMock from "../../mocks/localStorage.mock";

const key = "token";
const token = "12345";

beforeAll(() => {
  global.localStorage = new LocalStorageMock();
  localStorage.setItem(key, token);
});

describe("logOut", () => {
  it("removes token from localStore", () => {
    logout();
    expect(localStorage.getItem(key)).toBeNull();
  });
});
