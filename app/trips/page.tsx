import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  const reservations = await getReservations({
    userId: currentUser?.id,
  });

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthoriazed" subtitle="Please login" />;
      </ClientOnly>
    );
  }

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subtitle="Looks like you havent reserved any trips"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default TripsPage;
