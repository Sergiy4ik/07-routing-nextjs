import { fetchNotes } from "@/lib/api";
import NotesClient from "../../Notes.client";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

type Props = {
    readonly params: Promise<{ slug: string[] }>;
};

export default async function NotesByTag({ params }: Props) {
    const { slug } = await params;

    const search = "";
    const tag = slug[0] === "all" ? undefined : slug[0];
    const page = 1;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["notes", search, page, tag],
        queryFn: () => fetchNotes(page, search, tag),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotesClient />
        </HydrationBoundary>
    );
}