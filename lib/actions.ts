// lib/actions.ts
'use server';

import { z } from 'zod';
import { insertMeeting, updateMeetingDb, deleteMeetingDb } from './meetings-db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Accessible validation schema with Zod
const MeetingFormSchema = z.object({
  date: z.string().min(1, { message: 'Meeting date is required.' }),
  conducting: z.string().min(3, { message: 'Conducting leader must be at least 3 characters long.' }),
  openingHymn: z.string().min(1, { message: 'Opening hymn selection is required.' }),
  sacramentHymn: z.string().min(1, { message: 'Sacrament hymn selection is required.' }),
  closingHymn: z.string().min(1, { message: 'Closing hymn selection is required.' }),
});

export type State = {
  errors?: {
    date?: string[];
    conducting?: string[];
    openingHymn?: string[];
    sacramentHymn?: string[];
    closingHymn?: string[];
  };
  message?: string | null;
};

// Create Action
export async function createMeeting(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get('date'),
    conducting: formData.get('conducting'),
    openingHymn: formData.get('openingHymn'),
    sacramentHymn: formData.get('sacramentHymn'),
    closingHymn: formData.get('closingHymn'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to schedule meeting.',
    };
  }

  try {
    await insertMeeting({
      date: validatedFields.data.date,
      conducting: validatedFields.data.conducting,
      opening_hymn: validatedFields.data.openingHymn,
      sacrament_hymn: validatedFields.data.sacramentHymn,
      closing_hymn: validatedFields.data.closingHymn,
    });
  } catch (error) {
    console.error(error);
    return { message: 'Database Server Exception: Failed to register the meeting.' };
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

// Update Action
export async function updateMeeting(id: string | number, prevState: State, formData: FormData): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get('date'),
    conducting: formData.get('conducting'),
    openingHymn: formData.get('openingHymn'),
    sacramentHymn: formData.get('sacramentHymn'),
    closingHymn: formData.get('closingHymn'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid input fields. Changes were not committed.',
    };
  }

  try {
    await updateMeetingDb(id, {
      date: validatedFields.data.date,
      conducting: validatedFields.data.conducting,
      opening_hymn: validatedFields.data.openingHymn,
      sacrament_hymn: validatedFields.data.sacramentHymn,
      closing_hymn: validatedFields.data.closingHymn,
    });
  } catch (error) {
    console.error(error);
    return { message: 'Database Server Exception: Failed to save changes.' };
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

// Delete Action
export async function deleteMeeting(id: string | number) {
  try {
    await deleteMeetingDb(id);
    revalidatePath('/meetings');
  } catch (error) {
    console.error(error);
    throw new Error('Critical failure: Could not delete the requested meeting.');
  }
}

