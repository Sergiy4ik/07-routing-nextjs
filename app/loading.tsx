"use client";

import Modal from "@/components/Modal/Modal";

export default function Loader() {
    const close = () => {
        return;
    }

    return (
        <Modal onClose={close}>
            <p className="loading">Loading, please wait...</p>
        </Modal>
    )
}