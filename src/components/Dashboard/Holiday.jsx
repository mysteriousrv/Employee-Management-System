import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Edit } from "lucide-react";

const initialHolidays = [
  { id: 1, day: "Tuesday", date: "January 26, 2025", name: "Republic Day" },
  { id: 2, day: "Friday", date: "April 2, 2025", name: "Good Friday" },
  { id: 3, day: "Monday", date: "April 30, 2025", name: "Memorial Day" },
  { id: 4, day: "Wednesday", date: "August 15, 2025", name: "Independence Day" },
  { id: 5, day: "Wednesday", date: "August 22, 2025", name: "Bakrid" },
  { id: 6, day: "Monday", date: "September 30, 2025", name: "Janmashtami" },
  { id: 7, day: "Tuesday", date: "October 2, 2025", name: "Gandhi Jayanti" },
  { id: 8, day: "Wednesday", date: "November 7, 2025", name: "Diwali" },
  { id: 9, day: "Tuesday", date: "December 25, 2025", name: "Christmas Day" },
];

export default function Holiday() {
  const [holidays, setHolidays] = useState(initialHolidays);
  const [newHoliday, setNewHoliday] = useState({ day: "", date: "", name: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAddOrEdit = () => {
    if (!newHoliday.day || !newHoliday.date || !newHoliday.name) return;

    if (isEditing) {
      // Edit Mode
      const updated = holidays.map((holiday) =>
        holiday.id === editId ? { ...holiday, ...newHoliday } : holiday
      );
      setHolidays(updated);
      setIsEditing(false);
      setEditId(null);
    } else {
      // Add Mode
      const newEntry = {
        id: holidays.length ? holidays[holidays.length - 1].id + 1 : 1,
        ...newHoliday,
      };
      setHolidays([...holidays, newEntry]);
    }

    setNewHoliday({ day: "", date: "", name: "" });
  };

  const handleEditClick = (holiday) => {
    setIsEditing(true);
    setEditId(holiday.id);
    setNewHoliday({ day: holiday.day, date: holiday.date, name: holiday.name });
  };

  const deleteHoliday = (id) => {
    setHolidays(holidays.filter((h) => h.id !== id));
    if (isEditing && id === editId) {
      setIsEditing(false);
      setEditId(null);
      setNewHoliday({ day: "", date: "", name: "" });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-500">Holidays</h1>

      {/* Inputs */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        <input
          type="text"
          placeholder="Holiday Day"
          className="border p-2 rounded bg-white text-black"  
          value={newHoliday.day}
          onChange={(e) => setNewHoliday({ ...newHoliday, day: e.target.value })}
        />
        <input
          type="text"
          placeholder="Holiday Date"
          className="border p-2 rounded bg-white text-black"
          value={newHoliday.date}
          onChange={(e) => setNewHoliday({ ...newHoliday, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Holiday Name"
          className="border p-2 rounded bg-white text-black"
          value={newHoliday.name}
          onChange={(e) => setNewHoliday({ ...newHoliday, name: e.target.value })}
        />
        <button
          onClick={handleAddOrEdit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isEditing ? "Update Holiday" : "Add Holiday"}
        </button>
      </div>

      {/* Holiday List */}
      <Card>
        <CardContent>
          <table className="w-full text-left border">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-black">#</th>
                <th className="p-2 text-black">Holiday Day</th>
                <th className="p-2 text-black">Holiday Date</th>
                <th className="p-2 text-black">Holiday Name</th>
                <th className="p-2 text-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {holidays.map((holiday, index) => (
                <tr key={holiday.id} className="border-b">
                  <td className="p-2 text-black">{(index + 1).toString().padStart(2, "0")}</td>
                  <td className="p-2 text-pink-600">{holiday.day}</td>
                  <td className="p-2 text-pink-600">{holiday.date}</td>
                  <td className="p-2 text-pink-600">{holiday.name}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEditClick(holiday)}
                      className="text-blue-500 hover:underline"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => deleteHoliday(holiday.id)}
                      className="text-red-500 hover:underline"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
