import { apiSlice } from "../../api/apiSlice";

const ServiceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (payload) => ({
        
        url: `/service`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["image"],
    }),
    getServices: builder.query({
      query: () => ({
        url: `/service`,
      }),
      providesTags: ["image"],
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }), 
      invalidatesTags: ["image"],
    }),
  }),
});

export const { useCreateServiceMutation, useGetServicesQuery, useDeleteServiceMutation } = ServiceApi;
