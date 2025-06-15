import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    description: "",
    orgName: "Tide Turners",
    location: "",
    date: "",
    startTime: "",
    endTime: "",
    lastDate: "",
    regTime: "",
    venue: "",
    address: "",
    mapLink: "",
    nearestStop: "",
    volunteers: "",
    instructions: "",
    isOpenToAll: "",
    contactEmail: "",
    contactNumber: "",
    approvalStatus: false,
  });

  const [files, setFiles] = useState({
    eventBanner: null,
    eventPoster: null,
    ngoLogo: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value === "yes" : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Constructing data for POST request
    const data = {
      ...formData,
      eventBanner: files.eventBanner?.name || "",
      eventPoster: files.eventPoster?.name || "",
      ngoLogo: files.ngoLogo?.name || "",
    };

    try {
      const response = await axios.post("https://reefresh.onrender.com/addEvent", data);
      console.log("Event Created Successfully:", response.data);
      alert("Event Created Successfully!");
      navigate('/dashboard')
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event.");
    }
  };

  return (
    <div className="mx-[100px] py-10">
      <form onSubmit={handleSubmit}>
        {/* Section 1: Event Details */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-600 mb-6">Section 1: <span className="text-black">Event Details</span></h3>
          <div className="grid gap-6">
            <Label>Event Name <span className="text-red-500">*</span></Label>
            <Input name="eventName" value={formData.eventName} onChange={handleChange} required />

            <Label>Event Type <span className="text-red-500">*</span></Label>
            <select name="eventType" value={formData.eventType} onChange={handleChange} required className="border p-2 rounded-md">
              <option value="">Select one option</option>
              <option value="Beach Cleanup">Beach Cleanup</option>
              <option value="Workshop">Workshop</option>
              <option value="Awareness Drive">Awareness Drive</option>
              <option value="Other">Other</option>
            </select>

            <Label>Description</Label>
            <Textarea name="description" value={formData.description} onChange={handleChange} />

            <Label>Organization Name <span className="text-red-500">*</span></Label>
            <Input name="orgName" value={formData.orgName} onChange={handleChange} required />

            <Label>Location <span className="text-red-500">*</span></Label>
            <select name="location" value={formData.location} onChange={handleChange} required className="border p-2 rounded-md">
              <option value="">Select one option</option>
              <option value="South Mumbai">South Mumbai</option>
              <option value="Central Mumbai">Central Mumbai</option>
              <option value="North Mumbai">North Mumbai</option>
              <option value="West Mumbai">West Mumbai</option>
            </select>
          </div>
        </div>

        {/* Section 2: Timing & Schedule */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-600 mb-6">Section 2: <span className="text-black">Timing & Schedule</span></h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Label>Date <span className="text-red-500">*</span></Label>
            <Input name="date" type="date" value={formData.date} onChange={handleChange} required />

            <Label>Start Time <span className="text-red-500">*</span></Label>
            <Input name="startTime" type="time" value={formData.startTime} onChange={handleChange} required />

            <Label>End Time <span className="text-red-500">*</span></Label>
            <Input name="endTime" type="time" value={formData.endTime} onChange={handleChange} required />

            <Label>Last Date of Registration <span className="text-red-500">*</span></Label>
            <Input name="lastDate" type="date" value={formData.lastDate} onChange={handleChange} required />

            <Label>Registration Time</Label>
            <Input name="regTime" type="time" value={formData.regTime} onChange={handleChange} />
          </div>
        </div>

        {/* Section 3: Location Info */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-600 mb-6">Section 3: <span className="text-black">Location Info</span></h3>
          <div className="grid gap-4">
            <Label>Venue Name <span className="text-red-500">*</span></Label>
            <Input name="venue" value={formData.venue} onChange={handleChange} required />

            <Label>Exact Address <span className="text-red-500">*</span></Label>
            <Input name="address" value={formData.address} onChange={handleChange} required />

            <Label>Google Maps Link</Label>
            <Input name="mapLink" value={formData.mapLink} onChange={handleChange} />

            <Label>Nearest Station/Bus Stop <span className="text-red-500">*</span></Label>
            <Input name="nearestStop" value={formData.nearestStop} onChange={handleChange} required />
          </div>
        </div>

        {/* Section 4: Volunteer Requirements */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-600 mb-6">Section 4: <span className="text-black">Volunteer Requirements</span></h3>
          <Label>Total Volunteer Requirements <span className="text-red-500">*</span></Label>
          <Input name="volunteers" type="number" value={formData.volunteers} onChange={handleChange} required />

          <Label>Special Instructions <span className="text-red-500">*</span></Label>
          <Textarea name="instructions" value={formData.instructions} onChange={handleChange} required />
        </div>

        {/* Section 5: Media & Branding */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-600 mb-6">Section 5: <span className="text-black">Media & Branding</span></h3>
          <Label>Upload Event Banner</Label>
          <Input type="file" name="eventBanner" onChange={handleFileChange} accept="image/*" />

          <Label>Upload Event Poster</Label>
          <Input type="file" name="eventPoster" onChange={handleFileChange} accept="image/*" />

          <Label>Upload NGO Logo</Label>
          <Input type="file" name="ngoLogo" onChange={handleFileChange} accept="image/*" />
        </div>

        {/* Section 6: Additional Details */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-600 mb-6">Section 6: <span className="text-black">Additional Details</span></h3>
          <Label>Is the event open to all? <span className="text-red-500">*</span></Label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="isOpenToAll" value="yes" onChange={handleChange} required />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="isOpenToAll" value="no" onChange={handleChange} required />
              No
            </label>
          </div>

          <Label>Contact Email <span className="text-red-500">*</span></Label>
          <Input name="contactEmail" type="email" value={formData.contactEmail} onChange={handleChange} required />

          <Label>Contact Number <span className="text-red-500">*</span></Label>
          <Input name="contactNumber" type="tel" value={formData.contactNumber} onChange={handleChange} required />
        </div>

        <div className="text-center">
          <Button type="submit" className="px-10 py-2 text-lg">Submit</Button>
        </div>
      </form>

      <div className="text-center text-sm mt-10 text-green-700 font-semibold">
        Built to create waves of impact by team NOMentum
      </div>
    </div>
  );
};

export default CreateEvent;
