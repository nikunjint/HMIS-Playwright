import { useQuery } from "@tanstack/react-query";
import fetcher from "../../axios/Fetcher";
import queryKeys from "../../queryKeys";

export const useFeatchOrganization = (page) => {
    return useQuery([queryKeys.userManagement.setup.organization,page], () =>
      fetcher(`organizations?page=${page}`)
    );
  };

  export const useFeatchSubOrganization = () => {
    return useQuery([queryKeys.userManagement.setup.suborganization], () =>
      fetcher(`sub-organizations`)
    );
  };
