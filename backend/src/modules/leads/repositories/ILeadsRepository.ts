import Lead from '../infra/typeorm/entities/Lead';
import ICreateLeadDTO from '../dtos/ICreateLeadDTO';

export default interface ILeadsRepository {
  create(data: ICreateLeadDTO): Promise<Lead>;
  save(lead: Lead): Promise<Lead>;
  delete(lead: Lead): Promise<void>;
  findById(id: string): Promise<Lead | undefined>;
  findByDOT(dot: string): Promise<Lead | undefined>;
  findAll(): Promise<Lead[]>;
}
