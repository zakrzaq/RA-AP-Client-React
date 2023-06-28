import TagButton from './Base/TagButton';
import { appLinksOptions } from '../data/appLinksOptions';
import './AppLinks.scss';

export default function AppLinks() {

  return (
    <div className="sap-links">
      {appLinksOptions.map((opt) => (<TagButton key={opt.id} label={opt.label} url={opt.url} color={opt.color} />))}
    </div>
  );
}
