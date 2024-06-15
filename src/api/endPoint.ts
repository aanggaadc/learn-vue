import fetcher from "./fetcher";
import { ListResponse, ListsResponse } from "@/types/api";

export const getAllList = async () => {
  const response = await fetcher<ListsResponse>("list");
  return response;
};

export const getList = async (id: string) => {
  const response = await fetcher<ListResponse>(`detail/${id}`);
  return response;
};
