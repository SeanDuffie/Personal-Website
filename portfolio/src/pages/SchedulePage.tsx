import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Video, MapPin, Mail, User } from 'lucide-react';
import { Calendar } from '../components/ui/calendar';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

export function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [meetingType, setMeetingType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM',
  ];

  const meetingTypes = [
    { value: 'consultation', label: 'Initial Consultation (30 min)', icon: User },
    { value: 'project-discussion', label: 'Project Discussion (60 min)', icon: Video },
    { value: 'follow-up', label: 'Follow-up Meeting (30 min)', icon: Clock },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      date: selectedDate,
      time: selectedTime,
      meetingType,
      ...formData,
    });
    alert('Meeting request submitted! I will send you a confirmation email shortly.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4">Schedule a Meeting</h1>
          <p className="text-gray-600">
            Choose a time that works best for you, and let's discuss your project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div>
            <Card className="p-6 mb-6">
              <h3 className="mb-4 flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Select a Date
              </h3>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border"
                />
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Available Time Slots
              </h3>
              <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTime(time)}
                    className="text-xs"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Form Section */}
          <div>
            <Card className="p-6">
              <h3 className="mb-6">Meeting Details</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="meeting-type">Meeting Type</Label>
                  <Select value={meetingType} onValueChange={setMeetingType}>
                    <SelectTrigger id="meeting-type">
                      <SelectValue placeholder="Select meeting type" />
                    </SelectTrigger>
                    <SelectContent>
                      {meetingTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4" />
                              {type.label}
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="pl-9"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-9"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me briefly about what you'd like to discuss..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                  />
                </div>

                {selectedDate && selectedTime && meetingType && (
                  <Card className="p-4 bg-blue-50 border-blue-200">
                    <div className="text-sm">
                      <div className="mb-2">
                        <strong>Selected Schedule:</strong>
                      </div>
                      <div className="space-y-1 text-gray-700">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4" />
                          {selectedDate.toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {selectedTime}
                        </div>
                        <div className="flex items-center gap-2">
                          <Video className="w-4 h-4" />
                          {meetingTypes.find(t => t.value === meetingType)?.label}
                        </div>
                      </div>
                    </div>
                  </Card>
                )}

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={!selectedDate || !selectedTime || !meetingType}
                >
                  Schedule Meeting
                </Button>
              </form>
            </Card>

            <Card className="p-4 mt-4 bg-gray-50">
              <div className="text-sm text-gray-600">
                <div className="mb-2">
                  <strong>Meeting Information:</strong>
                </div>
                <ul className="space-y-1 list-disc list-inside">
                  <li>All meetings are conducted via Google Meet or Zoom</li>
                  <li>You'll receive a confirmation email with the meeting link</li>
                  <li>Please join 5 minutes before the scheduled time</li>
                  <li>Free to reschedule up to 24 hours in advance</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
