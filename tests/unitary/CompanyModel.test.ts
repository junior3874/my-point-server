import CompanyStore from "../../src/models/company/companyStore";

import CreateCompanyDbMock from "../mocks/CreateCompanyDbMock";
import CompanyServiceSupportStoreDbMock from '../mocks/CompanyServiceSupportStoreDbMock'
import CompanyServiceSupportStore from '../../src/models/company/companyServiceSupportStore'

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
     
      expect(err).toThrow("company already exist");
    }
  });
});

describe("company create user support", () => {

  const mockedDB = new CompanyServiceSupportStoreDbMock();
  const companyServiceSupportStore = new CompanyServiceSupportStore(mockedDB);
  it("it a company create ServiceSupport", async () => {
      const response = await companyServiceSupportStore.execute({name: "testing", rg: 508371946, password: "password", function_id: 1, companyId: 1, cpf: 53060329826})
      
   
      expect(response).toStrictEqual({name: "testing", rg: 508371946, password: "password", function_id: 1, companyId: 1, cpf: 53060329826})
    })

    it("it NOT a company create ServiceSupport, because rg has registred", async () => {
      await companyServiceSupportStore.execute({name: "testing", rg: 508371947, password: "password", function_id: 1, companyId: 1, cpf: 53060329826})
      try{
      await companyServiceSupportStore.execute({name: "testing", rg: 508371947, password: "password", function_id: 1, companyId: 1, cpf: 53060329826})
      }catch(err){
        expect(err).toThrow("Suport has exist");
      }

    })
})
