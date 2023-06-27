import '../assets/styles/AppLinks.scss';

export default function AppLinks() {
  return (
    <div className=".applinks">
      <a href="/open_log" className="tag-option tag-option-red">
        AP LOG
      </a>
      <a href="/open_sap" className="tag-option tag-option-red">
        SAP
      </a>
      <a href="/single_sap?table=text" className="tag-option">
        SALES_TEXT
      </a>
      <a href="/single_sap?table=mara" className="tag-option">
        MARA
      </a>
      <a href="/single_sap?table=marc" className="tag-option">
        MARC
      </a>
      <a href="/single_sap?table=mvke" className="tag-option">
        MVKE
      </a>
      <a href="/single_sap?table=ausp" className="tag-option">
        AUSP
      </a>
      <a href="/single_sap?table=mlan" className="tag-option">
        MLAN
      </a>
      <a href="/single_sap?table=price" className="tag-option">
        PRICE
      </a>
      <a href="/single_sap?table=gts" className="tag-option">
        GTS
      </a>
    </div>
  );
}
