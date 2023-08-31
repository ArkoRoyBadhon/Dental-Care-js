import { apiSlice } from "../../api/apiSlice";

const OfficeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createImages: builder.mutation({
      query: (payload) => ({
        url: `/office`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["image"],
    }),
    getImages: builder.query({
      query: () => ({
        url: `/office`,
      }),
      providesTags: ["image"],
    }),
    deleteImage: builder.mutation({
      query: (id) => ({
        url: `/office/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["image"],
    }),
  }),
});

export const { useCreateImagesMutation, useGetImagesQuery, useDeleteImageMutation } = OfficeApi;
