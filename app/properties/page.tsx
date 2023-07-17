import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import getReservations from "../actions/getReservations";

import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getListings({
    userId: currentUser?.id,
  });

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthoriazed" subtitle="Please login" />;
      </ClientOnly>
    );
  }

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you have no properties"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
