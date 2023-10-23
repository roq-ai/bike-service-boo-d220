interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Service Manager', 'Bike Mechanic'],
  tenantName: 'Company',
  applicationName: 'Bike service booking online',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View personal information',
    'Edit personal information',
    'View company information',
    'Create a company',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/c56dbf93-8079-462d-bfe6-4b3478cbff70',
};
