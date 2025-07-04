"use client";

import client from "@/apiClient/apollo-client";
import { ApolloProvider } from "@apollo/client";

export default function ApolloWrapper({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

