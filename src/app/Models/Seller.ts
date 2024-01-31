import { User } from "./user";

export class Seller {
    user:User
    contactInfo: string;
    companyName: string;
    companyType: string;
    gstNumber: string;
    licenceNumber: string;
    address: string;
    approvalStatus: string;
  
    constructor(
      user: User,
      contactInfo: string,
      companyName: string,
      companyType: string,
      gstNumber: string,
      licenceNumber: string,
      address: string,
      approvalStatus: string
    ) {
      this.user = user;
      this.contactInfo = contactInfo;
      this.companyName = companyName;
      this.companyType = companyType;
      this.gstNumber = gstNumber;
      this.licenceNumber = licenceNumber;
      this.address = address;
      this.approvalStatus = approvalStatus;
    }
  }
  