"use client";

import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import type { Photo } from "@/@types/photos";
import { getPhotos } from "@/services/photos";
import { distributeArrayToColumns } from "@/utils";

export function usePhotos() {
  const [photos, setPhotos] = useState<Photo[][]>();

  useEffect(() => {
    const fetchPhotos = async () => {
      const result = await getPhotos();
      if (result) {
        setPhotos(
          distributeArrayToColumns(result.data.photos, isMobile ? 3 : 5),
        );
      }
    };

    fetchPhotos();
  }, []);

  return { photos };
}
