'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
            <p className="text-gray-700 mb-6">
              We're sorry, but an unexpected error occurred. Our team has been notified.
            </p>
            <div className="bg-red-50 p-4 rounded-md mb-6">
              <p className="text-red-700 font-mono text-sm">
                {error.message}
              </p>
            </div>
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
