"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getCourseById } from "@/app/_services";
import { FiBookOpen } from "react-icons/fi";

const DashboardPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    fetchEnrolledCourses();
  }, [user]);

  const fetchEnrolledCourses = async () => {
    if (user) {
      const courses = await getCourseById(user.id);
      setEnrolledCourses(courses);
    }
  };

  return (
    <div className="min-h-screen  mt-[71px] text-white relative">
      <div className="absolute inset-0 z-10">
        <div className="bg-gradient-to-r  opacity-80 h-full"></div>
        <div className="absolute inset-0 bg-stars-pattern opacity-20"></div>
      </div>
      <div className="relative z-20 p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="bg-gray-900 bg-opacity-75 p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
            {user ? (
              <div className="space-y-2">
                <div>
                  <span className="font-semibold">Name:</span> {user.fullName}
                </div>
                <div>
                  <span className="font-semibold">Email:</span>{" "}
                  {user.emailAddresses[0].emailAddress}
                </div>
                <div>
                  <span className="font-semibold">Username:</span>{" "}
                  {user.username}
                </div>
              </div>
            ) : (
              <div>Loading profile...</div>
            )}
          </div>
          <div className="bg-gray-900
           bg-opacity-75 p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-2xl font-semibold mb-4">Enrolled Courses</h2>
            {enrolledCourses.length ? (
              <ul className="space-y-4">
                {enrolledCourses.map((course) => (
                  <li
                    key={course.id}
                    className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg"
                  >
                    <FiBookOpen className="text-purple-500" />
                    <div>
                      <h3 className="font-semibold">{course.name}</h3>
                      <p className="text-sm text-gray-400">
                        {course.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div>Loading courses...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
