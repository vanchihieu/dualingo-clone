import { List } from "@/app/(main)/courses/list";
import { getCourses } from "@/db/queries";
import React from "react";

const CoursesPage = async () => {
  const coursesData = await getCourses();

  return (
    <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>

      <List courses={coursesData} activeCourseId={1} />
    </div>
  );
};

export default CoursesPage;