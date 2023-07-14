import React, { useCallback, useMemo } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import { SafeUser } from "@/types";
import { onOpen } from "@/redux/slices/loginModalSlice";
import { useAppDispatch } from "./reduxHooks";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoritedIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (!currentUser) return dispatch(onOpen());

      try {
        let request;
        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
    [currentUser, dispatch, listingId, hasFavorited, router]
  );
  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
