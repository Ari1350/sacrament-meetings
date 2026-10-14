'use client';

import { deleteMeeting } from '@/lib/actions';

export default function DeleteButton({ id }: { id: string | number }) {
  const action = async () => {
    if (confirm('Are you sure you want to permanently delete this sacrament meeting plan?')) {
      await deleteMeeting(id);
    }
  };

  return (
    <form action={action} className="inline">
      <button
        type="submit"
        className="text-red-600 hover:text-red-900 text-sm font-medium focus:outline-none focus:underline"
        aria-label="Delete sacrament meeting"
      >
        Delete
      </button>
    </form>
  );
}
