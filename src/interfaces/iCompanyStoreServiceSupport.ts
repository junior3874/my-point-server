import ServiceSupport from "../entity/ServiceSupport";

export default interface  iCompanyCreateServiceSupport {
    findOne(rg : number ): Promise<ServiceSupport> | undefined;
    create(data: ServiceSupport): Promise<ServiceSupport>;
}