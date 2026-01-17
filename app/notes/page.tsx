import { dehydrate, HydrationBoundary, QueryClient, } from "@tanstack/react-query";
import NotesClient from "./filter/[...slug]/Notes.client";
import { fetchNotes } from "@/lib/api";

export default async function Notes() {

    const search = "";
    const page = 1;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["notes", search, page],
        queryFn: () => fetchNotes(page, search),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotesClient />
        </HydrationBoundary>
    );
}

