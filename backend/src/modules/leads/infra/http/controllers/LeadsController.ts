import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateLeadService from '@modules/leads/services/CreateLeadService';

/*
methods to implement:
[X]create
[]update
[]show
[]index
[]delete
*/

export default class LeadsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      usdot,
      entityType,
      operatingStatus,
      companyName,
      fullName,
      primaryAddress,
      state,
      zipCode,
      altAddress,
      altState,
      altZipCode,
      phoneNumber,
      powerUnits,
      drivers,
      mcs150FormDate,
      operationClassification,
      carrierOperation,
      cargoCarried,
      email,
      bipdInsuranceRequired,
      cargoInsuranceRequired,
      bondInsuranceRequired,
      insuranceCarrier,
      policySurety,
      postedDate,
      coverageFrom,
      coverageTo,
      effectiveDate,
      cancellationDate,
    } = request.body;

    const createLead = container.resolve(CreateLeadService);

    const lead = await createLead.execute({
      usdot,
      entityType,
      operatingStatus,
      companyName,
      fullName,
      primaryAddress,
      state,
      zipCode,
      altAddress,
      altState,
      altZipCode,
      phoneNumber,
      powerUnits,
      drivers,
      mcs150FormDate,
      operationClassification,
      carrierOperation,
      cargoCarried,
      email,
      bipdInsuranceRequired,
      cargoInsuranceRequired,
      bondInsuranceRequired,
      insuranceCarrier,
      policySurety,
      postedDate,
      coverageFrom,
      coverageTo,
      effectiveDate,
      cancellationDate,
    });

    return response.json(lead);
  }
}
