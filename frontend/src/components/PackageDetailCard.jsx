import DownloadButton from "./DownloadButton";
import "../css/packageDetailCard.css";

function PackageDetailCard({ languageName, pkgName, fileUrl }) {
  return (
    <div className="pkgcontainer">
      <div>
        <div className="pkglang">
              {languageName}
          </div>
          <div className="pkgname">
              {pkgName}
          </div>
      </div>
        <div>
            <DownloadButton fileUrl={fileUrl} fileName={pkgName} />
        </div>
    </div>
  )
}

export default PackageDetailCard;
