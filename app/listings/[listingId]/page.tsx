import getListingById from "@/app/actions/getListingById";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  // const listing = await getListingById(params);
  console.log(params);
  const listing = await getListingById(params);
  console.log(listing);

  return <div>{listing?.title}</div>;
};
export default ListingPage;
