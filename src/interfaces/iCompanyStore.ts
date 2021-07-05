import Company from "../entity/Company";

export default interface ICompanyStore {
  execute(data: Company): Promise<Company> | Error;
}
