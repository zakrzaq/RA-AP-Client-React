import MenuOption from "../Base/ManuOption";

export default function HomeMenu() {
  return (
    <div className="menu-options">
      <div className="menu-options__am">
        <h3>AM Run:</h3>
        <MenuOption url="/requests" label="Get current requests" />
        <MenuOption url="/mif_soerf" label="Generate MIF / SOERF requests" />
        <MenuOption url="/am_status" label="Update Material Statuses pre MM" />
        <MenuOption url="/am_emails" label="Generate AM Price & PCE requests" />
      </div>
      <div className="menu-options__pm">
        <h3>PM Run:</h3>
        <MenuOption url="/reconcile_pce" label="Reconcile PCE / Update ORG Source" color="red" />
        <MenuOption url="/pm_status" label="Update Material Statuses post MM" color="red" />
        <MenuOption url="/pm_emails" label="Generate PM CCC, Localization & GTS Requests" color="red" />
      </div>
      <div className="menu-options__other">
        <h3>Utility:</h3>
        <MenuOption url="/get_sap_data" label="Download SAP Data" color="green" />
        <MenuOption url="/proc_sap_data" label="Bring SAP Data" color="green" />
        <MenuOption url="/clean_desktop" label="Archive Requests / working dir" color="orange" />
        <MenuOption url="/mif_soerf_check" label="Check for MIF/SOERF submitted" color="orange" />
        <MenuOption url="/check_daily_report" label="Check for the EOD report" color="orange" />
      </div>
    </div>
  );
}

