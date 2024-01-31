
// import { TiWeatherStormy } from "react-icons/ti";
// import { FiList, FiSettings } from "react-icons/fi";
// import { FaMapMarkedAlt } from "react-icons/fa";
import { faCloudBolt, faListUl, faMapLocationDot, faGear } from "@fortawesome/free-solid-svg-icons";

const menuTabs = [
    { icon: faCloudBolt, text: 'Weather', link: '' },
    { icon: faListUl, text: 'Cities', link: 'recents' },
    { icon: faMapLocationDot, text: 'Map', link: 'map' },
    { icon: faGear, text: 'Settings', link: 'settings' },
];

const [weather, cities, map, settings] = menuTabs;
export const initialTabs = [weather, cities, map, settings];