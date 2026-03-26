import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { UserProfileView, UserStatsView } from "../backend.d";
import { useActor } from "./useActor";

export function useUserStats() {
  const { actor, isFetching } = useActor();
  return useQuery<UserStatsView | null>({
    queryKey: ["userStats"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getUserStats();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUserProfile() {
  const { actor, isFetching } = useActor();
  return useQuery<UserProfileView | null>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMarkTopicComplete() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (topic: string) => {
      if (!actor) return;
      await actor.markTopicComplete(topic);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userStats"] });
    },
  });
}
