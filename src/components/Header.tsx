import './Header.scss';

type Props = {
  script: string;
};

export default function Header({ script }: Props) {
  return (
    <header className="header">
      <div className="logo">
        <h2>
          APMM <br />
          Process
        </h2>
      </div>
      <div className="title">
        <h2 className="title-text">{script}</h2>
      </div>
    </header>
  );
}
