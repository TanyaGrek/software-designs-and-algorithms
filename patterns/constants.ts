export const PACKAGE_TYPES = {
  PACKAGE: 'PACKAGE',
  LETTER: 'LETTER',
  OVERSIZE: 'OVERSIZE',
}

export const companyNames = {
  AIR_EAST_SHIPPER: 'Air East: Based in Atlanta',
  CHICAGO_SPRINT_SHIPPER: 'Chicago Sprint: Based in a suburb of Chicago',
  PACIFIC_PARCEL_SHIPPER: 'Pacific Parcel: Based in San Diego'
}
export const companies = [
  {
    id: 1,
    name: companyNames.AIR_EAST_SHIPPER, //default shipper
    price: {
      [PACKAGE_TYPES.PACKAGE]: 0.25,
      [PACKAGE_TYPES.LETTER]: 0.39,
      [PACKAGE_TYPES.OVERSIZE]: 0.25,
    },
    locales: [1, 2, 3]
  },
  {
    id: 2,
    name: companyNames.CHICAGO_SPRINT_SHIPPER,
    price: {
      [PACKAGE_TYPES.PACKAGE]: 0.20,
      [PACKAGE_TYPES.LETTER]: 0.42,
      [PACKAGE_TYPES.OVERSIZE]: null,
    },
    locales: [7, 8, 9]
  },
  {
    id: 3,
    name: companyNames.PACIFIC_PARCEL_SHIPPER,
    price: {
      [PACKAGE_TYPES.PACKAGE]: 0.19,
      [PACKAGE_TYPES.LETTER]: 0.51,
      [PACKAGE_TYPES.OVERSIZE]: 0.21,
    },
    locales: [4, 5, 6]
  },
];

