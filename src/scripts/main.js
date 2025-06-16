import { initializeLoginController } from "./controller/loginController.js";
import { initializeRegisterController } from "./controller/registerController.js";
import ProfileOptionsController from "./controller/profileOptionsController.js";
import AppMenuController from "./controller/appMenuController.js";
import FeedController from "./controller/feedController.js";
import TakePictureController from "./controller/takePictureController.js";
import MyPicturesController from "./controller/myPicturesController.js";

initializeLoginController();
initializeRegisterController();
ProfileOptionsController.initialize();
AppMenuController.initialize();
FeedController.initialize();
TakePictureController.initialize();
MyPicturesController.initialize();
