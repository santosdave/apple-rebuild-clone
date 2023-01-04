import React from 'react'

type Props = {
    title: string;
    onClick?: () => void;
    width?: string;
    loading?: boolean;
    padding?: string;
    noIcon?: boolean;
}

export default function CustomButton({ title, onClick, width, loading, padding, noIcon }: Props) {
    return (
        <button>
            <span>

            </span>
            <span>

            </span>
            <span>
                {loading ? "Loading..." : title}
            </span>
        </button>
    )
}