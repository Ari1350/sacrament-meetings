// app/meetings/MeetingForm.tsx
'use client';

import { useActionState } from 'react';
import { State } from '@/lib/actions';
import Link from 'next/link';

interface MeetingFormProps {
  action: (prevState: State, formData: FormData) => Promise<State>;
  initialData?: {
    date: string;
    conducting: string;
    openingHymn: string;
    sacramentHymn: string;
    closingHymn: string;
  };
  buttonText: string;
}

export default function MeetingForm({ action, initialData, buttonText }: MeetingFormProps) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="space-y-5 max-w-xl mx-auto p-6 bg-white rounded-lg shadow border border-gray-100">
      {state.message && (
        <div className="p-4 bg-red-50 text-red-800 rounded border border-red-200 text-sm font-medium" role="alert">
          {state.message}
        </div>
      )}

      {/* Input: Date */}
      <div>
        <label htmlFor="date" className="block text-sm font-semibold text-gray-700">Meeting Date</label>
        <input
          id="date"
          name="date"
          type="date"
          defaultValue={initialData?.date || ''}
          aria-describedby="date-error"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        <div id="date-error" aria-live="polite" className="mt-1 text-sm text-red-600">
          {state.errors?.date?.map((err) => <p key={err}>{err}</p>)}
        </div>
      </div>

      {/* Input: Conducting */}
      <div>
        <label htmlFor="conducting" className="block text-sm font-semibold text-gray-700">Conducting Leader</label>
        <input
          id="conducting"
          name="conducting"
          type="text"
          defaultValue={initialData?.conducting || ''}
          aria-describedby="conducting-error"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        <div id="conducting-error" aria-live="polite" className="mt-1 text-sm text-red-600">
          {state.errors?.conducting?.map((err) => <p key={err}>{err}</p>)}
        </div>
      </div>

      {/* Input: Opening Hymn */}
      <div>
        <label htmlFor="openingHymn" className="block text-sm font-semibold text-gray-700">Opening Hymn</label>
        <input
          id="openingHymn"
          name="openingHymn"
          type="text"
          defaultValue={initialData?.openingHymn || ''}
          aria-describedby="openingHymn-error"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        <div id="openingHymn-error" aria-live="polite" className="mt-1 text-sm text-red-600">
          {state.errors?.openingHymn?.map((err) => <p key={err}>{err}</p>)}
        </div>
      </div>

      {/* Input: Sacrament Hymn */}
      <div>
        <label htmlFor="sacramentHymn" className="block text-sm font-semibold text-gray-700">Sacrament Hymn</label>
        <input
          id="sacramentHymn"
          name="sacramentHymn"
          type="text"
          defaultValue={initialData?.sacramentHymn || ''}
          aria-describedby="sacramentHymn-error"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        <div id="sacramentHymn-error" aria-live="polite" className="mt-1 text-sm text-red-600">
          {state.errors?.sacramentHymn?.map((err) => <p key={err}>{err}</p>)}
        </div>
      </div>

      {/* Input: Closing Hymn */}
      <div>
        <label htmlFor="closingHymn" className="block text-sm font-semibold text-gray-700">Closing Hymn</label>
        <input
          id="closingHymn"
          name="closingHymn"
          type="text"
          defaultValue={initialData?.closingHymn || ''}
          aria-describedby="closingHymn-error"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        <div id="closingHymn-error" aria-live="polite" className="mt-1 text-sm text-red-600">
          {state.errors?.closingHymn?.map((err) => <p key={err}>{err}</p>)}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-3 pt-4 border-t">
        <Link href="/meetings" className="px-4 py-2 border rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Cancel
        </Link>
        <button
          type="submit"
          disabled={isPending}
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isPending ? 'Saving...' : buttonText}
        </button>
      </div>
    </form>
  );
}
