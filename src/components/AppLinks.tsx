import TagButton from './Base/TagButton';
import './AppLinks.scss';

export default function AppLinks() {
  return (
    <div className="applinks">
      <TagButton label="AP LOG" url="/open_log" color="red" />
      <TagButton label="SAP" url="/open_sap" color="red" />
      <TagButton label="SALES_TEXT" url="/single_sap?table=text" />
      <TagButton label="MARA" url="/single_sap?table=mara" />
      <TagButton label="MARC" url="/single_sap?table=marc" />
      <TagButton label="MVKE" url="/single_sap?table=mvke" />
      <TagButton label="AUSP" url="/single_sap?table=ausp" />
      <TagButton label="MLAN" url="/single_sap?table=mlan" />
      <TagButton label="PRICE" url="/single_sap?table=price" />
      <TagButton label="GTS" url="/single_sap?table=gts" />
    </div>
  );
}
