package com.sruthi.swe642.project.swe642rest;

import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import java.util.ArrayList;
import java.util.List;

@Path("/students")
@Produces("application/json")
public class StudentResource {

    @Autowired
    private StudentRepository repository;

    @GET
    @Path("/{studentId}")
    public Student getStudent(@PathParam("studentId") String studentId) {
        return repository.findByStudentId(studentId);
    }

    @GET
    public List<String> getAllStudentIds() {
        Iterable<Student> students = repository.findAll();
        List<String> idList = new ArrayList<String>();
        for(Student s : students) {
            idList.add(s.getStudentId());
        }
        return idList;
    }

    @POST
    @Consumes("application/json")
    public void update(Student student) {
        repository.save(student);

    }

}
