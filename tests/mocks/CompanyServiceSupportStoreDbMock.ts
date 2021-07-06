import ServiceSupport from "../../src/entity/ServiceSupport";
import iCompanyStoreServiceSupport from "../../src/interfaces/iCompanyStoreServiceSupport";


export default class CompanyServiceSupportStoreDbMock implements iCompanyStoreServiceSupport {
  database = new Map();
  async findOne(rg: number) {
    const user = this.database.get(rg);
    
    return user;
  }

  async create(data: ServiceSupport) {
    const { name, cpf, rg, companyId, function_id, password} = data;
    const user = this.database.set(rg, { name, cpf, rg, companyId, function_id, password}).get(rg);
    return user;
  }
}
