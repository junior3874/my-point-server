import Company from "../../src/entity/Company";
import ICreateCompanyRepositoryPg from "../../src/interfaces/ICreateCompanyRepository";

export default class CreateCompanyDbMock implements ICreateCompanyRepositoryPg {
  database = new Map();
  async findOne(data: Company) {
    const { name } = data;
    const company = this.database.get(name);
    return company;
  }

  async create(data: Company) {
    const { name } = data;
    const company = this.database.set(name, name).get(name);

    return company;
  }
}
