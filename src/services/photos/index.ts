"use client";

import { apiRequest } from "..";
import type { Photo } from "@/@types/photos";
import { API } from "@/constants/api";

export const getPhotos = async () => {
  return await apiRequest.get<{
    photos: Photo[];
  }>(API.PHOTOS);
};
