package com.sruthi.swe642.project.swe642rest;

import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, String> {
    Student findByStudentId(String studentId);
}
