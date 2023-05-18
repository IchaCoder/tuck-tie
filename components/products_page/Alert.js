import React from "react";
import { useGlobalContext } from "../context/context";

export default function () {
    const { showMessage, message } = useGlobalContext();

    return (
        <div>
            {showMessage && (
                <div className="fixed left-1/2 transform -translate-x-1/2 px-4 py-2 bg-green-500 text-white z-20">
                    {message}
                </div>
            )}
        </div>
    );
}

// export default Alert;
