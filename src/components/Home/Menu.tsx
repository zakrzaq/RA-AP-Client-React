import MenuOption from '../Base/ManuOption';
import { amOptions, pmOptions, utilOptions } from '../../data/homeMenuOptions';

export default function HomeMenu() {
  return (
    <div className="menu-options">
      <div className="menu-options__column">
        <h3>AM Run:</h3>
        {amOptions.map((opt) => (
          <MenuOption key={opt.id} url={opt.url} label={opt.label} />
        ))}
      </div>
      <div className="menu-options__column">
        <h3>PM Run:</h3>
        {pmOptions.map((opt) => (
          <MenuOption
            key={opt.id}
            url={opt.url}
            label={opt.label}
            color={opt.color}
          />
        ))}
      </div>
      <div className="menu-options__column">
        <h3>Utility:</h3>
        {utilOptions.map((opt) => (
          <MenuOption
            key={opt.id}
            url={opt.url}
            label={opt.label}
            color={opt.color}
          />
        ))}
      </div>
    </div>
  );
}
