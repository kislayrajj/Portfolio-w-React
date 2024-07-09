// apiSlice.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    submitSendMeTextForm: builder.mutation({
      query: (formData) => ({
        url: "/submit-form",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useSubmitSendMeTextFormMutation } = apiSlice;
