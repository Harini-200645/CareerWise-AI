package com.careerwise.careerwise.dto;

import java.util.List;

public class RecommendationResponse {

    private String career;
    private String summary;
    private String reason;
    private List<String> skills;
    private List<String> roadmap;
    private List<String> courses;
    private String salary;
    private String futureScope;
    private List<String> companies;

    public RecommendationResponse() {
    }

    public RecommendationResponse(String career,
                                  String summary,
                                  String reason,
                                  List<String> skills,
                                  List<String> roadmap,
                                  List<String> courses,
                                  String salary,
                                  String futureScope,
                                  List<String> companies) {

        this.career = career;
        this.summary = summary;
        this.reason = reason;
        this.skills = skills;
        this.roadmap = roadmap;
        this.courses = courses;
        this.salary = salary;
        this.futureScope = futureScope;
        this.companies = companies;
    }

    public String getCareer() {
        return career;
    }

    public void setCareer(String career) {
        this.career = career;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public List<String> getRoadmap() {
        return roadmap;
    }

    public void setRoadmap(List<String> roadmap) {
        this.roadmap = roadmap;
    }

    public List<String> getCourses() {
        return courses;
    }

    public void setCourses(List<String> courses) {
        this.courses = courses;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public String getFutureScope() {
        return futureScope;
    }

    public void setFutureScope(String futureScope) {
        this.futureScope = futureScope;
    }

    public List<String> getCompanies() {
        return companies;
    }

    public void setCompanies(List<String> companies) {
        this.companies = companies;
    }
}