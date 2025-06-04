import { toast } from "sonner";
import { useClerk } from "@clerk/nextjs";

import { trpc } from "@/trpc/client";

interface UseSubscriptionProps {
    userId: string;
    isSubscribed: boolean;
    fromVideoId?: string;
}

export const UseSubscription = ({
    userId,
    isSubscribed,
    fromVideoId,
}: UseSubscriptionProps) => {
    const clerk = useClerk();
    const utils = trpc.useUtils();

    const subscribe = trpc.subscriptions.create.useMutation({
        onSuccess: () => {
            toast.success("Subscribed");
            // sup.getmany, users.getOne
            if (fromVideoId) {
                utils.videos.getOne.invalidate({ id: fromVideoId });
            }
        },
        onError: (error) => {
            toast.error("Something went wrong");

            if (error.data?.code === "UNAUTHORIZED") {
                clerk.openSignIn();
            }
        },
    });

    const unsubscribe = trpc.subscriptions.remove.useMutation({
        onSuccess: () => {
            toast.success("Unsubscribed");
            // sup.getmany, users.getOne
            if (fromVideoId) {
                utils.videos.getOne.invalidate({ id: fromVideoId });
            }
        },
        onError: (error) => {
            toast.error("Something went wrong");

            if (error.data?.code === "UNAUTHORIZED") {
                clerk.openSignIn();
            }
        },
    });

    const isPending = subscribe.isPending || unsubscribe.isPending;

    const onClick = () => {
        if (isSubscribed) {
            unsubscribe.mutate({ userId });
        } else {
            subscribe.mutate({ userId });
        }
    };

    return {
        isPending,
        onClick,
    };
};