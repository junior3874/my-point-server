import Company from "../../entity/Company";
import connection from "../connection";
import ICreateCompanyRepositoryPg from "../../interfaces/ICreateCompanyRepository";

export default class CreateCompanyRepository
  implements ICreateCompanyRepositoryPg
{
  async create(data: Company) {
    const { name } = data;
    const insertingCompany: Company = await connection("company")
      .insert({ name })
      .returning("name");

    return insertingCompany;
  }
  async findOne(data: Company) {
    const { name } = data;
    const insertingCompany: Company = await connection("company")
      .where({ name })
      .select("name");
    return insertingCompany;
  }
}
