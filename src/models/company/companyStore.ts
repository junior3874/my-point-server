import ICreateCompanyRepositoryPg from "../../interfaces/ICreateCompanyRepository";

import Company from "../../entity/Company";
import ICompanyStore from "../../interfaces/iCompanyStore";

export default class CompanyStore implements ICompanyStore {
  constructor(private companyStoreDb: ICreateCompanyRepositoryPg) {}

  async execute(data: Company) {
    const { name } = data;

    const verifyCompany = await this.companyStoreDb.findOne({ name });
    if (verifyCompany) return new Error("company already exist");
    const createCompany = await this.companyStoreDb.create({ name });
    return createCompany;
  }
}
