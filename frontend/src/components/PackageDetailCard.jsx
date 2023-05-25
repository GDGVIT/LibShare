import DownloadButton from "./DownloadButton";

function PackageDetailCard({ name, version, description, fileUrl }) {
  return (
    <div className="pkgdetailcontainer">
        <div className="pkgheading">
            {name}
        </div>
        <div className="pkgversion">
            {version}
        </div>
        <div className="pkgdesc">
            {description}
            <DownloadButton fileUrl={fileUrl} fileName={name} />
        </div>
    </div>
  )
}

export default PackageDetailCard;
