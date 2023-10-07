import { apiSlice } from "../../api/apiSlice";

const scheduleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSchedule: builder.query({
      query: () => ({
        url: `/schedule`,
      }),
      providesTags: ["schedule"],
    }),
    createSchedule: builder.mutation({
      query: ({ data }) => ({
        url: `/schedule`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["schedule"],
    }),
    updateSchedule: builder.mutation({
      query: ({ data, id }) => ({
        url: `/schedule/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["schedule"],
    }),
  }),
});

export const {
  useGetScheduleQuery,
  useCreateScheduleMutation,
  useUpdateScheduleMutation,
} = scheduleApi;
