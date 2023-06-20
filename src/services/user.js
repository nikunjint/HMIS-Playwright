import { useMutation } from "@tanstack/react-query";
import { putUploader } from "../axios/Uoploader";
import Common from "../components/common";
export const useUsers = () => {
  return useMutation((payload) => putUploader(`/user/change-status`, payload), {
    onSuccess: (res) => {
      Common.notification("Success", `${res?.message}`, "success");
    },
  });
};
