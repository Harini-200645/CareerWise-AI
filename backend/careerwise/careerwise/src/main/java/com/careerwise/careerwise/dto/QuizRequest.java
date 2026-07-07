package com.careerwise.careerwise.dto;

import java.util.List;

public class QuizRequest {

    private String name;
    private String education;
    private List<String> skills;
    private List<String> interests;
    private List<String> strengths;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEducation() { return education; }
    public void setEducation(String education) { this.education = education; }

    public List<String> getSkills() { return skills; }
    public void setSkills(List<String> skills) { this.skills = skills; }

    public List<String> getInterests() { return interests; }
    public void setInterests(List<String> interests) { this.interests = interests; }

    public List<String> getStrengths() { return strengths; }
    public void setStrengths(List<String> strengths) { this.strengths = strengths; }
}