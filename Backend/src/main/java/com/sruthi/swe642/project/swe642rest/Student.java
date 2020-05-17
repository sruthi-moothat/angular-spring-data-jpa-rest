package com.sruthi.swe642.project.swe642rest;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Student {

    @Id
    private String studentId;
    private String firstName;
    private String lastName;
    private String streetAddress;
    private String apartmentNumber;
    private String city;
    private String state;
    private String zip;
    private String telephone;
    private String email;
    private String linkToBio;
    private String dateOfSurvey;
    private String thingsYouLiked;
    private String interest;
    private String additionalComments;
    private String graduationMonth;
    private String graduationYear;
    private String recommend;
    
    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getAptNumber() {
        return apartmentNumber;
    }

    public void setAptNumber(String apartmentNumber) {
        this.apartmentNumber = apartmentNumber;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getTelephoneNumber() {
        return telephone;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephone = telephoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLinkToBio() {
        return linkToBio;
    }

    public void setLinkToBio(String linkToBio) {
        this.linkToBio = linkToBio;
    }

    public String getDateOfSurvey() {
        return dateOfSurvey;
    }

    public void setDateOfSurvey(String dateOfSurvey) {
        this.dateOfSurvey = dateOfSurvey;
    }

    public String getThingsYouLiked() {
        return thingsYouLiked;
    }

    public void setThingsYouLiked(String thingsYouLiked) {
        this.thingsYouLiked = thingsYouLiked;
    }

    public String getInterest() {
        return interest;
    }

    public void setInterest(String interest) {
        this.interest = interest;
    }

    public String getComments() {
        return additionalComments;
    }

    public void setComments(String comments) {
        this.additionalComments = comments;
    }

    public String getGraduationMonth() {
        return graduationMonth;
    }

    public void setGraduationMonth(String graduationMonth) {
        this.graduationMonth = graduationMonth;
    }

    public String getGraduationYear() {
        return graduationYear;
    }

    public void setGraduationYear(String graduationYear) {
        this.graduationYear = graduationYear;
    }

    public String getRecommend() {
        return recommend;
    }

    public void setRecommend(String recommend) {
        this.recommend = recommend;
    }

}

