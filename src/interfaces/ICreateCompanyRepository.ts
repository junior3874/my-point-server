import Company from "../entity/Company";

export default interface ICreateCompanyRepositoryPg {
  findOne(data: Company): Promise<Company> | void;
  create(data: Company): Promise<Company>;
}
