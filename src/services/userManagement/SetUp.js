import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import fetcher from "../../axios/Fetcher";
import queryKeys from "../../queryKeys";
import {  deleteUploader, putUploader, uploader } from "../../axios/Uoploader";
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
  export const useFeatchSubOrganization = (page) => {
    return useQuery([queryKeys.userManagement.setup.suborganization,page], () =>
      fetcher(`sub-organizations?page=${page}`)
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
  
  export const  useEditSubOrganization=()=> {

    const queryClient = useQueryClient();  
  
    return useMutation((data) => putUploader(`sub-organizations/${data?.id}`,data?.payload), {
      onSuccess: (data) => {
      queryClient.invalidateQueries([queryKeys.userManagement.setup.suborganization]);
      Common.notifications('Success',`${data?.message }`,'success')

      },
    });
  }
  
  
  
  export const  useDeletSubOrganization=()=> {
    const queryClient = useQueryClient();  
    return useMutation((id) => deleteUploader(`sub-organizations/${id}`), {
      onSuccess: (data) => {
      queryClient.invalidateQueries([queryKeys.userManagement.setup.suborganization]);
      Common.notifications('Success',`${data?.message }`,'success')

      },
    });
  }