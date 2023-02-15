import React from "react";

interface ErrorProps {
  error: string | undefined | null;
}

export const Error: React.FC<ErrorProps> = ({ error }) => {
  if (error) {
    return <p className="text-red-500  max-w-3xl break-all">{error}</p>;
  }
  return null;
};
