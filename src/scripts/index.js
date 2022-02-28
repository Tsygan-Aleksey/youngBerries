import { addProduct } from "./templates/templates.js";
import { initToast} from "./components/toast.js";

const containerCard = document.querySelector("#container-card");
addProduct();

export { containerCard };

setTimeout(initToast, 5000)