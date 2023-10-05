import { apiSlice } from "../../api/apiSlice";

const AppointmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAppointment: builder.mutation({
      query: (payload) => ({
        url: `/appointment`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["appointment"],
    }),
    getAppointSeat: builder.query({
      query: ({ ...date }) => ({
        url: `/appointseat/${date.startDate}`,
      }),
      providesTags: ["appointment"],
    }),
    getAllAppointSingleDate: builder.query({
      query: (payload) => ({
        url: `/appointment`,
        method: "GET",
        params: payload,
      }),
      providesTags: ["appointment"],
    }),
    getAppointmentWithEmail: builder.query({
      query: ({ email }) => ({
        url: `/appointment/${email}`,
        method: "GET",
      }),
      providesTags: ["appointment"],
    }),
    deleteAppointment: builder.mutation({
      query: ({ email, id }) => ({
        url: `/appointment/${id}`,
        method: "DELETE",
        params: { email },
      }),
      invalidatesTags: ["appointment"],
    }),
  }),
});

export const {
  useCreateAppointmentMutation,
  useGetAppointSeatQuery,
  useGetAllAppointSingleDateQuery,
  useGetAppointmentWithEmailQuery,
  useDeleteAppointmentMutation,
} = AppointmentApi;
