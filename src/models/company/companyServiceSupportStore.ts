import ServiceSupport from "../../entity/ServiceSupport";
import iCompanyCreateServiceSupport from "../../interfaces/iCompanyStoreServiceSupport";

export default class CompanyServiceSupportStore {
    constructor(private companyServiceSupportDb: iCompanyCreateServiceSupport){}

    async execute(data: ServiceSupport){

        const { name, cpf, rg, companyId, function_id, password } = data;
        const serviceSupportFind = await this.companyServiceSupportDb.findOne(rg);

        if(serviceSupportFind) return new Error("Suport has exist");    
        
        const serviceSupportInsert = await this.companyServiceSupportDb.create({ name, cpf,rg, companyId, function_id, password})
        return serviceSupportInsert
    }
}