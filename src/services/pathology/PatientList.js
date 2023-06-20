import { useMutation } from "@tanstack/react-query";
import { uploader } from "../../axios/Uoploader";
import Common from "../../components/common";

export default function usePatentList() {
  return useMutation((data) => uploader(`lab/getPatientList`, data), {
    onSuccess: (data) => {
      Common.notifications("Success", `${data[0]?.messages}`, "success");
    },
  });
}
