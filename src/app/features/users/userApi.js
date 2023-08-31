import { apiSlice } from "../../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: `/users`,
      }),
      providesTags: ["User"]
    }),
    createUser: builder.mutation({
      query: ({ data }) => ({
        url: `/users`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"]
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation, useLoginUserMutation, useLogOutMutation } =
  userApi;
