/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextResponse } from "next/server";
import { createApi } from "unsplash-js";
import "whatwg-fetch";

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
  fetch,
});

export const GET = async () => {
  const photos = await unsplash.users.getPhotos({ username: "mattrose" });

  return NextResponse.json({
    photos: photos.response?.results?.map(
      ({ id, width, height, blur_hash, color, urls }) => ({
        id,
        width,
        height,
        blurHash: blur_hash!,
        color,
        preview: urls.regular,
        src: urls.full,
      }),
    ),
  });
};
