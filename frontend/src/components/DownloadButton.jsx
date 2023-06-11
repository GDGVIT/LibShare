import downloadIcon from "../assets/download.png"
import "../css/downloadBtn.css";

function DownloadButton({fileURL, fileName}) {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div onClick={handleDownload} className="downloadBtn">
            <img src={downloadIcon} alt="Download"/>
            <p>Install</p>
        </div>
    )
}

export default DownloadButton;