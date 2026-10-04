import MeetingForm from '../MeetingForm';
import { createMeeting } from '@/lib/actions';

export default function CreatePage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Schedule New Sacrament Meeting</h1>
      <MeetingForm action={createMeeting} buttonText="Schedule Meeting" />
    </div>
  );
}
