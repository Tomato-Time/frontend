import ListAltIcon from "@material-ui/icons/ListAlt";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";

export default function Icons({ index }) {
  switch (index) {
    case 0:
      return <ListAltIcon />;
    case 1:
      return <EqualizerIcon />;
    case 2:
      return <SettingsIcon />;
    case 3:
      return <InfoIcon />;
    default:
      break;
  }
}
