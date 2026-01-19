"use client";

import Modal from "@/components/Modal/Modal";

export default function Loading() {
    const Close = () => {
        return;
    }

    return (
        <Modal onClose={Close}>
            <p>Note is loading, please wait...</p>
        </Modal>
    )
}