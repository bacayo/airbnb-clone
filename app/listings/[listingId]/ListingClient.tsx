"use client";

import Container from "@/components/Container";
import ListingHead from "@/components/Listings/ListingHead";
import ListingInfo from "@/components/Listings/ListingInfo";
import { categories } from "@/components/Navbar/Categories";
import { SafeListing, SafeUser } from "@/types";
import { Listing, Reservation } from "@prisma/client";

import React, { useMemo } from "react";

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient = ({ listing, currentUser }: ListingClientProps) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto text-gray-200 ">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            currentUser={currentUser}
            id={listing.id}
          />
          <div className="grid grid-cols-1 mt-6 md:grid-cols-7 md:gap-10">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
