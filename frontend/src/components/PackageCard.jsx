import { ReactComponent as OpenArrow } from "../assets/open_arrow.svg";

function Package({ name, version }) {
  return (
    <div className="package">
      <div className="package-title">{name}</div>
      <div className="package-content">
        <div className="package-version">{version}</div>
        <OpenArrow />
      </div>
    </div>
  );
}

export default Package;
