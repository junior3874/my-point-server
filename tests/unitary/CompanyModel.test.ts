import CompanyStore from "../../src/models/company/companyStore";

import CreateCompanyDbMock from "../mocks/CreateCompanyDbMock";

describe("create company", () => {
  const mockedDB = new CreateCompanyDbMock();
  const companyStore = new CompanyStore(mockedDB);

  it("it a create company", async () => {
    const response = await companyStore.execute({
      name: "Denver",
    });

    expect(response).toBe("Denver");
  });

  it("it DO NOT a create company, because this name has existing", async () => {
    await companyStore.execute({ name: "Denver" });

    try {
      await companyStore.execute({
        name: "Denver",
      });
    } catch (err) {
      console.log(err, "olha só");
      expect(err).toThrow("company already exist");
    }
  });
});
