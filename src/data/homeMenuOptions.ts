export const amOptions = [
  { id: 1, url: '/requests', label: 'Get current requests' },
  { id: 2, url: '/mif_soerf', label: 'Generate MIF / SOERF requests' },
  { id: 3, url: '/am_status', label: 'Update Material Statuses pre MM' },
  { id: 4, url: '/am_emails', label: 'Generate AM Price & PCE requests' },
];

export const pmOptions = [
  {
    id: 1,
    url: '/reconcile_pce',
    label: 'Reconcile PCE / Update ORG Source',
    color: 'red',
  },
  {
    id: 2,
    url: '/pm_status',
    label: 'Update Material Statuses post MM',
    color: 'red',
  },
  {
    id: 3,
    url: '/pm_emails',
    label: 'Generate PM CCC, Localization & GTS Requests',
    color: 'red',
  },
];

export const utilOptions = [
  { id: 1, url: '/get_sap_data', label: 'Download SAP Data', color: 'green' },
  { id: 2, url: '/proc_sap_data', label: 'Bring SAP Data', color: 'green' },
  {
    id: 3,
    url: '/clean_desktop',
    label: 'Archive Requests / working dir',
    color: 'orange',
  },
  {
    id: 4,
    url: '/mif_soerf_check',
    label: 'Check for MIF/SOERF submitted',
    color: 'orange',
  },
  {
    id: 5,
    url: '/check_daily_report',
    label: 'Check for the EOD report',
    color: 'orange',
  },
];
