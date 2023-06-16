import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import {
  faPeopleGroup,
  faParagraph,
  faList,
  faUnderline,
  faRedo,
  faUndo,
  faCode,
  faQuoteLeft,
  faListOl,
  faStrikethrough,
  faBold,
  faItalic,
  faBars,
  faBug,
  faEnvelope,
  faMagnifyingGlass,
  faBell,
  faChartSimple,
  faBox,
  faTableColumns,
  faRectangleList,
  faCalendarDay,
  faGear,
  faBuilding,
  faUserGroup,
  faUser,
  faListCheck,
  faLayerGroup,
  faStar,
  faPepperHot,
  faClock,
  faTag,
  faPencil,
  faClockRotateLeft,
  faRightFromBracket,
  faMessage,
  faFile,
  faTrash,
  faAdd,
  faFilePdf,
  faFileCircleQuestion,
  faFileWord,
  faFileExcel,
  faFilePowerpoint,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

export default () => {
  // /* add icons to the library */
  library.add(
    faEye,
    faFileWord,
    faFileExcel,
    faFilePowerpoint,
    faFileCircleQuestion,
    faFilePdf,
    faAdd,
    faBars,
    faBox,
    faPencil,
    faBug,
    faTableColumns,
    faRectangleList,
    faCalendarDay,
    faLayerGroup,
    faEnvelope,
    faRightFromBracket,
    faClockRotateLeft,
    faBold,
    faItalic,
    faMessage,
    faFile,
    faTrash,
    faPeopleGroup
  );
  library.add(faMagnifyingGlass, faUnderline, faRedo, faUndo, faCode, faQuoteLeft, faListOl, faList, faParagraph, faStrikethrough, faBell, faChartSimple, faGear, faListCheck, faUserGroup, faUser, faBuilding, faStar, faClock, faTag, faPepperHot);
};
