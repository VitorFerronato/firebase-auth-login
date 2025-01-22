import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

/**
 *
 * @param {string} text Text message
 * @param {string} type default | info | success | error | warning
 */
export default function toastify(text, type) {
  return toast(text, {
    theme: "auto",
    type: type || "default",
    position: "bottom-center",
  });
}
