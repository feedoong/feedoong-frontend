import Toast from "components/common/Toast";

Toast.config({ duration: 1000 })
export const useToast = () => {
  const show = (content: string) => {
    Toast.show({ content })
    return;
  }
  
  return [show, Toast.clear];
}