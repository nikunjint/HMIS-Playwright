import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import fetcher from "../../axios/Fetcher";
import queryKeys from "../../queryKeys";
import {  putUploader, uploader } from "../../axios/Uoploader";
import Common from "../../components/common";

//organization
export const useFeatchOrganization = (page) => {
    return useQuery([queryKeys.userManagement.setup.organization,page], () =>
      fetcher(`organizations?page=${page}`)
    );
  };

  
  export const  useAddOrganization=()=> {
    const queryClient = useQueryClient();  
  
    return useMutation((data) => uploader(`organizations`, data), {
      onSuccess: (data) => {
      queryClient.invalidateQueries([queryKeys.userManagement.setup.organization]);
      Common.notifications('Success',`${data?.message }`,'success')

      },
    });
  }
  
  export const  useEditOrganization=()=> {

    const queryClient = useQueryClient();  
  
    return useMutation((data) => putUploader(`organizations/${data?.id}`,data?.payload), {
      onSuccess: (data) => {
      queryClient.invalidateQueries([queryKeys.userManagement.setup.organization]);
      Common.notifications('Success',`${data?.message }`,'success')

      },
    });
  }
//sub-organizations
  export const useFeatchSubOrganization = () => {
    return useQuery([queryKeys.userManagement.setup.suborganization], () =>
      fetcher(`sub-organizations`)
    );
  };
  export const  useAddSubOrganization=()=> {
    const queryClient = useQueryClient();  
  
    return useMutation((data) => uploader(`sub-organizations`, data), {
      onSuccess: (data) => {
      queryClient.invalidateQueries([queryKeys.userManagement.setup.suborganization]);
      Common.notifications('Success',`${data?.message }`,'success')

      },
    });
  }